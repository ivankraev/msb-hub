import envSchema from 'env-schema';
import { Type, Static } from '@sinclair/typebox';

const schema = Type.Object({
  NODE_ENV: Type.String({
    default: 'development',
  }),
  PORT: Type.Number({
    default: 3000,
  }),
  DATABASE_URL: Type.String({
    default: 'fassssslsss',
  }),
  API_HOST: Type.String({
    default: 'http://localhost:80',
  }),
});

type Env = Static<typeof schema>;

export const config = envSchema<Env>({
  schema,
  dotenv: true,
});
