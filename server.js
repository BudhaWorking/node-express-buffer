var express = require("express")
var app = express();

var router= express.Router();

router.get('/stu', function(request, response){
   
   var student=[
        {name: 'Abhishek',age:  '26',branch: 'cse',rollno: '30001', hobbies: 'cricket'},
        {name: 'Alok',    age:  '25',branch: 'mech',rollno: '30002',hobbies: 'hockey'},
        {name: 'Arjun',   age:  '27',branch: 'eee',rollno: '30003', hobbies: 'basketball'},
        {name: 'Ashish',  age:  '28',branch: 'it',rollno: '30004', hobbies: 'cricket'},
        {name: 'Aankit',  age:  '29',branch: 'ei',rollno: '30005', hobbies: 'rabbi'},
        {name: 'Anubav',  age:  '30',branch: 'civil',rollno: '30006', hobbies: 'football'},
        {name: 'Abdul',   age:  '31',branch: 'cse',rollno: '30007', hobbies: 'running'}
        
   ]
   		response.json(student)
})

app.use('/abhi', router)

var PORT = process.env.PORT || 1337

app.listen(PORT, function(){
	console.log("Server Listing at PortNo:-"+ PORT)
})