const { Router } = require("express");
const taskController = require("../controllers/taskController");
const router = Router();

router.get("/tasks", taskController.getTasks);

module.exports = router;
