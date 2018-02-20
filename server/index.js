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

require('dotenv').config();
app.use(cors());
app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));
app.use(checkForSession);
app.use(passport.initialize());
app.use(passport.session());
passport.use(strategy);


passport.serializeUser((user, done) => {
    const { id, first, last } = user;
    console.log(user);
    return {
        id: id || '',
        first: first || '',
        last: last || '',
        picture: 'https://robohash.org/me'
    }
});

passport.deserializeUser(function(user, done) {
    // authController.register;
    const { id, first, last } = user;
    db.users.find(id, (err, user) => {
        if (err) {
            throw new Error(err);
        }
        if (user) {
            return done(null, user);
        }
        db.users.insert({id, first, last}, (err, res) => {
            if (err) {
                throw new Error(err)
            }
            done(null, user)
        });
    });
});

app.use(express.static(path.resolve(__dirname, "client", "build")));
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});



app.get('/api/auth/login', passport.authenticate('auth0', {
    successRedirect: '/api/auth/setUser',
    failureRedirect: '/api/auth/login',
    failureFlash: true
}));

app.get('/api/auth/setUser', (req, res) => {
    // authController.login;
    res.redirect('/dashboard');
});

app.get('/api/auth/authenticated', (req, res) => {
    const { user } = req.session;
    if(user) {
        res.status(200).send(user);
    } else {
        res.status(403);
    }
});

app.post('/api/auth/logout', authController.logout);


//Friend Routes//
app.get('/api/friend/list', friendsController.getFriends);
app.post('/api/friend/add', friendsController.postFriends);
app.post('/api/friend/remove', friendsController.removeFriends);


app.listen(port, console.log(`All the homies are on port ${port}`));