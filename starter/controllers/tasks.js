const getAllTasks = (req, res) => {
    res.send("all items are here");
};

const createTask = (req, res) => {
    res.json(req.body);
};
const getSingleTask = (req, res) => {
    res.json(req.params);
};
const updateTask = (req, res) => {
    res.send("Task updated");
};
const deleteTask = (req, res) => {
    res.send("Task deleted");
};

module.exports = {
    getAllTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask,
};
