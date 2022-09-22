import { IncomingMessage, Server, ServerResponse } from 'http';
import { config } from './utils/config';
import { createServer } from './utils/createServer';
import { logger } from './utils/logger';

const signals = ['SIGINT', 'SIGTERM', 'SIGHUP'] as const;

const gracefulShutdown = ({
  signal,
  server,
}: {
  signal: typeof signals[number];
  server: Server<typeof IncomingMessage, typeof ServerResponse>;
}) => {
  logger.info(`Got signal ${signal}. Shutting down...`);
  server.close();

  // kill db connection then kill the process
  process.exit(0);
};

async function startServer() {
  const app = createServer();

  const server = app.listen(config.PORT, () => {
    logger.info(`App is running on port ${config.PORT}`);
  });

  for (let i = 0; i < signals.length; i++) {
    process.on(signals[i], () => {
      gracefulShutdown({
        signal: signals[i],
        server,
      });
    });
  }
}

startServer().catch((err) => logger.error(err));
