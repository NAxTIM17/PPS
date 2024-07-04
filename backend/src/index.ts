import http from 'http';
import cors from 'cors';
import express from 'express';

const app = express();

app.disable('x-powered-by');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const server = http.createServer(app);

const port =process.env.PORT || '4000';

app.get('/status', (_req, res) => {
  return res.status(200).end('It\'s alive!');
});

server.listen(port, () => {
  console.log(`Server up and running on port :${port}`);
});
