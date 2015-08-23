/*
	Navigation
*/
var navigation = {
	active: {},
	farm: {
		key: "farm",
		type: "canvas",
		title: "Hofname",
		items: [
			{
				name: "Profil"
			},
			{
				name: "Büro"
			},
			{
				name: "Pferde"
			},
			{
				name: "Bauen"
			}
		],
		content: {}
	},
	village: {
		key: "village",
		type: "canvas",
		title: "Dorfname",
		items: [
			{
				name: "Profil"
			},
			{
				name: "Laden"
			},
			{
				name: "Behandlung"
			},
			{
				name: "Turnier"
			}
		],
		content: {}
	},
	profile: {
		key: "profile",
		type: "detail",
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
		],
		content: {}
	},
	office: {
		key: "office",
		type: "grid",
		title: "Büro",
		items: [
			{
				name: "Pinnwand"
			},
			{
				name: "Kalender"
			},
			{
				name: "Arbeiter"
			},
			{
				name: "Gäste"
			},
			{
				name: "Statistiken"
			},
			{
				name: "Erfolge"
			},
			{
				name: "Hofverwaltung"
			}
		],
		content: {}
	},
	horses: {
		key: "horses",
		type: "list",
		title: "Pferde",
		items: [], //game.user.horses
		content: {}
	},
	build: {
		key: "build",
		type: "list",
		title: "Bauen",
		items: [], //game.buildings
		content: {}
	},
	shop: {
		key: "shop",
		type: "list",
		title: "Laden",
		items: [], //game.items
		content: {}
	},
	care: {
		key: "care",
		type: "grid",
		title: "Behandlung",
		items: [
			{
				name: "Apotheke"
			},
			{
				name: "Schmiedebedarf"
			},
			{
				name: "Praxis"
			},
			{
				name: "Schmiede"
			}
		],
		content: {}
	},
	tourney: {
		key: "tourney",
		type: "grid",
		title: "Turnier",
		items: [
			{
				name: "Pferdemarkt"
			},
			{
				name: "Turnierauswahl"
			},
			{
				name: "Vorbereitung"
			}
		],
		content: {}
	}
};