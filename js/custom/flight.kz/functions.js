function refreshSearchData(){
    sessid = '';
    data = {
        'dates_inner':[],
        'dates':[],
        'times':['none','none','none'],
        'from':[],
        'to':[],
        'current':-1,
        'class':'E',
        'adt' : 1,
        'chd' : 0,
        'yth' : 0,
        'stu' : 0,
        'infants' : 0,
        'ready' : 0,
        'aff_id' : 'osmp'
    };
}
function listOffers(step){
    var page_count = 5;
    var size = $("#"+stops_type+"_offers").children().size();
    var offset = $("#offers_inner").attr("offset");
    if (size>page_count){
        offset = parseInt(offset) + (step*page_count);
        if ((offset+page_count)>size){
            offset= size-page_count;
        }else if (offset<0){
            offset = 0;
        }
        next_count = (size-offset-page_count);
        if (next_count){
            $('#forward_scroll > span').html(next_count);
            $('#forward_scroll').removeClass('unactive');
        }else{
            $('#forward_scroll').addClass('unactive');
            $('#forward_scroll > span').html("");
        }
        if (offset){
            $('#back_scroll > span').html(offset);
            $('#back_scroll').removeClass('unactive');
        }else{
            $('#back_scroll').addClass('unactive');
            $('#back_scroll > span').html("");
        }
        $("#offers_inner").attr("offset",offset);
        $("#offers_inner").animate({ left: (offset*(-200))+"px"}, "slow");
    }
}

function showOffers(type,elem){
    var page_count = 5;
    $('.offers_line').removeClass('active');
    $('#'+type+'_offers').addClass('active');
    $("#offers_inner").attr("offset",0);
    $('.switch_offers_button').removeClass('active');
    $(elem).addClass('active');
    stops_type = type;
    if ($("#"+stops_type+"_offers").children().size()>page_count){
        $('#forward_scroll > span').html($("#"+stops_type+"_offers").children().size()-page_count);
        $('#forward_scroll').removeClass('unactive');
        $('.scroll').show();
    }else{
        $('.scroll').hide();
    }
    $('#back_scroll').addClass('unactive');
    $('#back_scroll > span').html("");
    $("#offers_inner").css("left","0px");
    $("#offers_inner").attr("offset",0);
}

function showOffer(id,hash){
    hideLoad();
    showLoad();
    $.getJSON('http://'+domain+'/api/showoffer?jsoncallback=?',{'hash':hash,'id':id,"PHPSESSID":sessid}, function(data) {
        $('#search_result_inc').html(data.html);
        hideLoad(); 
    },'json');
    $('.offer').removeClass('active');
    $('#offer_'+id).addClass('active');
}

function submitOffer(){
    showLoad();
    $.getJSON('http://'+domain+'/api/showdetails?jsoncallback=?',$('#tripForm').serialize(), function(data) {
        $('body').html(data.html);
        hideLoad();
    },'json');
}

function scrollVertical(plus){
    offset = parseInt($('.trip_inner').css("top"))*(-1);
    offset = offset + scroll_height*plus;
    var max_scroll = $('.trip_inner').height()-$('.trip_scroll').height();
    if(offset<(scroll_height-5) || max_scroll<0){
        offset=0;
        runner_offset = 0;
    }else if(offset>(max_scroll-(scroll_height-5))){
        offset=max_scroll;
        runner_offset = $('.str').height();
    }else{
        runner_offset = ($('.str').height()*offset)/max_scroll;
    }
    $('.trip_inner').animate({"top":(0-offset)+"px"},"slow");
    $('.runner').animate({"top":(runner_offset)+"px"},"slow");
}

function submitEmail(){
    if (($('#email_input').val() != '') && ($('#phone_input').val() != '')){
        showLoad();
        $.getJSON('http://'+domain+'/api/prepare?jsoncallback=?',$('#infoForm').serialize(), function(data) {
            $('body').html(data.html);
            hideLoad();
        },'json');
    }else{
        makePopupError("Введите номер мобильного телефона и e-mail адрес.");
    }
}

function submitPassInfo(){
    if ($('.empty').size()){
        makePopupError("Заполните все поля.");
    }else{
        showLoad();
        $.getJSON('http://'+domain+'/api/addpeopledata?jsoncallback=?',$('#infoForm').serialize(), function(data) {
            $('body').html(data.html);
            hideLoad();
        },'json');
    }
}

