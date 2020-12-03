let forutneCookies = [
	"Conquer your fears or they will conquer you.",
	"Rivers need springs.",
	"Do not fear what you dont know.",
	"You will have a pleasant surprise.",
	"Whenever possible, keep it simple.",
];

exports.getFortune = function() {
	let idx = Math.floor(Math.random() * forutneCookies.length);
	return forutneCookies[idx];
}