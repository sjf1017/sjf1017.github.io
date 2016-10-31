document.getElementById('click-me').onclick = calculate;

function calculate () {
	var age = parseInt(document.getElementById('age').value);
	var maxAge = parseInt(document.getElementById ('max-age').value);
	var numPerDay = parseInt(document.getElementById ('NumPerDay').value);
	var item = document.getElementById ('item').value;


	var solution = (maxAge - age) * numPerDay * 365;
	
	document.getElementById('solution').innerHTML = solution;
	document.getElementById('drink').innerHTML = item;
}






