//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let physicians = {
    "Dr. Algernop Krieger": {
        "patients": {
            "Sterling Archer": {"time": "8:00AM", "kind": "New Patient"},
            "Cyril Figis": {"time": "8:30AM", "kind": "Follow-up"},
            "Ray Gilette": {"time": "9:00AM", "kind": "Follow-up"}
        }, 
        "email": "krieger@notablehealth.com"
    },
    "Dr. Julius Hibbert": {
        "patients": {
            "Sterling Archer": {"time": "8:00AM", "kind": "New Patient"},
            "Cyril Figis": {"time": "8:30AM", "kind": "Follow-up"},
            "Ray Gilette": {"time": "9:00AM", "kind": "Follow-up"}
        }, 
        "email": "hibbert@notablehealth.com"
    },
    "Dr. Nick Rivera": {
        "patients": {
            "Sterling Archer": {"time": "8:00AM", "kind": "New Patient"},
            "Cyril Figis": {"time": "8:30AM", "kind": "Follow-up"},
            "Ray Gilette": {"time": "9:00AM", "kind": "Follow-up"}
        }, 
        "email": "rivera@notablehealth.com"
    }
};

app.get("/", function(req,res){ 
    res.render('index', {physicians: physicians});
});

app.get("/physician/:physicianName", function(req, res) {
    let name = _.lowerCase(req.params.physicianName); 
    for (var key in physicians) { 
        if (name == _.lowerCase(key)) { 
            res.render('physician', {physician: physicians[key], physicianName: key, physicianEmail: physicians[key]['email']});
        }
    }
});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});