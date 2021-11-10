const debug = require('debug')

const log = debug('app:index')

const applicationEnvVars = [
  'NODE_ENV',
  'PORT'
]

const corsEnvVars = [
  'CORS_ORIGIN',
  'CORS_METHODS'
]

const rateLimitEnvVars = [
  'RATE_LIMIT_TIME',
  'RATE_LIMIT_MAX_REQUESTS'
]

const encryptionEnvVars = [
  'SALT_ROUNDS',
  'ALGORITHM',
  'ENABLE_ENCRYPTION',
  'ENCRYPTION_PUBLIC_KEY',
  'ENCRYPTION_PRIVATE_KEY'
]

const emailEnvVars = [
  'EMAIL_DOMAIN',
  'EMAIL_API_KEY'
]

const envVars = [
  ...applicationEnvVars,
  ...corsEnvVars,
  ...rateLimitEnvVars,
  ...encryptionEnvVars,
  ...emailEnvVars
]

/*
 * Code to check if required enviroment variables are set to run the application
 */
const unusedEnvVars = envVars.filter(i => !process.env[i])

if (unusedEnvVars.length) throw new Error('Required ENV variables are not set: [' + unusedEnvVars.join(', ') + ']')

const { app } = process.env.NODE_ENV === 'local' ? require('./src') : require('./build/src')

app.listen(process.env.PORT, () => log(`App started on port ${process.env.PORT}`))

module.exports = app
