window.onload = function() {
		var fileInput = document.getElementById('fileInput');
		var fileDisplayArea = document.getElementById('fileDisplayArea');

		fileInput.addEventListener('change', function(e) {
			var file = fileInput.files[0];
			var textType = /text.*/;

			if (file.type.match(textType)) {
				var reader = new FileReader();

				reader.onload = function(e) {
					var lines = this.result.split('\n');
    				for(var line = 0; line < lines.length; line++){
      				console.log("Line "+(line+1)+" : "+lines[line]);
    				}
					fileDisplayArea.innerText = reader.result;
				}

				reader.readAsText(file);	
			} else {
				fileDisplayArea.innerText = "File not supported!";
			}
		});

		var plugins=document.getElementById("plugins");
		var pluginsDisplayArea=document.getElementById("pluginsDisplayArea");
		//plugins.addEventListener("click", function(){}, false);

		if(plugins){
    		plugins.addEventListener('click', displayPlugins, false);
		}

		function displayPlugins(){
			//alert("Hi!!");
			pluginsDisplayArea.innerHTML="HII";
			var dependency_List=[];
			var count=0;

			var L = navigator.plugins.length;
			/*document.write("<h3>navigator.plugins</h3><br/>");
			document.write(
			  L.toString() + " Plugin(s)<br>" +
			  "Name | Filename | description<br>"
			); */

			for(var i = 0; i < L; i++) {
			  var sample=navigator.plugins[i].name;
			  if(sample.match(/flash/ig) || sample.match(/java/ig)){
			  //document.write("<br/>*****==========Begining==========*****<br/>");
			  /*document.write("<br/>"+i+"  ");
			  document.write(
			    navigator.plugins[i].name +
			    " | " +
			    navigator.plugins[i].filename +
			    " | " +
			    navigator.plugins[i].description +
			    " | " +
			    navigator.plugins[i].version +
			    "<br/>"
			  );*/
			  dependency_List[count]=navigator.plugins[i].name;
			  count++;
			  }
			  else
			    void(0);
			}
			  pluginsDisplayArea.innerHTML="dependency_List : "+dependency_List;	
		}

		$(document).ready(function(){
		$.ajax({
			type:"GET",
			url: "data.xml",
			dataType:"xml",
			success: xmlParser
		});
	});

	function xmlParser(xml){
		$('#load').fadeOut();
		$(xml).find("dependencies").each(function(){
			$('#container').append('<div class="dependencies">' + $(this).find("pluginname").text()+ '<br/>'+ $(this).find("version").text() +'<br/>'+ $(this).find("description").text()+'</div>');
			$(".painting").fadeIn(1000);
		});
	}

}
