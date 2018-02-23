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
//     db.getUserByAuthId([profile.id], (err, user) => {
//       user = user[0];
//       if(!user) {
//         console.log('CREATING USER');
//         db.createUserByAuth([profile.displayName, profile.id], (err, user) => {
//           console.log('USER CREATED', user);
//           return done(err, user[0]);
//         });
//       } else {
//         console.log('FOUND USER', user);
//         return done(err, user);
//       }
//     }

// )
      done(null, profile);
  });