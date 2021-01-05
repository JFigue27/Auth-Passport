const passport = require('passport');
const axios = require('axios');
const boom = require('@hapi/boom');
const { OAuth2Strategy: GoogleStrategy } = require('passport-google-oauth');

const { config } = require('../../../config');

passport.use(
  new GoogleStrategy(
    {
      clientID: config.googleClientId,
      clientSecret: config.googleClientSecret,
      callbackURL: '/auth/google/callback',
    },
    async function (accessToken, refreshToken, profile, cb) {
      try {
        await axios({
          url: `${config.apiUrl}/api/auth/prueba`,
          method: 'get',
        });
        const { data, status } = await axios({
          url: `${config.apiUrl}/api/auth/sign-provider`,
          method: 'post',
          data: {
            name: profile.displayName,
            email: profile.emails[0].value,
            password: profile.id,
            apiKeyToken: config.apiKeyToken,
          },
        });

        if (!data || status !== 200) {
          return cb(boom.unauthorized(), false);
        }

        return cb(null, data);
      } catch (error) {
        console.error(error);
      }
    }
  )
);
