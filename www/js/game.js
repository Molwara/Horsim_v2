/*
	Game
*/
var game = {
	//Data
	/*date : new Date(),
	year : date.getFullYear(),
	month : date.getMonth(),
	day : date.getDate(),
	weekday : date.getDay(),
	time : date.getHours() + ':' + this.date.getMinutes(),
	timestamp : date.getTime(),*/
	
	//States
	weather_states: ['sunny','rainy','cloudy'],
	season_states: ['spring','summer','autumn','winter'],
	
	/*weather : weather_states[0],
	season : season_states[0],*/
	
	//Date combined with other classes
	//user : new player(),
	farms : [], //all farms in game
	persons : [], //all players in game: (storekeeper,) other farmers, farm workers and guests
	horses : [], //all horses in game: on farms and horse market
	horseMarket : [], //just market horses
	
	buildings : [], //all buldings that can be build
	items : [], //all items that can be bought
	
	//Functions
	initDatabase: function(){
		
	}
};

var navigation = {
	profile: {
		type: "grid",
		title: "Profil",
		items: [
			{
				name: "Daten"
			},
			{
				name: "Inventar"
			},
			{
				name: "Ausbildung"
			}
		]
	},
	colors: {
		name: "Colors",
		description: "Fresh colors from the magic rainbow.",
		items: [
			{
				name: "Blue"
			},
			{
				name: "Green"
			},
			{
				name: "Orange"
			},
			{
				name: "Purple"
			},
			{
				name: "Red"
			},
			{
				name: "Yellow"
			},
			{
				name: "Violet"
			}
		]
	},
	vehicles: {
		name: "Vehicles",
		description: "Everything from cars to planes.",
		items: [
			{
				name: "Cars"
			},
			{
				name: "Planes"
			},
			{
				name: "Construction"
			}
		]
	}
};