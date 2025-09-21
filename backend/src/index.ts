import express = require('express')
const { userRouter , todosRouter } = require("./routes/users");

const app = express();

app.use(express.json());

app.use("/users", userRouter)
app.use("/todos" , todosRouter)

app.listen(3000)