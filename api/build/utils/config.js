'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.config = void 0;
const env_schema_1 = __importDefault(require('env-schema'));
const typebox_1 = require('@sinclair/typebox');
const schema = typebox_1.Type.Object({
  NODE_ENV: typebox_1.Type.String({
    default: 'development',
  }),
  PORT: typebox_1.Type.Number({
    default: 3000,
  }),
  DATABASE_URL: typebox_1.Type.String({
    default: 'fakeUrl',
  }),
  API_HOST: typebox_1.Type.String({
    default: 'http://localhost:80',
  }),
});
exports.config = (0, env_schema_1.default)({
  schema,
  dotenv: true,
});
