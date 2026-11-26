function stringify(obj) 
{     
var t = typeof (obj);
     if (t != "object" || obj === null) 
     {         
     // simple data type         
     if (t == "string") obj = '"'+obj+'"';         
     return String(obj);     
     }     
     else {         
     // recurse array or object         
     var n, v, json = [], arr = (obj && obj.constructor == Array);
     for (n in obj) 
     {
     	v = obj[n]; t = typeof(v);
        if (t == "string") 
        {
        		v = '"'+v+'"';
        }
        else if (t == "object" && v !== null)
        {
        	level++;
        	v = stringify(v, level, isShit);             
        }
  
        json.push((arr ? "" : '"' + n + '":') + String(v));  

     }         
     return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
     } 
}  

function goForvard(bookingId, summ)
{
	var jParams, form, input, oPaymentInfo;
	
	jParams = {"getAccountNumber":bookingId, "_extra_fixed_int_summ":summ, "prv_id":"7543", "prv_name":"Netscore"};
	
	       oPaymentInfo = {};
	        oPaymentInfo.prvId = "7543";
	        oPaymentInfo.buttonName = "Netscore";
	        oPaymentInfo.prvName = "Netscore";
	        oPaymentInfo.prvLogo = "7543";
	        oPaymentInfo.account = String(bookingId);
	        oPaymentInfo.isCellular = "false";
	        oPaymentInfo._extra_fixed_int_summ = String(summ);
	
	var storage = {};
	
	try	
	{
	storage = $.parseJSON(window.name.replace(/\\/g, ""));
	storage.pay_info = stringify(oPaymentInfo).replace(/"/g, '\\"');
	}
	catch(e)
	{
		showMain();
	}
	
	window.name = stringify(storage);
	

	form = document.createElement("form");
	form.setAttribute("name", "ff");
	form.setAttribute("action", "menu.html");
	form.setAttribute("method", "POST");
	
	for(key in jParams)
	{
		input = document.createElement("input");
		input.setAttribute("type", "hidden");
		input.setAttribute("name", key);
		input.setAttribute("value", jParams[key]);
		form.appendChild(input);
	}
	
	document.body.appendChild(form);

        form.submit(); 

}