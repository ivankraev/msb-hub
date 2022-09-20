'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const config_1 = require('@utils/config');
const createServer_1 = __importDefault(require('@utils/createServer'));
const logger_1 = __importDefault(require('@utils/logger'));
const signals = ['SIGINT', 'SIGTERM', 'SIGHUP', 'SIGUSR1'];
function gracefulShutdown({ signal, server }) {
  return __awaiter(this, void 0, void 0, function* () {
    logger_1.default.info(`Got signal ${signal}. Shutting down...`);
    server.close();
    process.exit(0);
  });
}
function startServer() {
  return __awaiter(this, void 0, void 0, function* () {
    const app = (0, createServer_1.default)();
    const server = app.listen(config_1.config.PORT, () =>
      __awaiter(this, void 0, void 0, function* () {
        logger_1.default.info(`App is running on port ${config_1.config.PORT}`);
      })
    );
    for (let i = 0; i < signals.length; i++) {
      process.on(signals[i], () =>
        __awaiter(this, void 0, void 0, function* () {
          return yield gracefulShutdown({
            signal: signals[i],
            server,
          });
        })
      );
    }
  });
}
startServer();
