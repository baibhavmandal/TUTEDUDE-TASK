import { createLogger, format, transports } from "winston";

const logger = createLogger({
  level: "info",
  format: format.combine(
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    format.printf(
      ({ level, message, timestamp }) =>
        `${timestamp} [${level.toUpperCase()}]: ${message}`
    )
  ),
  transports: [
    new transports.Console(), // Log to console
    new transports.File({ filename: "logs/error.log", level: "error" }), // Error logs
    new transports.File({ filename: "logs/combined.log" }), // All logs
  ],
});

export default logger;
