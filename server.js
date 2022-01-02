

var fs = require('fs');

var data = fs.readFileSync('students.json');

var students = JSON.parse(data);

console.log('server is starting');

console.log (students);



var express = require('express');

var app = express();

var server = app.listen(3000, listening);

function listening() {
  console.log("listening.....");
}


app.use(express.static('website'));

app.get('/add/:student/:ID?', addstudent);

function addstudent(request, response) {

  var data = request.params;
  var student = data.student;
  var ID = Number(data.ID);

 if (!ID) {
   reply = {
      msg: "ID is required."
   }
 }

 else {

  students[student] = ID;
  var data = JSON.stringify(students, null, 2);
  fs.writeFile('students.json', data, finished);

  function finished(err){

     console.log('all set. ');

  }




   reply = {
     msg: "Thank you for your student."
   }
 }

}
