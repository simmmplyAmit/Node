var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

// Body Parser Middle ware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
 
// Static content
// app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
	res.render('index',{
		title:'My Dear Customers',
		users:[
			{
				'name':'Amit',
				'age':25
			},
			{
				'name':'Sumit',
				'age':22
			},
			{
				'name':'Heena',
				'age':20
			},
		]
	});
});

app.listen(3000, function(){
	console.log('Server started at port 3000');
});