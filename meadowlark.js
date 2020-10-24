const express = require('express');
const app = express();

const handlebars = require('express3-handlebars')
	.create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

let fortunes = [
	"Conquer your fears or they will conquer you.", 
	"Rivers need springs.", 
	"Do not fear what you don't know.", 
	"You will have a pleasant surprise.", 
	"Whenever possible, keep it simple.",
];

app.get('/', (req, res) => {
	// res.type('text/plain');
	// res.send('Meadowlark Travel');
	res.render('home');
});

app.get('/about', (req, res) => {
	// res.type('text/plain');
	// res.send('About Meadowlark Travel');

	let randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
	res.render('about', {fortune: randomFortune});
});

// app.get('/about*', (req, res) => {

// })

// app.get('/about/contact', (req, res) => {

// })

// app.get('/about/directions', (req, res) => {

// })

//custom 404 page, now 404 catch-all handler(middleware)
app.use((req, res, next) => {
	// res.type('text/plain');
	res.status(404);
	// res.send('404 - Not Found');
	res.render('404');
});

//custom 500 page, now 500 error handler (middleware)
app.use((err, req, res, next) => {
	console.error(err.stack);
	// res.type('text/plain');
	res.status(500);
	// res.send('500 - Server Error');
	res.render('500')
});

app.listen(app.get('port'), () => {
	console.log('Express app started on http://localhost:' + app.get('port') + 
	'; press Ctrl-C to terminate.');
});


// done at page 28 | Chapter 3: Saving time with express