/** XHConn - Simple XMLHTTP Interface - bfults@gmail.com - 2005-04-08        **
** Code licensed under Creative Commons Attribution-ShareAlike License      **
** http://creativecommons.org/licenses/by-sa/2.0/                           **/
function XMLHTTP() {
	var xmlhttp, bComplete = false;
	try { xmlhttp = new ActiveXObject("Msxml2.XMLHTTP"); }
	catch (e) {
		try { xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); }
		catch (e) {
			try { xmlhttp = new XMLHttpRequest(); }
			catch (e) { xmlhttp = false; }
		}
	}
	if (!xmlhttp) return null;

	//var xmlHttpTimeout = setTimeout(function () { xmlhttp.abort(); document.location.href = "./validate_confirm.html";},7000);

	this.connect = function (sURL, sMethod, sVars, fnDone) {
		if (!xmlhttp) return false;
		bComplete = false;
		sMethod = sMethod.toUpperCase();

		try {
			if (sMethod == "GET") {
				xmlhttp.open(sMethod, sURL + "?" + sVars, true);
				sVars = "";
			}
			else {
				xmlhttp.open(sMethod, sURL, true);
				xmlhttp.setRequestHeader("Method", "POST " + sURL + " HTTP/1.1");
				xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			}
			xmlhttp.onreadystatechange = function () {
				if (xmlhttp.readyState == 4 && !bComplete) {
					bComplete = true;
					var data = xmlhttp.responseText;
					data = data.substr(0, 8) == '<r><res>' ? data.substr(8) : data;
					data = data.substr(data.length - 10) == '</res></r>' ? data.substr(0, data.length - 10) : data;
					fnDone(data);
				}
			};
			xmlhttp.send(sVars);
		}
		catch (z) { return false; }
		return true;
	};
	return this;
}

function sendToGateway(dataurl, resultFunction) {
 try {
	var sendDirectly = 0;

	if (sendDirectly) {
		resultFunction('{"ContentEncoding":null,"ContentType":null,"Data":{"count":1,"searchRequestId":166},"JsonRequestBehavior":1}');
		//prompt('', dataurl)
		//$.get(dataurl, resultFunction);
		return;
	}
	dataurl = xmlencode(dataurl);
	//prompt('', dataurl)

	//$('#debug').append('<div><li><pre>' + dataurl + '</pre></li></div>');
	/*var resultFunction = function (oResponseText) {
	$('#debug').append('<div><li>' + oResponseText + '</li></div>');
	};
	*/


	var conn = new XMLHTTP();
	var gatewayhost = 'http://92.46.53.228:8089/OnlineInfoGate/Gate.aspx';
	conn.connect(gatewayhost, 'POST', 'request=<r><reg>' + dataurl + '</reg></r>&service=ois_Netscor', resultFunction);
    }
catch (z) { return false; }
return true;
}