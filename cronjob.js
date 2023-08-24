var cron = require("node-cron");
var cronJob;

var {livesyncstockitem, livesyncitem} = require("../controller/businessController");

exports.cronstart = (req, res) => {    
    let inc = 0;
    cronJob = cron.schedule('*/30 * * * *', () => {
        // inc += 1;
        // if(inc >= 59) inc = 0;

        livesyncstockitem();
        livesyncitem();
        // console.log(`running a job for ${inc}`);
        
    }, {
        schedule: true,
        timezone: "America/Sao_Paulo"
    });
    // res.json({ msg: "cron started" });
    console.log("msg: cron started");
}

const cronstop = (req, res) => {
    cronJob.stop();
    res.json({ msg: "cron stopped" });
}

// module.exports = {
//     cronstart,
//     cronstop
// }