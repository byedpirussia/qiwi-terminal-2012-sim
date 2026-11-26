var times = {'none':'В любое время','morning':'Утром','day':'Днем','evening':'Вечером','night':'Ночью'};
var domain = "www.flight.kz"

var closetimeout;
var booking_id = '';
var booking_summ = '';

function addNext(back){
    data.current = data.current+1;
    var block = $('<div>').attr('id','block_'+data.current);
    block.append(makeFromString());
    block.append(makeDateString());
    block.append(makeToString());
    block.append($('<div>').addClass('clearfix'));
    $('#points').append(block);
    if (back){
        data.from[data.current] = data.to[data.current-1];
        data.to[data.current] = data.from[0];
        addPointData('from',data.current,false);
        addPointData('to',data.current,false);
        showCalendar($('#date_'+data.current));
    }
    $('#next_buttons').hide();
}

function makeFromString(){
    var city = $('<div>').addClass('city').html("Откуда");
    return $('<div>').addClass('search_point').append($('<div>').addClass('left_bg')).append($('<div>').addClass('right_bg')).append(city).attr('id','from_'+data.current).click(function(){showMainKeyboard($(this));});
}

function makeToString(){
    var city = $('<div>').addClass('city').html("Куда");
    return $('<div>').addClass('search_point right').append($('<div>').addClass('left_bg')).append($('<div>').addClass('right_bg')).append(city).attr('id','to_'+data.current).click(function(){showMainKeyboard($(this));});
}

function makeDateString(){
    var plane = $('<div>').addClass('date_big').html('Дата<div class="small">выберите день<br />и время перелета</div>');
    return $('<div>').addClass('search_date').append($('<div>').addClass('left_bg')).append($('<div>').addClass('right_bg')).append(plane).attr('id','date_'+data.current).click(function(){showCalendar($(this));});
}

function addPointData(name,id,need){
    var city = $('<div>').addClass('city').html(data[name][id][1]);
    var port = $('<div>').addClass('port').html(data[name][id][1]==data[name][id][0]?data[name][id][3]:data[name][id][0]);
    $('#'+name+'_'+id).html("").append(city).append(port).append($('<div>').addClass('left_bg')).append($('<div>').addClass('right_bg'));
    if (need && !data.dates_inner[id] && data.from[id] && data.to[id]){
        showCalendar($('#date_'+id));
    }else{
        addButtons();
    }
}

function addDateData(id){
    var plane = $('<div>').addClass('date_plane');
    var date = $('<div>').addClass('date').html(data.dates_inner[id].getDate()+' '+month_names_2[data.dates_inner[id].getMonth()]);
    var time = $('<div>').addClass('time').html(times[data.times[id]]);
    $('#date_'+id).html("").append(plane).append(date).append(time).append($('<div>').addClass('left_bg')).append($('<div>').addClass('right_bg'));
    data.dates[id] = data.dates_inner[id].getDate()+'.'+(data.dates_inner[id].getMonth()+1)+'.'+data.dates_inner[id].getFullYear();
    addButtons();
}

function addButtons(){
    if(data.dates_inner[data.current] && data.from[data.current] && data.to[data.current] && data.current<2 && (data.to[data.current] != data.from[0])){
        $('#back_port').html(data.to[data.current][1]+' - '+data.from[0][1]);
        $('#next_buttons').show();
    }
    if(data.dates_inner[data.current] && data.from[data.current] && data.to[data.current]){
        refreshRouteString();
        data.ready = 1;
    }
}

function changeClass(cl){
    $('.class_value').removeClass("active");
    data['class'] = cl;
    $('#class_'+cl).addClass("active");
}

function changePassCount(type,plus){
    data[type] = data[type]+plus;
    if (data["adt"]<1 && data["chd"]<1){
        data["adt"] = 1;
        $('#adt_count').html(data["adt"]);
    }
    if (data["adt"]<data["infants"]){
        data["infants"] = data["adt"];
        makePopupError("На каждого младенца положено не менее 1 взрослого.");
    }
    if (data[type]<0){
        data[type] = 0;
    }
    if (data[type]>9){
        data[type] = 9;
    }
    $('#'+type+'_count').html(data[type]);
    refreshPassCount();
}

function refreshPassCount(){
    var string = '';
    if (data["adt"]){
        string = data["adt"]+" "+(data["adt"]>1?"взрослых":"взрослый");
    }
    if (data["chd"]){
        string = (string?string+", ":"")+data["chd"]+" "+(data["chd"]>1?(data["chd"]>4?"детей":"ребенка"):"ребенок");
    }
    if (data["infants"]){
        string = string+", "+data["infants"]+" "+(data["infants"]>1?(data["infants"]>4?"младенцев":"младенца"):"младенец");
    }
    $('#pass_header').html(string);
}

function refreshRouteString(){
    var string = "";
    for (i=0;i<data.from.length;i++){
        if (typeof data.to[i-1] == "undefined"){
            string = data.from[i][1];
        }else if(data.to[i-1] != data.from[i]){
            string = string+', '+data.from[i][1];
        }
        string = string+' &rarr; '+data.to[i][1];
    }
    $('#route').html(string);
}

function goSearch(){
    if (data.ready){
        showLoad();
        $.getJSON('http://'+domain+'/api/search?jsoncallback=?',{'data':data},function(hash){
            var head = $('<div>').addClass('head').append($('<a>').attr('id','logo').append($('<img>').attr('src','./img/custom/flight.kz/logo.gif')).click(function(){showMain();}));
            head.append($('<a>').attr('id','help').attr('href','javascript:;').append($('<img>').attr('src','./img/custom/flight.kz/help.gif')));
            var poisk = $('<div>').addClass('poisk').append($('<p>').html('<strong>Пожалуйста, подождите.</strong><br>Мы ищем возможные варианты перелета.'));
            poisk.append($('<div>').addClass('line').append($('<img>').attr('src','./img/custom/flight.kz/preload.gif')));
            var need = $('<div>').addClass('need').append(head).append(poisk);
            var footer = $('<div>').addClass('footer grad');
            footer.append($('<a>').attr("href","terminal.html").append($("<div>").addClass("button_menu super_menu_button").html("В меню")));
            footer.append($('<div>').addClass('button_menu').html('&larr; Назад').click(function(){showMain();})).append($('<div>').addClass('clearfix'));
            $('body').html('').append($('<div>').addClass('bg2').append($('<div>').addClass('centermap').append(need).append(footer)));
            interval = setInterval(function(){checkHash(hash.hash);}, 3000);
        },'json');
        return false;
    }else{
        makePopupError("Введите маршрут полета.");
    }
}

function clearAll(){
    refreshSearchData();
    $('#adt_count').html("1");
    $('#chd_count').html("0");
    $('#infants_count').html("0");
    changeClass('E');
    $('#points').html("");
    addNext();
    $('#route').html("&nbsp;");
    $('#pass_header').html("1 взрослый");
}

var interval='';
function closePreloader(hash){
    clearInterval(interval);
    $.getJSON('http://'+domain+'/api/showsearchosmp?jsoncallback=?',{'hash':hash,'data':data},function(result){
        $('body').html(result.html);
    },'json');
}

function showAllResults(hash){
    clearInterval(interval);
    $.getJSON('http://osmp.flight.kz/booking/showsearch?jsoncallback=?',{'hash':hash,'all':1},function(result){
        $('body').html(result.html);
    },'json');
}
    
function checkHash(hash){
    $.getJSON('http://'+domain+'/api/check?jsoncallback=?',{'hash':hash}, function(data) {
      if (data.status == "ready"){
        closePreloader(hash);
      }
    },'json');
    return false;
}