/**
 * creats a logger to be used intead of console.log
 */

const winston = require('winston');
const config = require('config');

let logLevel;
if (config.has('main.logLevel')) {
  logLevel = config.get('main.logLevel');
} else {
  logLevel = 'info';
}

const logger = winston.createLogger({
  level: logLevel,
  format: winston.format.combine(
    winston.format.colorize(), // to colour the inputs in termenals
    winston.format.json(),
  ),
  defaultMeta: { service: 'user-service' },
  transports: [new winston.transports.Console()],
});

module.exports = logger;
