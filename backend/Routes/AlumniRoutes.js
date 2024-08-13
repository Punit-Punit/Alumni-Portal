const express = require("express");
const AlumniControllers = require("../controllers/AlumniControllers.js");
const authmiddleware = require("../MiddleWare/auth_middleware.js");
const del=require("../MiddleWare/deljob.js")
const router = express.Router();

//protected routes
router.use("/dashdata", authmiddleware);
router.use("/jobs", del);

router.get("/", () => {
  res.send("hello Alumni from this side");
});

//public routes
router.get("/dashdata", AlumniControllers.ProfileData);
router.post("/register", AlumniControllers.Register);
router.post("/login", AlumniControllers.Login);
router.post("/add", AlumniControllers.AddNewJob);
router.put("/user/:id", AlumniControllers.Update);
router.get("/user/:id", AlumniControllers.GetData);
router.get("/gallery", AlumniControllers.GalleryImages);
router.get("/jobs", AlumniControllers.GetAllJobs);
router.get("/alum", AlumniControllers.GetAllAlumni);

module.exports = router;
