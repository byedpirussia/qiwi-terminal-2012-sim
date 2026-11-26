log.add('Cellular start');
var Phone_Number = '',
    sLogoContent = './img/ui/cellular.gif',
    flag = true,
    sNumber = '',
    nPrvId = 0,
    sPrv = "",
    oInfo = {},
    js = null,
    head = null,
    oProv = null,
    parser = new phoneParser(),
    number,
    realnumber = false,
    r1 = RegExp('^8[( ]{2}[0-9]{2}[) ]{3}$'),
    r2 = RegExp('^8[( ]{2}[0-9][) ]{5}$'),
    nTest = /^\d{10}$/,
    nClean = new RegExp('[ ()-]', 'g'),
    providerButton = {},
    gsmRegEx = /^(701|702|775|778)\d{7}$/;

function start()
{
	log.add('Start start');

	new CInnerShadow($('btn_del').getElementsByTagName('img')[0], { color: 30 });
	new CInnerShadow($('btn_back').getElementsByTagName('img')[0], { color: 30 });
	keyboard();

	number = $("number");
	realnumber = number.value.replace(nClean, '').substr(1);

	providerButton.logo = $('logo').getElementsByTagName('div')[0].style;
	providerButton.text = $('logo').getElementsByTagName('p')[0];

	var oPrv = oProv;
	providerButton.logo.backgroundImage = 'url(' + (oPrv != null ? './img/ui_item/' + getFileName(oPrv.logo) : sLogoContent) + ')';
	providerButton.text.innerHTML = oPrv ? (oPrv.buttonName || oPrv.sName) : '';
	vAlignP();
	
	startAdvert("Adv_Cellular");
	log.add('Start finish');
};

function initProvider(provider) {
	log.add('initProvider start');
	if(!provider || provider == 'null' || provider == 0)
	{
		oProv = null;
		start();
	}
	else
	{
	    getScript("./config/" + storage.get("language") + "/" + provider + ".js", loadProvider);
	}
    log.add('initProvider finish');
}

function loadProvider() {
    try {
        oProv = window.UIProvider.clone();
    }
    catch (e) {
    }
    start();
}

var printTimer;
function press(digit)
{
    // удаление
    if(digit == 'c')
    {
        flag = true;
       // clearProviderButton();
        realnumber = realnumber.substr(0, realnumber.length - 1);
    }
    // добавление
    else if(realnumber !== false && realnumber.length < 10)
    {
//    	if(realnumber == '7' || (realnumber == '8' && digit == '9'))
//    	{
//    		realnumber = digit;
//    	}
//    	else
    	{
    		realnumber += digit;
    	}
    }
    if(printTimer) clearTimeout(printTimer);
    printTimer = setTimeout(print, 50);
};

function clearProviderButton()
{
    this;
	$("btn_forward").style.display = 'none';
	$("num_info").style.display = "none";
	//$('container404').style.visibility = 'hidden';
	$('container7').className = 'init_l';
	providerButton.logo.backgroundImage = 'url(' + sLogoContent + ')';
	providerButton.text.innerHTML = '';
	vAlignP();
};

function print()
{
    if(printTimer) clearTimeout(printTimer);
    // форматирование
    var s = parser.spliceNumber(realnumber),
        r = ['8'];
    if(s.str.prefix != '')
    {
	r.push(' (', s.str.prefix, parser.nulls(s.str.prefix, 3, '  '), ')');
	if(s.str.pre != '')
	{
		r.push(' ', s.str.pre);
		if(s.str.number1 != '')
		{
			r.push('-', s.str.number1);
			if(s.str.number2 != '')
			{
				r.push('-', s.str.number2);
			}
		}
	}
    }
    number.value = r.join('');
    
    preTest();
};

function preTest()
{
    // проверка    
    if(realnumber !== false && realnumber.length == 10 && gsmRegEx.test(realnumber))
    {
        if(flag)
        {
		flag = false;
		var sLang = storage.get("language");
       if(sLang == "rus")
       {
		
		if(!$("btn_forward").shadowed)
		{
			$("btn_forward").style.display = 'block';
			new CInnerShadow($('btn_forward').getElementsByTagName('img')[0], { color: 30 });
			$("btn_forward").shadowed = true;
			$("btn_forward").style.display = 'none';
		}
		}
		else{		if(!$("btn_forward_kaz").shadowed)
		{
			$("btn_forward_kaz").style.display = 'block';
			new CInnerShadow($('btn_forward').getElementsByTagName('img')[0], { color: 30 });
			$("btn_forward_kaz").shadowed = true;
			$("btn_forward_kaz").style.display = 'none';
		}}
		
		test(realnumber);
        }
    }
}

function isCorrectPrvInfo(oInfo) 
{
    return (!$isNoU(oInfo) &&
            oInfo.hasOwnProperty("from") &&
            oInfo.hasOwnProperty("to"));
}

function test(sNumber)
{
    nPrvId = 0;
    window.sNumber = sNumber;
    if(nTest.test(sNumber))
    {
    	parser.get(sNumber, process);
    }
    else
    {
    	process();
    }

}

