import express from 'express';
import intiRoyter from './controllers/index.js';
const app = express();
const port = 5001;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

await intiRoyter(app)

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
