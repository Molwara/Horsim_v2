/*
	Game
*/
var game = {
	//init
	initialize: function() {
		this.setDate();
		this.setWeather();
		this.initDatabase();
	},
	//Date
	setDate: function(){
		this.date = new Date();
		this.year = this.date.getFullYear();
		this.month = this.date.getMonth();
		this.day = this.date.getDate();
		this.weekday = this.date.getDay();
		this.time = this.date.getHours() + ':' + this.date.getMinutes();
		this.timestamp = this.date.getTime();
	},
	//Weather
	setWeather: function(){
		//States
		this.weather_states = ['sunny','rainy','cloudy'];
		this.season_states = ['spring','summer','autumn','winter'];
		
		this.weather = this.weather_states[0];
		this.season = this.season_states[0];
	},
	//Data combined with other classes
	//init all Instances
	initDatabase: function(){
		this.user = new player();
		
		this.farms = []; //all farms in game
		this.persons = []; //all players in game: (storekeeper,) other farmers, farm workers and guests
		this.horses = []; //all horses in game: on farms and horse market
		this.horseMarket = []; //just market horses
		
		this.buildings = []; //all buldings that can be build
		this.items = []; //all items that can be bought
	}
};