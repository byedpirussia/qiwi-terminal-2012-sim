function runAdvJs(place)
{

    var s = '';
    if (typeof cookie != 'undefined')
    {
    	var content = '<div></div>';
    }
    else
    {
	
		s = '0_1.swf';
		
                var content = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"' +
				'codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="100%" height="100%">' +
				'  <param name="allowScriptAccess" value="sameDomain" />' +
				'  <param name="movie" value="adv/projtele225092011/0/' + s + '" />' +
				'  <param name="quality" value="best" />' +
				'  <param name="wmode" value="transparent" />' +
				'  <param name="FlashVars" value="microsite_link=adv/projtele225092011/params.html" />' +
				'  <embed width="100%" height="100%" src="adv/projtele225092011/0/' + s + '"'
				'flashvars="microsite_link=adv/projtele225092011/params.html"></embed></object>';
		
    }
    try
    {       
       if(place)
            document.getElementById(place).innerHTML = content;
       else
            document.getElementById("jsPlaceHere").innerHTML = content;
    }
    catch(e)
    {
        return false;
    }
}
