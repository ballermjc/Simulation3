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

massive(process.env.CONNECTION_STRING).then(dbInstance => app.set('db', dbInstance));

var corsOptions = {
    origin: 'http://localhost:3000'
}

require('dotenv').config();
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
passport.use(strategy);




app.use(express.static(path.resolve(__dirname, "client", "build")));
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});


passport.serializeUser((user,done) => {
    console.log(user)
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
    console.log(req.session.passport.user);//this gives me what was set on the middleware for user and id
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