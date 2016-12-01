document.getElementById('click-me').onclick = calculate;
//or document.queryslector('#clickme').onclick=caclculate;


function calculate () {
	var age = parseInt(document.getElementById('age').value);
	//var age = parseInt(document.querySelector('#age').value);
	var maxAge = parseInt(document.getElementById ('max-age').value);
	//var maxAge = parseInt(document.querySelector('#max-age').value);
	var numPerDay = parseInt(document.getElementById ('NumPerDay').value);
	//var favDrink = parseInt(document.querySelector('#item').value);
	var item = document.getElementById ('item').value;

	//console.log (age, maxAge, item, numPerDay);


	var solution = (maxAge - age) * numPerDay * 365;
	//var drinksLeft = (maxAge - age) * numPerDay *365;
	
	document.getElementById('solution').innerHTML = solution;
	//document.querySelector('#solution').innerHTML = drinksleft;
	document.getElementById('drink').innerHTML = item;
	//document.querySelector('#drink').innerHTML = favDrink;

}






