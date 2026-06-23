const express = require("express");
const router = express.Router();

const { getJobDetail }   = require("../controllers/jobController");
const { getAdmitDetail } = require("../controllers/admitController");
const { getResultDetail } = require("../controllers/resultController");

router.get("/job/:id/detail",    getJobDetail);
router.get("/admit/:id/detail",  getAdmitDetail);
router.get("/result/:id/detail", getResultDetail);

module.exports = router;
// anil whole new page