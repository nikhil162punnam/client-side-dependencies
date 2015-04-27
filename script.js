        function AddRowToInfo (description, value) {
            if (value !== undefined) {
                var infoTable = document.getElementById ("info");
                var row = infoTable.insertRow (-1);
                var cell = row.insertCell (-1);
                cell.innerHTML = description;
                cell.style.paddingRight = "10px";
                cell = row.insertCell (-1);
                cell.innerHTML = value;
                cell.style.paddingLeft = "10px";
            }
        }

        function DetectBrowser () {
            var agent = navigator.userAgent.toLowerCase ();

            var browser = "Unknown browser";

            if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0) {
               // MSIE
               browser="Microsoft Internet Explorer";
            }   
            else {
                if (agent.search ("firefox") > -1) {
                    browser = "Firefox";
                } 
                else {
                    if (agent.search ("opera") > -1) {
                        browser = "Opera";
                    } 
                      else {
                        if (agent.search ("safari") > -1) {
                            if (agent.search ("chrome") > -1) {
                                browser = "Google Chrome";
                            } 
                            else {
                                browser = "Safari";
                            }
                        }
                    }
                }
            }
            
            return (browser);
        }

        function GetVisitorInfo () {
            AddRowToInfo ("Name of the browser (appName)", DetectBrowser());
            AddRowToInfo ("Name of the browser vendor (vendor)", window.navigator.vendor);
            AddRowToInfo ("Code name of the browser (appCodeName)", window.navigator.appCodeName);
            
        }
        