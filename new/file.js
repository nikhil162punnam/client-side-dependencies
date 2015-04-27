window.onload = function() {
//   {your code}
function writeToFile(d1, d2){

var xmlDoc;

if (window.DOMParser)
{ // Firefox, Chrome, Opera, etc.
    parser=new DOMParser();
    xmlDoc=parser.parseFromString(xml,"text/xml");
}
else // Internet Explorer
{
    xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
    xmlDoc.async=false;
    xmlDoc.loadXML(xml); 
} 


    //var fso = new ActiveXObject("Scripting.FileSystemObject");
    var fh = xmlDoc.OpenTextFile("data.txt", 8, false, 0);
    fh.WriteLine(d1 + ',' + d2);
    fh.Close();
}
var submit = document.getElementById("submit");
if(submit){
submit.addEventListener('click', function() {
    var id      = document.getElementById("id").value;
    var content = document.getElementById("content").value;
    writeToFile(id, content);
}, false);
}if (window.DOMParser)
{ // Firefox, Chrome, Opera, etc.
    parser=new DOMParser();
    xmlDoc=parser.parseFromString(xml,"text/xml");
}
else // Internet Explorer
{
    xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
    xmlDoc.async=false;
    xmlDoc.loadXML(xml); 
} 

// submit.onclick = function (this) {
//     var id      = document.getElementById("id").value;
//     var content = document.getElementById("content").value;
//     writeToFile(id, content);
// }

function readFile(){
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var fh = fso.OpenTextFile("data.txt", 1, false, 0);
    var lines = "";
    while (!fh.AtEndOfStream) {
        lines += fh.ReadLine() + "\r";
    }
    fh.Close();
    return lines;
}
var search = document.getElementById("search");
search.onclick = function () {
    var input   = document.getElementById("input").value;
    if (input != "") {
        var text    = readFile();
        var lines   = text.split("\r");
        lines.pop();
        var result;
        for (var i = 0; i < lines.length; i++) {
            if (lines[i].match(new RegExp(input))) {
                result = "Found: " + lines[i].split(",")[1];
            }
        }
        if (result) { alert(result); }
        else { alert(input + " not found!"); }
    }
}

}


