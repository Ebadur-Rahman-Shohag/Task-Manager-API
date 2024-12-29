const express = require("express");
const router = express.Router();

const {
    getAllTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask,
} = require("../controllers/tasks");

// router.get("/", getAllTasks);
// router.post("/", createTasks);
// router.get("/:id", getSingleTask);
// router.post("/:id", updateTask);
// router.post("/:id", deleteTask);

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getSingleTask);
router.route("/:id").patch(updateTask).delete(deleteTask);

module.exports = router;
