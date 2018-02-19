const express           = require('express'),
      app               = express(),
      authController    = require('./controllers/auth');
      bodyParser        = require('body-parser'),
      cors              = require('cors'),
      massive           = require('massive'),
      passport          = require('passport');
      path              = require('path'),
      port              = 3000;
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


passport.serializeUser(function(user, done) {
    done(null, {id: user.id, firstName: user.firstName || '', lastName: user.lastName || '', picture: 'https://robohash.org/me'});
});

passport.deserializeUser(function(obj, done) {
    authController.register;
    done(null.obj);
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
    authController.login;
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


app.listen(port, console.log(`All the homies are on port ${port}`));