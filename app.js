const express = require("express");
const path = require("path");
const app = express();
const port = process.env.port || 3000;
const addProduct = require("./routes/add-product");
const shopRoutes = require("./routes/shop");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use(addProduct);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(port, () => console.log(`listening in port ${port} `));
