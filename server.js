const express = require("express");
const cors = require("cors");
const menuRoutes = require("./src/routes/menuRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api", menuRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando ✌ http://localhost:${PORT}`);
});