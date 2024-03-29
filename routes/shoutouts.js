var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

/* GET users listing. */
router.get('/:id?', function(req, res, next) {
    var id = req.params.id;
    var file = path.join(__dirname,'../models/shoutouts.json');
    fs.readFile(file, 'utf8', function(err, data){
        if(err){
            next(err);
        } else {
            var obj = JSON.parse(data);
            var person = obj;

            obj.forEach(function(elem){
                if(elem.id == id){
                    person = elem;
                }
            });

        };
        res.json(person);

    })
});

module.exports = router;