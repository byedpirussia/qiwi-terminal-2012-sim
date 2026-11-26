var gotohistory = [{ 'title': 'Netscore', 'name': 'index'}];

function goto(n) {
    if (n == '-1') {
        $('#goto-result').hide();
		$('#goto-next').hide();
		n = gotohistory[gotohistory.length - 2].name;
		gotohistory.splice(gotohistory.length - 1, 1);
	} else {
		gotohistory[gotohistory.length] = { 'title': '', 'name': n };
	}

	$('#content').attr('jsinclude', 'css/custom/netscore/inc.' + n + '.css?' + Math.random()).jsinclude({ onload: function (html) {
	    doLangRes();
	    //$('[keyboard="on"]').keyboard('');

	    $('[keyboard="on"]').focus(function () { showKeyBoard(this, "text") });
	    doSelectors();

	    if (n == "index") {
	        gotohistory = [{ 'title': 'Netscore', 'name': 'index'}]
	        $('#goto-result').hide();
	    }

	    rebuildGotoPath();

	}
	});
   

	if (gotohistory.length > 1 && !$('#goto-prev').is(':visible')) {
		$('#goto-prev').show();
	}
	if (gotohistory.length < 2 && $('#goto-prev').is(':visible')) {
		$('#goto-prev').hide();
    }

    if (n == "index") {
        $('#goto-prev').hide();
    }

}

function doLangRes() {
	$('[langres]').each(function () {
		for (var i = 0; i < langres.length; i++) {
			if (langres[i].code != $(this).attr('langres')) continue;
			$(this).html(langres[i].value);
		}
	});
}

function doSelectors() {
	$('[selector="on"]').each(function () {
		var src;
		eval('src = ' + $(this).attr('selectorsource'));
		$(this).AndroidSelector(src, $(this).attr('selectorid'), $(this).attr('selectortext'), $(this).attr('selectortriggerafter'));
	});
    $('[selector="radio"]').each(function () {
        var src;
        eval('src = ' + $(this).attr('selectorsource'));
        $(this).RadioSelector(src, $(this).attr('selectorid'), $(this).attr('selectortext'), $(this).attr('selectortriggerafter'));
    });
    $('[selector="radio_big"]').each(function () {
        var src;
        eval('src = ' + $(this).attr('selectorsource'));
        $(this).RadioBigSelector(src, $(this).attr('selectorid'), $(this).attr('selectortext'), $(this).attr('selectortriggerafter'));
    });

    $('[selector="location"]').each(function () {
        var src;
        eval('src = ' + $(this).attr('selectorsource'));
        $(this).LocationSelector(src, $(this).attr('selectorid'), $(this).attr('selectortext'), $(this).attr('selectortriggerafter'));
    });

    $('[selector="region"]').each(function () {
        var src;
        eval('src = ' + $(this).attr('selectorsource'));
        $(this).RegionSelector(src, $(this).attr('selectorid'), $(this).attr('selectortext'), $(this).attr('selectortriggerafter'));
    });
    $('[selector="region-city"]').each(function () {
        var src;
        eval('src = ' + $(this).attr('selectorsource'));
        $(this).RegionCitySelector(src, $(this).attr('selectorid'), $(this).attr('selectortext'), $(this).attr('selectortriggerafter'));
    });

    if (langpanel == 0) {
        $('[selector="language"]').each(function () {
            var src;
            eval('src = ' + $(this).attr('selectorsource'));
            $(this).LanguageSelector(src, $(this).attr('selectorid'), $(this).attr('selectortext'), $(this).attr('selectortriggerafter'));
        });
        langpanel = 1;
    }

    $('[selector="job_area"]').each(function () {
        var src;
        eval('src = ' + $(this).attr('selectorsource'));
        $(this).JobAreaSelector(src, $(this).attr('selectorid'), $(this).attr('selectortext'), $(this).attr('selectortriggerafter'));
    });

    $('[selector="job_level"]').each(function () {
        var src;
        eval('src = ' + $(this).attr('selectorsource'));
        $(this).JobLevelSelector(src, $(this).attr('selectorid'), $(this).attr('selectortext'), $(this).attr('selectortriggerafter'));
    });

    $('[selector="vacancy_language"]').each(function () {
        var src;
        eval('src = ' + $(this).attr('selectorsource'));
        $(this).VacancyLanguageSelector(src, $(this).attr('selectorid'), $(this).attr('selectortext'), $(this).attr('selectortriggerafter'));
    });

}


function rebuildGotoPath() {
	var html = '';
	for (var i = 0; i < gotohistory.length; i++) {
		html += gotohistory[i].title;
		//html += '<a href="#" onclick="goto(\'' + gotohistory[i].name + '\')">' + gotohistory[i].title + '</a>';
		html += i < gotohistory.length - 1 ? ' | ' : '';
	}
	$('#gotoPath').html(html);
}

var langpanel = 0;


function chnagesystemlang() {
	var l = $('#currentlangid').val();
	//$('#currentlang').attr('src', 'img/custom/netscore/lang_' + l + '.jpg')

	var s = [
		'db_lCurrency.js'
		, 'db_lExperience.js'
		, 'db_lib_locations.js'
		, 'db_lJobPosArea.js'
		, 'db_lJobPosLevel.js'
		, 'db_lPeriod.js'
		, 'db_lVacLang.js'
		, 'db_lYesNo.js'
		, 'db_lYesNoStr.js'
		, 'db_lVehicleCondition.js'
		, 'langres.js'
	]

	for (var i=0; i < s.length; i++) {
		$.getScript('js/custom/netscore/' + l + '.' + s[i], doLangRes);
	}

//	for (var i = gotohistory.length - 1; i > 0; i--) goto(-1);





}


function hidePreviousButton() {
  //  $('#goto-prev').css('display', 'none');

   
        $('#goto-prev').hide();
    
}
