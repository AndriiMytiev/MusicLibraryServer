const express = require("express");
const cors = require("cors");
const userRouter = require("./routers/user.router");
const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", userRouter);

app.listen(PORT, () => console.log(`server started on post ${PORT}`));
