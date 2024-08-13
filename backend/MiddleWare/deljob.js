const moment=require("moment");
const Job = require("../Models/Job.js");
const deleteOldJobs = async (req,res,next) => {

    try {
        const currentDate = moment().format('YYYY-MM-DD');
      const result = await Job.deleteMany({ date: { $lt: currentDate } });
      next();
    } catch (error) {
      next();
    }
  };
  module.exports=deleteOldJobs;