require('dotenv').config();

const config = {
  dev: process.env.NODE_ENV !== 'production', // Enable for dev
  // dev: process.env.NODE_ENV.trim() !== 'production', // Enable for prod
  port: process.env.PORT || 3000,
  cors: process.env.CORS,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  defaultAdminPassword: process.env.DEFAULT_ADMIN_PASSWORD,
  defaultUserPassword: process.env.DEFAULT_USER_PASSWORD,
  authJwtSecret: process.env.AUTH_JWT_SECRET,
  publicApiToken: process.env.PUBLIC_API_TOKEN,
  adminApiKeyToken: process.env.ADMIN_API_KEY_TOKEN,
};
// console.log(`Inside Config:`, JSON.stringify(config, null, 3));

module.exports = { config };
