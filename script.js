var numRequests;
var apiTermResponses = [];
var finaltextIsReady = false;
var loadtext = false;
var thetlontextcat;
var randomnumber;
var thetlontext = "Their language and those things derived from their language—religion, literature, metaphysics—presuppose idealism. For the people of Tlön,the world is not an amalgam of objects in space; it is a heterogeneous series of independent acts the world is successive, temporal, but not spatial. There are no nouns in the conjectural Ursprache of Tlön,from which its present-day languages and dialects derive: there are impersonal verbs, modified by mono-syllabic suffixes (or prefixes) functioning as adverbs.";
var theDT;
var finaltext = "Click on the buttons to see examples of Tlönized English and learn more about the world of Tlön";
var currentsentence;
var ritatestPOS;
var noundefinition;
var theRitaTextArray = [];
var dtplusPOSArray = [];
var defs = [];
var newTextArrays = [];
var termAndDef = [];
var nouns = [];
var thetlontextor = "";

function replacef(){
	finaltext = thetlontext;
	

	for (var i = 0; i < terms.length; i++){
		var curToBeRepl = terms[i][0];
		var curBecome = terms[i][1];
		finaltext = finaltext.replace(curToBeRepl, curBecome);
	}

	document.getElementById("demo").innerHTML = finaltext;
	finaltextIsReady = true;

}

function myFunction() {
    thetlontext = "";
    thetlontextor="";
    resetGlobals();
    var x = document.getElementById("translator");
    var i;
    for (i = 0; i < x.length ;i++) {
        thetlontextor += x.elements[i].value;
    }
    thetlontext = thetlontextor.replace(/[’]/g,"\'");
    
    document.getElementById("tlonizedeng").innerHTML = "Texto en neocriollo:";
    document.getElementById("demo").innerHTML = "Traduciendo...";
    replacef();
}

function resetGlobals(){
	theRitaTextArray = [];
	dtplusPOSArray = [];
	defs = [];
	newTextArrays = [];
	termAndDef = [];
	nouns = [];
	apiTermResponses = [];
	finaltext = 'Traduciendo...';
	randomnumber = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
}