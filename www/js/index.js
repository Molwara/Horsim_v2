/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        //console.log('initialize');
		
		this.bindEvents();
    },
    // Bind Event Listeners
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
		//console.log('bindEvents');
		
        document.addEventListener('deviceready', this.onDeviceReady, false);
		
		//for browser test
		$(document).ready(this.onDocumentReady);
		$(window).load(this.onWindowLoaded);
    },
    // deviceready Event Handler
    onDeviceReady: function() {
		//console.log('onDeviceReady');
		
    },
	onDocumentReady: function() {
		//console.log('onDocumentReady');
		
		app.setNavigation();
		
		app.manipulateDom();
    },
	onWindowLoaded: function() {
		//console.log('onWindowLoaded');
		
		//all elements (like images) loaded
    },
	// set eventlisteners on navigation
	setNavigation: function(){
		console.log('setNavigation');
		
		// Listen for any attempts to call changePage().
		$(document).bind('pagebeforechange', this.onPageBeforeChange);
		
		// back button navigation
		$('#backButton').bind('click', this.onBackButtonClick);
	},
	// make things before normal pageload
	onPageBeforeChange: function( e, data ) {
		console.log('onPageBeforeChange');
		
		if ( typeof data.toPage === "string" ) {
			var u = $.mobile.path.parseUrl( data.toPage );
			var re = /^#app/;
			
			if ( u.hash.search(re) !== -1 ) {
				console.log(u.hash);
				
				app.navigateApp( u, data.options );
				
				e.preventDefault();
			}
		}
	},
	// navigate in the menu of the app
	navigateApp( urlObj, options ){
		console.log('navigateApp');
		
		var sItemSelector = urlObj.hash.replace( /.*item=/, "" );
		var oMenuItem = navigation[ sItemSelector ];
		var sPageSelector = urlObj.hash.replace( /\?.*$/, "" );
		
		console.log('oMenuItem',oMenuItem);
		
		if ( oMenuItem ) {
			var oPage = $( sPageSelector );
			var oHeader = oPage.find( "#gameheader" );
			oHeader.find( "h1" ).text( oMenuItem.title );
			var oContent = oPage.find( "#gameboard" );
			
			var aItems = oMenuItem.items;
			var iItemLength = aItems.length;
			
			//eigenen Content generieren
			var markup = "<p>" + oMenuItem.type + "</p><ul data-role='listview' data-inset='true'>";
			for ( var i = 0; i < iItemLength; i++ ) {
				markup += "<li>" + aItems[i].name + "</li>";
			}
			markup += "</ul>";
			
			oContent.html( markup );
			
			oContent.find( ":jqmData(role=listview)" ).listview();
		}
	},
	// back button
	onBackButtonClick: function(e){
		console.log('onBackButtonClick');
		
		
	},
	// DOM Elements are ready to manipulate by javascript and jQuery
	manipulateDom: function(){
		console.log('manipulateDom');
		
		app.setContentHeight();
	},
	// set content to full window height
	setContentHeight: function(){
		console.log('setContentHeight');
		
		var iWindowHeight = window.innerHeight;
		var iHeaderHeight = $('#statusbar').height();
		var iFooterHeight = $('#footer').height();
		
		// header and footer + Border 1px subtract from window height
		var iContentHeight = iWindowHeight-iHeaderHeight-2-iFooterHeight-2;
		
		$('#main').css('height',iContentHeight);
		
		//console.log('iContentHeight ' + iContentHeight);
	}
};