function process(result)
{
var sLang = storage.get("language");

if(sLang == "rus"){
    var sLogoContent2 = sLogoContent;
    var BEELINE_INTERNET_VALUE = 50;
    var nPrefix = 0;
    var oProvider = {};
    var sRegion = "";
    var sTxt =
        "Проверьте, не ошиблись ли Вы при вводе номера<br /><br />" +
        "Если номер набран верно, нажмите \"Вперед\" для выбора оператора";
    var sNoPrv = "Невозможно оплатить данного провайдера";
    var sNoRegion = "Регион не определен";
    var sCellularProvider = "Сотовая связь";
    var bIsFoundProvider = false;}
    
    else{
        var sLogoContent2 = sLogoContent;
    var BEELINE_INTERNET_VALUE = 50;
    var nPrefix = 0;
    var oProvider = {};
    var sRegion = "";
    var sTxt =
        "Prover'te, ne oshiblis' li Vy pri vvode nomera<br /><br />" +
        "Esli nomer nabran verno, najmite \"Vpered\" dlya vybora operatora";
    var sNoPrv = "Невозможно оплатить данного провайдера";
    var sNoRegion = "Регион не определен";
    var sCellularProvider = "Сотовая связь";
    var bIsFoundProvider = false;
    }

	   
       if(sLang == "rus")
       {
	$("btn_forward").style.display = 'block';
	}
	else
	{
	$("btn_forward_kaz").style.display = 'block';
	
	}

	providerButton.logo.backgroundImage = 'url('+sLogoContent+')';
	providerButton.text.innerHTML = '';
	vAlignP();

	if(!$isNoU(result) && !$isNoU(result.provider) && !$isNoU(result.provider.sName))
	{
		bIsFoundProvider = true;
		nPrvId = result.provider.id;
		if (nPrvId == 2 && result.priority == BEELINE_INTERNET_VALUE)
		{
			sPrv = "Билайн Интернет";
		}
		else
		{
			sPrv = result.provider.sName;
		}
		if(!$isNoU(result) && !$isNoU(result.region))
	    {
	        sRegion = result.region;
	    }
	}
	
	if(bIsFoundProvider)
	{
	    sTxt = sPrv + "<br />" + sRegion;
	    //initProvider(nPrvId.toString(10));

	    if (!$isNoU(result) && !$isNoU(result.provider))
	    {
		   	oProv = result.provider;
			if(
				result.provider.hasOwnProperty("logo") &&
				!$isNoU(result.provider.logo) &&
				result.provider.logo.is(String)
			)
			{
				providerButton.logo.backgroundImage = 'url(./img/ui_item/' + getFileName(result.provider.logo) + ')';
			}
			
			providerButton.text.innerHTML = result.provider.buttonName || result.provider.sName;
			vAlignP();
	    }
	    else
	    {
			result.provider.id = nPrvId.toString(10);
			result.provider.sName = sPrv != sNoPrv ? sPrv : sCellularProvider;
		   	oProv = {};
		   	
	    }
	}
	
	
    //$('container404').style.visibility = bIsFoundProvider ? 'hidden' : 'visible';
    $('container7').className = 'init_l' + (bIsFoundProvider ? '' : ' undefined');

    $("num_info").style.marginTop = (bIsFoundProvider || !$isNoU(result)) ? "55px" : "10px";
    $("num_info").style.display = "block";
    if (!$isNoU(result) && !$isNoU(result.provider))
    {
        if (result.provider == "false")
        {
            sTxt = sNoPrv;
            $("btn_forward").style.display = 'none';
        }
    }
    
    $("num_info_txt").innerHTML = sTxt;

    storage.put("provider", nPrvId.toString(10));
    setTimeout(function(){
	    startAdvert("Adv_Cellular");
    }, 100);
};

function backward()
{
    storage.put("pay_info", "null");   
    location = storage.get("last_page");
}

function forward()
{
	var oProvider = {};
	if(nPrvId == 0)
	{	
		//storage.put("last_page", document.location.href);
		oProvider.prvId = 0;
		oProvider.prvName = 'cellular';
		oProvider.prvLogo = 'null.gif';
		oProvider.account = sNumber;
		oProvider.isCellular = 'true';
		storage.put("pay_info", oProvider.serialize());
		storage.put("Phone_Number", $("number").value);
		storage.put("bevalValue", "cellular");
		storage.put("group", "-20");
		storage.put("flag_cel", "true");
		ff.prv_id.value = '0';
		ff.prv_name.value = 'cellular';
		ff.getAccountNumber.value = sNumber;
		ff.action = './main.html#-20:1';
//		storage.put("pay_info", "null");
		ff.submit();
	}
	else
	{
		oProvider.prvId = nPrvId;
		oProvider.prvName = sPrv;
		oProvider.prvLogo = oProv.logo;
		oProvider.account = sNumber;
		oProvider.isCellular = 'true';
		oProvider.isGsm = 'true';
		storage.put("pay_info", oProvider.serialize());
		storage.put("Phone_Number", $("number").value);
		ff.prv_id.value = nPrvId;
		ff.prv_name.value = sPrv;
		ff.getAccountNumber.value = sNumber;
		if (!$isNoU(oProv["maxSum"]))
		{
			$("inp").innerHTML = '<input type="hidden" name="MaxCashLimit" value="' + oProv["maxSum"] + '" />';
        	}
        
		if (!$isNoU(oProv["minSum"]))
		{
			ff.komissiya.value = oProv["minSum"];
		}

		if(storage.get("fake") != "true")
		{
			ff.action = './online_auth_gsm.html';
		}
		else
		{
			ff._extra_auth_page.value = "online_auth.html";
			ff._extra_auth_success.value = "validate_confirm.html";
			ff._extra_auth_fail.value = "online_auth_error.html";
			
			ff.action = './online_auth.html';
		}
		storage.put("fake", null);
		ff.submit();
	}
};

function keyboard()
{
	var imgs = $('keyboard').getElementsByTagName('img');
	for(var i = 0, l = imgs.length; i < l; i++)
	{
		var isLast = (i + 1 == l);
		new CInnerShadow(imgs[i], isLast ? { height: 95 } : null);
	}
};

function vAlignP()
{
	providerButton.text.style.marginTop = (providerButton.text.parentNode.clientHeight - providerButton.text.clientHeight) / 2 + 'px';
};

log.add('Cellular finish');