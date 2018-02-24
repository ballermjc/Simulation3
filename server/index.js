const express           = require('express'),
      app               = express(),
      authController    = require('./controllers/auth');
      bodyParser        = require('body-parser'),
      cors              = require('cors'),
      friendsController = require('./controllers/friend');
      massive           = require('massive'),
      passport          = require('passport');
      path              = require('path'),
      port              = 3001;
      session           = require('express-session'),
      checkForSession   = require('./middlewares/checkForSession'),
      strategy          = require('./strategy');

      const Auth0Strategy = require('passport-auth0');
      const config = require(`${__dirname}/config.js`);
      const { domain, clientID, clientSecret } = config;

      require('dotenv').config();

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    console.log('connected');
    app.set('db', dbInstance)
}).catch(err => {
    console.log('ERROR', err);
});

var corsOptions = {
    origin: 'http://localhost:3000'
}


app.use(cors());
app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));
// app.use(checkForSession);
app.use(passport.initialize());
app.use(passport.session());
passport.use(new Auth0Strategy({
    domain:       domain,
    clientID:     clientID,
    clientSecret: clientSecret,
    callbackURL:  '/api/auth/setUser'
   },
   function(accessToken, refreshToken, extraParams, profile, done) {
    //  const dbInstance = app.get('db');
    //  dbInstance.read_user([ profile.user_id ])
    //    .then(user => {
    //      if(user.userid) {
    //          console.log('DB User: ', user);
    //        return done( null, profile);
    //      } else {
    //        dbInstance.create_user([profile.user_id, 'https://robohash.org/me'])
    //          .then(user => {
    //              console.log('Created User', user);
    //            return done(null, profile);
    //          })
    //      } 
    //    })
    // dbInstance.create_user([profile.user_id, 'https://robohash.org/me']);
           done(null, profile);
   }));




app.use(express.static(path.resolve(__dirname, "client", "build")));
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});


passport.serializeUser((user,done) => {
    done(null,
        {
           id: user.id,
           firstName: user.first || '',
           lastName: user.last || '',
           picture: 'https://robohash.org/me'
        });
});

passport.deserializeUser((obj,done) => {
     
    done(null,obj);
})

//Authorization Endpoints
app.get( '/api/auth/login',
    passport.authenticate('auth0', { 
        successRedirect: '/api/auth/setUser',
        failureRedirect: '/profile', 
        failureFlash: true 
}));

app.get('/api/auth/setUser', passport.authenticate('auth0'), (req,res) => {
    console.log('Passport User: ',req.session.passport.user);//
    let passportUser = req.session.passport.user;
    const dbInstance = app.get('db');
     dbInstance.read_user([ passportUser.id ])
       .then(user => {
           console.log('Promise: ',user);
           if(user.length && user[0].userid) {
             console.log('DB User already exists: ', user);
           return done( null, profile);
         } else {
           dbInstance.create_user([ passportUser.id, 'https://robohash.org/me'])
             .then(user => {
                 console.log('Created User in DB: ', user);
               return done(null, profile);
             })
         } 
       })

    res.redirect('http://localhost:3000/dashboard')//this works
});

app.get('/api/auth/authenticated', (req,res) => {
    if(req.session.passport.user){
        res.status(200).send(req.session.passport.user)
    } else {
        res.status(403)
    }
});


//Friend Routes//
app.get('/api/friend/list', friendsController.getFriends);
app.post('/api/friend/add', friendsController.postFriends);
app.post('/api/friend/remove', friendsController.removeFriends);


app.listen(port, console.log(`All the homies are on port ${port}`));

// CREATE TABLE Users (
//     ID INTEGER PRIMARY KEY,
//     UserID TEXT,
//     Picture TEXT,
//     FirstName TEXT,
//     LastName TEXT,
//     Gender TEXT,
//     HairColor TEXT,
//     EyeColor TEXT,
//     Hobby TEXT,
//     BirthdayDay INTEGER,
//     BirthdayMonth TEXT,
//     BirthdayYear INTEGER
// );