var BASE_URL = "https://codequotient.com/api/";
var codeEditor;
var languageSelector;
var compileBtn;
var heading;

// Variables to send 
var languageId;
var codeWritten;

function initProcess() {
    languageSelector = document.getElementById("language");
    codeEditor = ace.edit("editor");
    compileBtn = document.getElementById("compile");
    heading = document.getElementById("output");

    compileBtn.innerHTML = "Compiling..";
    heading.innerHTML = "Compiling...";

    setLanguageId();
    setCode();

    sendCodeforSubmission();
}

function sendCodeforSubmission() {
    var url = BASE_URL + "executeCode";
    // AJAX
    var request = new XMLHttpRequest();
    request.open("POST", url);
    request.setRequestHeader("Content-Type","application/json");
    var objToSend = {code: codeWritten, langId : languageId};
    request.send(JSON.stringify(objToSend));

    request.addEventListener("load", function() {
        var response = JSON.parse(request.responseText);
        console.log(response);
        if("codeId" in response) {

            var codeid = response.codeId;
            checkForResultofCode(codeid);
            
        } else {
            alert("Something went wrong");
        }
    })
}

function checkForResultofCode(codeId) {
    var urlTocheck = BASE_URL + "codeResult/" + codeId;

    var request = new XMLHttpRequest();
    request.open("GET", urlTocheck);
    request.send();

    request.addEventListener("load", function() {
        var response = JSON.parse(request.responseText);
        var data = JSON.parse(response.data);
        if(data.status === "Pending") {
            checkForResultofCode(codeId);
        } else {
            if(data.errors != "") {
                heading.innerHTML = data.errors;
                compileBtn.innerHTML = "Compile";
            } else {
                heading.innerHTML = data.output;
                compileBtn.innerHTML  = "Compile";
            }
        }
    })
}

function setCode() {
    codeWritten = codeEditor.getValue();

}

function setLanguageId() {
    var selectedLang = languageSelector.value;
    switch(selectedLang) {
        case "Java": languageId = "8"; break;
        case "Python": languageId = "0"; break;
        case "C" : languageId = "7"; break;
        case "JavaScript" : languageId = "4"; break;
        default : languageId = "77"; break;
    }
}