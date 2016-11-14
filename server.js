var express = require("express");
var app = express();
var mongojs = require("mongojs");
var db = mongojs('contactlist', ['contactlist']);
var bodyParser = require("body-parser");
//to test if express is working
//to run type in terminal node script.js and hit enter
//go to http://localhost:3000/
/*app.get('/', function(req, res){
  res.send("Hello World from server.js");
});

app.listen(3000);
console.log("Server running on port 3000");*/
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
//this is the response
app.get('/contactlist', function(req, res){
  console.log("I received a GET request");

  db.contactlist.find(function(err, docs){
    console.log(docs);
    res.json(docs);
  });
});

app.post('/contactlist', function(req, res){
  console.log(req.body);
  db.contactlist.insert(req.body, function(err, doc){
    res.json(doc);
  });
});
//    var contactlist = [person1, person2, person3];
  //  res.json(docs);

/*  person1 = {
    name: "Popeye",
    email: "popeye@gmail.com",
    number: "111-222-3333"
  };

  person2 = {
    name: "Brutus",
    email: "brutus@gmail.com",
    number: "111-222-7777"
  };

  person3 = {
    name: "Olive Oil",
    email: "olive_oil@gmail.com",
    number: "111-222-9999"
  };
*/

//  var contactlist = [person1, person2, person3];
//  res.json(contactlist);

//});

app.delete('/contactlist/:id', function(req, res){
  var id = req.params.id;
  console.log(id);
  db.contactlist.remove({_id: mongojs.ObjectId(id)}, function(err, doc){res.json(doc);});
});

app.get('/contactlist/:id', function(req, res){
  var id = req.params.id;
  console.log(id);
  db.contactlist.findOne({_id: mongojs.ObjectId(id)}, function(err, doc){res.json(doc);});
});

app.put('/contactlist/:id', function(req, res){
  var id = req.params.id;
  console.log(req.body.name);
  db.contactlist.findAndModify({query: {_id: mongojs.ObjectId(id)},
    update: {$set: {name: req.body.name, email: req.body.email, number: req.body.number}},
    new: true}, function(err, doc){res.json(doc);}
  )});

app.listen(3000);
console.log("Server running on port 3000");

//app.get('/contactlistapp')
