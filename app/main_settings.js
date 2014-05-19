
//------------------------------
// GLOBAL UI VARIABLES
//------------------------------
// These are NOT SAVED with the project

	var _UI = {
		// all pages
		"navhere" : "firstrun",
		"navprimaryhere" : "npChar",
		"thisGlyphrStudioVersion" : "Beta 4 - 0.4.0.working",
		"thisGlyphrStudioVersionNum" : "0.4.0",
		"projectsaved": true,
		"icons": {},
		"colors" : {
			"accent" :		"rgb(0,170,225)",	// os accent base color
			"accent_light": "rgb(165,222,240)",	// os accent base color light
			"error":		"rgb(240,15,54)",	// os red warning color
			"error_light":	"rgb(240,210,215)",	// os red warning color light
			"error_dark":	"rgb(105,45,55)",	// os red warning color dark
			"offwhite" :	"rgb(250,252,255)",	// Off White
			"g9" :			"rgb(229,234,239)",	// 90% gray  LIGHTER
			"g8" :			"rgb(204,209,214)",	// 80% gray
			"g7" :			"rgb(178,183,188)",	// 70% gray
			"g6" :			"rgb(153,158,163)",	// 60% gray
			"g5" :			"rgb(127,134,137)",	// 50% gray
			"g4" :			"rgb(102,107,112)",	// 40% gray
			"g3" :			"rgb(76,81,86)",	// 30% gray
			"g2" :			"rgb(51,56,61)",	// 20% gray
			"g1" :			"rgb(25,30,35)"		// 10% gray  DARKER
		},

		// Internal Dev Stuff
		"devnav" : "import svg",		// navigate straight to a page
		"debug": true,					// global debug console switch
		"debugpoints" : [false,false],

		// Shared edit pages
		"popout" : false,
		"selectedtool" : "pathedit",	// pathedit, shaperesize, pantool, newrect, newoval, newpath
		"redrawing" : false,
		"thumbsize" : 50,
		"thumbgutter" : 5,
		"showgrid" : true,		// display the grid
		"showguides" : true,		// display guides
		"clipboardshape" : false,
		"chareditcanvas" : false,
		"chareditcanvassize" : 2000,		// How big the viewport canvas is
		"chareditctx" : false,
		"ishereghostcanvas" : false,
		"ishereghostctx" : false,
		"defaultview" : {
			"dx" : 200,		// X offset for the canvas origin
			"dy" : 500,		// Y offset for the canvas origin
			"dz" : 0.5,		// Zoom or scale of the canvas
		},
		"views" : {},		// Holds the unique views per char & linkedshape
		"thumbview" : {},

		// page: linked shapes
		"shownlinkedshape" : "id0",
		"linkedshapecurrstate" : {},
		"linkedshapeundoq" : [],

		// page: charedit
		"selectedchar" : "0x0061",
		"selectedshape" : -1,
		"charundoq" : [],
		"charcurrstate" : {},
		"selectchardrawarr" : [],
		"shapelayers" : [],

		// page: test drive
		"testdrive" : {
			"ctx" : false,
			"canvas" : false,
			"fontscale" : 0,
			"showcharbox" : false,
			"showhorizontals" : false,
			"padsize" : 10
		},

		// page: import svg
		"importsvg": {
			"scale" : false,
			"ascender" : false,
			"descender" : false,
		},

		// Saveas TTX
		"fontmetrics" : {
			"xmax" : 0,
			"xmin" : 0,
			"ymax" : 0,
			"ymin" : 0,
			"hhea_ascent" : 0,
			"hhea_descent" : 0
		}
	};

	_UI.colors.text_dark = _UI.colors.g1;
	_UI.colors.text_light = _UI.colors.g8;
	_UI.colors.button_disabled = _UI.colors.g4;
	_UI.colors.button_resting = _UI.colors.g8;
	_UI.colors.button_selected = _UI.colors.accent;


//------------------------------
// GLOBAL PROJECT VARIABLES
//------------------------------
// These ARE saved with the project

	var _GP = {};

	function setOTprop(tname, tkey, tval){
		if(_GP.opentypeproperties[tname]){
			var ot = _GP.opentypeproperties[tname];
			for(var i=0; i<ot.length; i++){
				//debug("SETOTPROP: checking " + ot[i].key + " == " + tkey);
				if(ot[i].key == tkey) {
					ot[i].val = tval;
					return;
				}
			}
			console.log("SETOTPROP ERROR: could not find " + tkey + " in " + tname);
		} else {
			console.log("SETOTPROP ERROR: could not find table" + tname);
		}
	}

	function getOTprop(tname, tkey){
		if(_GP.opentypeproperties[tname]){
			var ot = _GP.opentypeproperties[tname];
			for(var i=0; i<ot.length; i++){
				//debug("SETOTPROP: checking " + ot[i].key + " == " + tkey);
				if(ot[i].key == tkey) {
					return ot[i].val;
				}
			}
			console.log("GETOTPROP ERROR: could not find " + tkey + " in " + tname);
		} else {
			console.log("GETOTPROP ERROR: could not find table" + tname);
		}

		return "|| RETURN VALUE ERROR ||";
	}