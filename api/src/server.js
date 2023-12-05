const express = require('express');
const app = express();
const cors = require('cors');

const routes = require('./routes');
const port = 3001;
require('./database');

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});