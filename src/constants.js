const NODE_ENV = (process.env.NODE_ENV ?? 'development').toUpperCase();
const DISCORDJS_BOT_TOKEN = process.env[`DISCORDJS_BOT_TOKEN_${NODE_ENV}`];

module.exports = {
  NODE_ENV,
  DISCORDJS_BOT_TOKEN
}