import express from 'express';
import cors from "cors"
import { getOrder, newOrder } from './controllers/newOrder.controller';
 
const app = express();
app.use(express.json());
app.use(cors({ origin: "*"}));
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post('/order', newOrder);
app.get("/get-order",getOrder);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
