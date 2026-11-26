var money_mode = '';
function money_formsubmit(mode) {

    try {
        var eList = $('div[keyboardmode="numeric"]');
 
        for (var i = 0; i < eList.length; i++) {
            var idInput = $(eList[i]).attr('keyboardcopyval');
            if ($(idInput).val().length == 0) {
                $(idInput).val("0");
            }

        }
        var queryString = $('#formpanel form').serialize() + '&rnd=' + Math.random()
        queryString = "location_id=" + $('#location-id').val() + "&" + queryString;
	    money_mode = mode;
	    var url = "http://web.netscore.kz/terminal/" + mode + "?" + queryString + "&jsoncallback=?";
	    
        $('#loadingimg').show();
        sendToGateway(url, doProcessAnswerMoney);
    }
    catch (z) { return; }
}
var searchRequestMode = 'money';
var searchRequestId = 0;

function doProcessAnswerMoney(data) {
    try {
	    $('#loadingimg').hide();
	    var mode = money_mode;
	    data = data.substr(0, 2) == '?(' ? data.substr(2, data.length) : data;
	    data = data.substr(data.length - 1, 1) == ')' ? data.substr(0, data.length - 1) : data;
	    data = jQuery.parseJSON(data);
	    data = data.Data;
	 
	    $('#formpanel').hide();
	    $('#resultpanel').show();

	    $("#goto-next").hide();
	    $("#goto-result").hide();
	    searchRequestId = data.searchRequestId;
	   // alert(data.PayCurrencyId);
	    var PayCurrencyName = "";
	    switch (data.PayCurrencyId) {
	        case 1: PayCurrencyName = "тенге"; break;
	        case 2: PayCurrencyName = "долларов"; break;
	        case 3: PayCurrencyName = "евро"; break;
        }
	  //  alert(searchRequestId);
	    searchRequestMode = mode;
	    if (data.TotalCount > 0) {
	        if (mode == "mortgage" || mode == "autocredit" || mode == "consumerloan" || mode == "microcredit" || mode == "revolvingcard") {
	            var sMortgageText = "По Вашему запросу всего найдено %TotalCount% возможных кредитных линий. При этом ежемесячное погашение по наиболее выгодному для Вас кредиту составит  %Pay% %PayCurrency%. Эффективная ставка этого кредита %Efrate%. Декларируемая процентная ставка %Rate%. <BR />Все найденные кредитные линии с адресами Банков и условиями кредитования могут быть высланы Вам на Ваш email адрес и в виде SMS Вам на мобильный телефон. Услуга платная- хотите продолжить?";
	            sMortgageText = sMortgageText.replace(/%TotalCount%/, data.TotalCount);
	            sMortgageText = sMortgageText.replace(/%Pay%/, Math.round(data.FirstResult.Pay));
	            sMortgageText = sMortgageText.replace(/%PayCurrency%/, PayCurrencyName);
	            sMortgageText = sMortgageText.replace(/%Efrate%/, (Math.round(data.FirstResult.Efrate * 100)) + "%");
	            sMortgageText = sMortgageText.replace(/%Rate%/, (Math.round(data.FirstResult.Rate * 100)) + "%");

	            $("#ResultText").html(sMortgageText);
	       //     $("#ResultText").css('margin-top', ($("#ResultText").height() / 2 * -1) + 'px');
	        }

	        if (mode == "pawnshop") {
	            var sMortgageText = "По Вашему запросу всего найдено %TotalCount% возможных ломбардов. При этом ежемесячное погашение по наиболее выгодному для Вас кредиту составит  %AmountOverpaymentDay% %PayCurrency%. <BR />Все найденные ломбарды с адресами Банков и условиями кредитования могут быть высланы Вам на Ваш email адрес и в виде SMS Вам на мобильный телефон. Услуга платная- хотите продолжить?";
	            sMortgageText = sMortgageText.replace(/%TotalCount%/, data.TotalCount);
	            sMortgageText = sMortgageText.replace(/%AmountOverpaymentDay%/, data.FirstResult.AmountOverpaymentDay.toFixed(2));
	            sMortgageText = sMortgageText.replace(/%PayCurrency%/, PayCurrencyName);       
	            $("#ResultText").html(sMortgageText);
	          //  $("#ResultText").css('margin-top', ($("#ResultText").height() / 2 * -1) + 'px');
	        }

	        $('#goto-next').unbind('click').click(function () {
	            goto('senddata');
	        });
	        ShowButtonNext();
	    }
	    else {
	        var sMortgageText = "К сожелению по Вашему запросу ничего не найдено. Измените условия поиска. ";
 
        
	        $("#ResultText").html(sMortgageText);
	       // $("#ResultText").css('margin-top', ($("#ResultText").height() / 2 * -1) + 'px');
        }
    }
    catch (z) { return; }
}
 