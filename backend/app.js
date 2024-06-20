


const server = () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(cors());
  app.use('/api', apiRouter);
  app.use(errorHandler);
  return app;
}
