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
    //
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
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
		//console.log('onDeviceReady');
        app.receivedEvent('deviceready');
    },
	onDocumentReady: function() {
		//console.log('onDocumentReady');
        app.receivedEvent('documentready');
		app.manipulateDom();
    },
	onWindowLoaded: function() {
		//console.log('onWindowLoaded');
        app.receivedEvent('windowloaded');
		//all elements (like images) loaded
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        /*
		var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
		*/
        console.log('Received Event: ' + id);
    },
	// DOM Elements are ready to manipulate by javascript and jQuery
	manipulateDom: function(){
		console.log('manipulateDom');
		
		app.setContentHeight();
		
		// Load the data for a specific category, based on
		// the URL passed in. Generate markup for the items in the
		// category, inject it into an embedded page, and then make
		// that page the current active page.
		function showCategory( urlObj, options ){
			console.log('showCategory');
			var categoryName = urlObj.hash.replace( /.*category=/, "" ),
		
				// Get the object that represents the category we
				// are interested in. Note, that at this point we could
				// instead fire off an ajax request to fetch the data, but
				// for the purposes of this sample, it's already in memory.
				category = categoryData[ categoryName ],
		
				// The pages we use to display our content are already in
				// the DOM. The id of the page we are going to write our
				// content into is specified in the hash before the '?'.
				pageSelector = urlObj.hash.replace( /\?.*$/, "" );
		console.log(pageSelector);
			if ( category ) {
				console.log(categoryName,category);
				// Get the page we are going to dump our content into.
				var $page = $( pageSelector ),
		
					// Get the header for the page.
					$header = $page.children( ":jqmData(role=header)" ),
		
					// Get the content area element for the page.
					$content = $page.children( ":jqmData(role=content)" ),
		
					// The markup we are going to inject into the content
					// area of the page.
					markup = "<p>" + category.description + "</p><ul data-role='listview' data-inset='true'>",
		
					// The array of items for this category.
					cItems = category.items,
		
					// The number of items in the category.
					numItems = cItems.length;
		console.log($page);
		console.log($header,$content);
				// Generate a list item for each item in the category
				// and add it to our markup.
				for ( var i = 0; i < numItems; i++ ) {
					markup += "<li>" + cItems[i].name + "</li>";
				}
				markup += "</ul>";
		
				// Find the h1 element in our header and inject the name of
				// the category into it.
				$header.find( "h1" ).html( category.name );
		
				// Inject the category items markup into the content element.
				$content.html( markup );
		
				// Pages are lazily enhanced. We call page() on the page
				// element to make sure it is always enhanced before we
				// attempt to enhance the listview markup we just injected.
				// Subsequent calls to page() are ignored since a page/widget
				// can only be enhanced once.
				$page.page();
		
				// Enhance the listview we just injected.
				$content.find( ":jqmData(role=listview)" ).listview();
		
				// We don't want the data-url of the page we just modified
				// to be the url that shows up in the browser's location field,
				// so set the dataUrl option to the URL for the category
				// we just loaded.
				options.dataUrl = urlObj.href;
		
				// Now call changePage() and tell it to switch to
				// the page we just modified.
				$.mobile.changePage( $page, options );
			}
		}
		
		// Listen for any attempts to call changePage().
		$(document).bind( "pagebeforechange", function( e, data ) {
		console.log('pagebeforechange');
			// We only want to handle changePage() calls where the caller is
			// asking us to load a page by URL.
			if ( typeof data.toPage === "string" ) {
		console.log(data.toPage);
				// We are being asked to load a page by URL, but we only
				// want to handle URLs that request the data for a specific
				// category.
				var u = $.mobile.path.parseUrl( data.toPage ),
					re = /^#category-items/;
		console.log(u);
				if ( u.hash.search(re) !== -1 ) {
		console.log(u.hash);
					// We're being asked to display the items for a specific category.
					// Call our internal method that builds the content for the category
					// on the fly based on our in-memory category data structure.
					showCategory( u, data.options );
		
					// Make sure to tell changePage() we've handled this call so it doesn't
					// have to do anything.
					e.preventDefault();
				}
			}
		});
	},
	// set Tab content to full window height
	setContentHeight: function(){
		var iWindowHeight = window.innerHeight;
		var iHeaderHeight = $('#statusbar').height();
		var iFooterHeight = $('#footer').height();
		
		// header and footer + Border 1px subtract from window height
		var iContentHeight = iWindowHeight-iHeaderHeight-2-iFooterHeight-2;
		
		$('#main').css('height',iContentHeight);
		
		console.log('iContentHeight ' + iContentHeight);
	}
	
};
