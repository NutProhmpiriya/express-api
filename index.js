import express from 'express';
import intiRouter from './controllers/index.js';
import middlewares from './middleware/index.js';

const app = express();
const port = 5001;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(middlewares.logger)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

await intiRouter(app)

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
