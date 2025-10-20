require('dotenv').config();

const express = require('express');

const app = express();
const port = process.env.PORT || 3001;
const path = require('path');

app.use(express.static(path.join((__dirname, 'public'))));

const mainRouter = require("./src/routers/main.router");
app.use("/", mainRouter);

app.use('/productos', require("./src/routers/productos.router"));


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})