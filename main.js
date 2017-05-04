var vegfood = [ 
{ name:"Pannkakor", veg: true, url: "http://www.spisa.nu/3.12981/recept/pannkakorplattar-med-sylt-och-gradde/"},
{ name: "Majsplättar med avokadoröra", veg: true, url: "https://www.mathem.se/recept/mattias-majsplattar-med-avokado-chimichurri"},
{ name: "Morotsbiffar", veg: true, url: "http://www.tasteline.com/recept/morotsbiffar-med-dragon/"},
{ name: "Falafel med hummus", veg: true, url: "http://www.ica.se/recept/falafel-med-hummus-yoghurtdressing-och-picklad-rodlok-717166/"}
]

var meatfood = [
{ name: "Köttbullar med potatismos och lingonsylt", veg: false, url: "https://www.landleyskok.se/recept/hemlagade-kottbullar.html/"},
{ name: "Coq au vin", veg: false, url: "http://www.foodnetwork.com/recipes/ina-garten/coq-au-vin-recipe4.html"},
{ name: "Lax med nudelsallad", veg: false, url: "https://www.mathem.se/recept/gustavs-sesamstekta-lax-med-varm-nudelsallad--lime-och-koriander"},
{ name: "Baconinlindad kycklingfilé", veg: false, url: "https://www.kokaihop.se/recept/baconinlindad-kycklingfile-2"},
{ name:"Pannkakor", veg: true, url: "http://www.spisa.nu/3.12981/recept/pannkakorplattar-med-sylt-och-gradde/"},
{ name: "Majsplättar med avokadoröra", veg: true, url: "https://www.mathem.se/recept/mattias-majsplattar-med-avokado-chimichurri"},
{ name: "Morotsbiffar", veg: true, url: "http://www.tasteline.com/recept/morotsbiffar-med-dragon/"},
{ name: "Falafel med hummus", veg: true, url: "http://www.ica.se/recept/falafel-med-hummus-yoghurtdressing-och-picklad-rodlok-717166/"}
]


function myFunction () {
	if(x = document.getElementById("myCheck").checked){
		document.getElementById("mat").innerHTML = getRandomVeg().name;
	}
	else {
		document.getElementById("mat").innerHTML = getRandomMeat().name;
	}
}


function getRandomVeg () {
	var randomVeg = vegfood[Math.floor(Math.random()*vegfood.length)];
return randomVeg;
}


function getRandomMeat() {
	var randomMeat = meatfood[Math.floor(Math.random()*meatfood.length)];
	return randomMeat;
}


// var x = document.getElementById("myCheck");
// x.checked = true;
