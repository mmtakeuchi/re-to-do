const { Router } = require("express");
const taskController = require("../controllers/taskController");
const router = Router();

router.get("/tasks", taskController.getTasks);
router.post("/tasks", taskController.createTask);

module.exports = router;
