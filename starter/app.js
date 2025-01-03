const express = require("express");
const app = express();
const taskRouter = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

// middleware
app.use(express.json());

//routes
app.get("/hello", (req, res) => {
    res.send("Welcome to Task Manager App");
});

app.use("/api/v1/tasks", taskRouter);

const port = 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Server is listening to port ${port}...`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();

// app.get("/api/v1/tasks")       -get all the tasks
// app.post("/api/v1/tasks")      -create a new task
// app.get("/api/v1/tasks/:id")   -get single task
// app.patch("/api/v1/tasks")     -update task
// app.delete("/api/v1/tasks")    -delete task
