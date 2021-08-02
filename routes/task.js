const { Router } = require("express");
const taskController = require("../controllers/taskController");
const router = Router();

router.get("/tasks", taskController.getTasks);
router.post("/tasks", taskController.createTask);
router.put("/tasks/:id", taskController.createTask);

module.exports = router;
