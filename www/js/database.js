/*
	Player
*/
//Class: data and functions created everytime you create a new object
var player = function(){
	//Data
	this.name = '';
	this.money = 100000;
	this.farm = false; //new farm(): not every player has a farm!!!
	this.horses = []; //just owned horses
	this.riding = []; //all horses riding (can be not owned)
	
	//Object Functions
	
};

//Prototype: all objects get this data and functions
player.prototype = {
	//Data
	
	//Functions
	
};

/*
	Horse
*/
//Class: data and functions created everytime you create a new object
var horse = function(){
	//Data
	this.name = '';
	this.owner = false; //new player(): not every horse has an owner!!!
	this.riding = []; //can have many riding players
	this.farm = false; //new farm(): not every horse has a farm!!!
	
	//Object Functions
	
};

//Prototype: all objects get this data and functions
horse.prototype = {
	//Data
	
	//Functions
	
};

/*
	Farm
*/
//Class: data and functions created everytime you create a new object
var farm = function(){
	//Data
	this.name = '';
	this.image = '';
	this.size = [x,y]; //boxes count
	this.owner = false; //new player(): not every farm has an owner!!!
	this.persons = []; //all players on farm: workers and guests
	this.workers = [];
	this.guests = [];
	this.buildings = []; //just buildings constructed
	this.horses = []; //all horses on farm (can have different owners)
	this.specialization = '';
	
	//Functions
	
};

//Prototype: all objects get this data and functions
farm.prototype = {
	//Data
	specialization_states: ['english','western','other'],
	riding_states: [],
	english_states: ['dressage','jumping','eventing','hunting','endurance','orientation','trail','gait','quadrille','racing'],
	western_states: ['reining','barrelrace','polebending','cutting','cowhorse','penning','trail','pleasure','driving','horsemanship','riding','ranchhorse','showmanship','halter'],
	other_states: ['hestadagar','circus','games','polo','driving','vaulting','goundwork','therapeutic','handicapped','plough']
	
	//Functions
	
};

/*
	Bulding
*/
//Class: data and functions created everytime you create a new object
var building = function(){
	//Data
	this.name = '';
	
	//Functions
	
};

//Prototype: all objects get this data and functions
building.prototype = {
	//Data
	
	//Functions
	
};

/*
	Thing
*/
//Class: data and functions created everytime you create a new object
var material = function(){
	//Data
	this.name = '';
	
	//Object Functions
	
};

//Prototype: all objects get this data and functions
material.prototype = {
	//Data
	
	//Functions
	
};