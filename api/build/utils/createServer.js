'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const body_parser_1 = __importDefault(require('body-parser'));
const helmet_1 = __importDefault(require('helmet'));
const cors_1 = __importDefault(require('cors'));
const config_1 = require('./config');
const corsOptions = {
  origin: config_1.config.API_HOST,
};
function createServer() {
  const app = (0, express_1.default)();
  app.use((0, cors_1.default)(corsOptions));
  app.use(body_parser_1.default.urlencoded({ extended: false }));
  app.use(body_parser_1.default.json());
  app.use((0, helmet_1.default)());
  app.get('/healthcheck', (req, res) => {
    return res.sendStatus(200);
  });
  app.get('/', (req, res) => {
    return res.sendStatus(200);
  });
  return app;
}
exports.default = createServer;