function makeError(text,tomain){
    var header = $('<div>').addClass('name2').html("<p>"+"Ошибка"+"</p>");
    var error = $('<div>').addClass('name2_error').html("<p>"+text+"</p>");
    var footer = $('<div>').addClass('footer');
    footer.append($('<div>').addClass('button_menu menu_button'));
    if (tomain){
        footer.append($('<div>').addClass('button_menu').html('В начало').click(function(){window.location.reload();}));
    }else{
        footer.append($('<div>').addClass('button_menu').html('&larr; Назад').click(function(){closeInfo()}));
    }
    footer.append($('<div>').addClass('clearfix'));
    $('body').append($('<div>').addClass("bg").attr("id","info").append($('<div>').addClass('need').append(header).append(error)).append(footer));
    $('#info').show();
}

function makePopupError(text){
    var header = $('<div>').addClass('header_popup').html("Ошибка");
    var text = $('<div>').addClass('text').html(text);
    var foot = $('<div>').addClass('close_button').html("Закрыть").click(function(){closeInfo()});
    var holder = $("<div>").addClass('popup_error').append($('<div>').addClass('left_bg')).append($('<div>').addClass('right_bg'));
    holder.append(header).append(text).append(foot)
    var bg = $("<div>").addClass("bg").fadeTo('fast',0.5).html("&nbsp;").css("display","block");
    $('body').append($("<div>").attr("id","info").append(holder).append(bg));
}

function showInfo(type,hash){
    showLoad();
    vertical_page = 0;
    scroll_height = 300;
    var urls = {
        'rules':"showrules",
        'contract':"showcontract",
        'offer_contract':"showoffercontract"
    };
    $.getJSON('http://'+domain+'/api/'+urls[type]+'?jsoncallback=?',{'hash':hash,"PHPSESSID":sessid}, function(data) {
        $('body').append(data.html);
        $('#info').show();
        hideLoad();
    },'json');
}

function closeInfo(){
    $('#info').remove();
}

function showScroll(){
    if ($('.trip_inner').height() > $('.trip_scroll').height()){
        $('.info3_r').show();
    }
}

function showLoad(){
    var holder = $('<div>').addClass("bg loading_bg").attr("id","loading").fadeTo('fast',0.7);
    holder.append($('<div>').addClass('loading_image'));
    $('body').append(holder);
}

function hideLoad(){
    $('#loading').remove();
}

function makeDisable(value){
    if (value){
        $('#submit').addClass("inactive");
        $('#submit2').addClass("inactive");
    }else{
        $('#submit').removeClass("inactive");
        $('#submit2').removeClass("inactive");
    }
}

function goBook(hash){
    showLoad();
    $.getJSON('http://'+domain+'/api/bookticket?jsoncallback=?',{'hash':hash,"PHPSESSID":sessid}, function(data) {
        $('body').html(data.html);
        hideLoad();
    },'json');
}

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
	
	jParams = {"getAccountNumber":bookingId, "_extra_fixed_int_summ":summ, "prv_id":"5551", "prv_name":"Flight.kz"};
	
	       oPaymentInfo = {};
	        oPaymentInfo.prvId = "5551";
	        oPaymentInfo.buttonName = "Flight.kz";
	        oPaymentInfo.prvName = "Flight.kz";
	        oPaymentInfo.prvLogo = "5551";
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


function goPay(){
    if(booking_summ && booking_id){
        goForvard(booking_id, booking_summ);
    }else{
        makeError("Произошла ошибка! Попробуйте снова.",true);
    }
}

function goBack(url,hash){
    showLoad();
    $.getJSON('http://'+domain+url+'?jsoncallback=?',{'hash':hash,"PHPSESSID":sessid}, function(data) {
        $('body').html(data.html);
        hideLoad();
    },'json');
}

function showMain(){
    showLoad();
    clearInterval(interval);
    $.getJSON('http://'+domain+'/api/showmain?jsoncallback=?', function(data) {
        $('body').html(data.html);
        hideLoad();
    },'json');
    sessid = '';
    data = {
        'dates_inner':[],
        'dates':[],
        'times':['none','none','none'],
        'from':[],
        'to':[],
        'current':-1,
        'class':'E',
        'adt' : 1,
        'chd' : 0,
        'yth' : 0,
        'stu' : 0,
        'infants' : 0,
        'ready' : 0
    };
}

function checkBooking(number,email){
    showLoad();
    $.getJSON('http://'+domain+'/api/checkbooking?jsoncallback=?',{'number':number,'email':email}, function(data) {
        if (data.result == "ok"){
            if(email){
                $('body').html(data.html);
            }else{
                showKeyboard(false,'email');
            }
        }else{                                                   
            makeError(data.error,false);
        }
        hideLoad();
    },'json');
}