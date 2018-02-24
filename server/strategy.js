const Auth0Strategy = require('passport-auth0');
const config = require(`${__dirname}/config.js`);
const { domain, clientID, clientSecret } = config;

module.exports = new Auth0Strategy({
   domain:       domain,
   clientID:     clientID,
   clientSecret: clientSecret,
   callbackURL:  '/api/auth/setUser'
  },
  function(accessToken, refreshToken, extraParams, profile, done) {
    const db = app.get('db');
    db.read_user([ profile.user_id ])
      .then(user => {
        if(user[0]) {
          return done( null, { id: user_id });
        } else {
          db.create_user([profile.user_id, 'https://robohash.org/me'])
            .then(user => {
              return done(null, { id: user_id });
            })
        }
      })

          console.log(profile);
          done(null, profile);
  });