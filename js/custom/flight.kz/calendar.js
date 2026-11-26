short_day_names= ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб","Вс"];
short_month_names= ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"];
month_names= ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
month_names_2= ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
curDate = new Date();
var curdate_id = ''+curDate.getFullYear()+(curDate.getMonth()<10 ? '0' : '')+curDate.getMonth()+(curDate.getDate()<10 ? '0' : '')+curDate.getDate();
var activeDate;
var showDate;
var lastDate;
var firstDate;
var target;
var current_id;
var time;

function calendarInit(){
    var main = $('<div>').attr('id','calendar_main').addClass('calendar bg');
    
    var holder = $('<div>').addClass("need");
    
    // left - календарь
    var left = $('<div>').addClass("info_l");
    left.append($('<div>').addClass('name3').append($('<p>').html("Выберите день и время перелета")));
    var calendar_body = $('<div>').attr('id','calendar_body').addClass("calend");
    left.append(calendar_body);
    holder.append(left);
    
    // right - выбор времени
    var right = $('<div>').addClass("info_r");
    right.append($('<div>').addClass('name3').html("Время рейса"));
    var time_holder = $('<div>').addClass("time");
    var time_element = $("<div>").addClass("need3").append($("<div>").addClass("knopa4_active").append($("<div>").addClass("knopa4_l").append($("<div>").addClass("knopa4_r").html("Любое"))));
    time_holder.append(time_element.attr('id','time_none').click(function(){changeTime("none")}));
    
    time_element = $("<div>").addClass("need3").append($("<div>").addClass("knopa4").append($("<div>").addClass("knopa4_l").append($("<div>").addClass("knopa4_r").html("Утром"))));
    time_holder.append(time_element.attr('id','time_morning').append($('<p>').html("С 6:00 до 12:00")).click(function(){changeTime("morning")}));
    
    time_element = $("<div>").addClass("need3").append($("<div>").addClass("knopa4").append($("<div>").addClass("knopa4_l").append($("<div>").addClass("knopa4_r").html("Днем"))));
    time_holder.append(time_element.attr('id','time_day').append($('<p>').html("С 12:00 до 18:00")).click(function(){changeTime("day")}));
    
    time_element = $("<div>").addClass("need3").append($("<div>").addClass("knopa4").append($("<div>").addClass("knopa4_l").append($("<div>").addClass("knopa4_r").html("Вечером"))));
    time_holder.append(time_element.attr('id','time_evening').append($('<p>').html("С 18:00 до 24:00")).click(function(){changeTime("evening")}));
    
    time_element = $("<div>").addClass("need3").append($("<div>").addClass("knopa4").append($("<div>").addClass("knopa4_l").append($("<div>").addClass("knopa4_r").html("Ночью"))));
    time_holder.append(time_element.attr('id','time_night').append($('<p>').html("С 24:00 до 6:00")).click(function(){changeTime("night")}));
    right.append(time_holder);
    holder.append(right);
    
    holder.append($('<div>').addClass('clearfix'));
    
    // footer
    var footer = $('<div>').addClass('footer');
    footer.append($('<div>').addClass('button_menu menu_button'));
    footer.append($('<div>').addClass('button_menu').html('&larr; Назад').click(function(){closeCalendar(false)}));
    footer.append($('<div>').addClass('button_menu').html('Подтвердить').attr("id","submit2").click(function(){closeCalendar(true)}));
    footer.append($('<div>').addClass('clearfix'));
    
    // применяем
    main.append($("<div>").addClass("centermap").append(holder));
    main.append(footer);
    $('div',main).addClass('calendar');
    $('body').append(main);
    $('.button').attr('unselectable','on');
}

function showCalendar(elem){
    target = elem;
    datesInit(elem.attr('id'));
    makeCalendar();
    $('#calendar_main').show();
}

function datesInit(id){
    id = id.substring(5);
    if (data.dates_inner[id-1]){
        firstDate = data.dates_inner[id-1];
    }else{
        firstDate = curDate;
    }
    if (data.dates_inner[parseInt(id)+1]){
        lastDate = data.dates_inner[parseInt(id)+1];
    }else{
        lastDate = false;
    }
    if (data.dates_inner[id]){
        activeDate = data.dates_inner[id];
        showDate = new Date(activeDate.getFullYear(),activeDate.getMonth(),1);
        makeDisable(false);
    }else{
        activeDate = false;
        makeDisable(true);
        showDate = new Date(firstDate.getFullYear(),firstDate.getMonth(),1);
    }
    changeTime(data.times[id]);
    current_id = id;
}

function closeCalendar(save){
    if (save){
      if (activeDate){
        data.dates_inner[current_id] = activeDate;
        data.times[current_id] = time;
        addDateData(current_id);
        $('#calendar_main').hide();
      }
    }else{
        $('#calendar_main').hide();
    }
}

function changeTime(new_time){
    $('.knopa4_active').addClass("knopa4").removeClass('knopa4_active');
    time = new_time
    $('#time_'+time+' > .knopa4').addClass('knopa4_active').removeClass("knopa4");
}

// отрисовка самого календаря

            
function nextDay(date,plus){
    return new Date(date.getFullYear(), date.getMonth() , date.getDate()+plus);
}

function newMonth(plus){
    showDate = new Date(showDate.getFullYear(),showDate.getMonth()+plus,1);
    makeCalendar();
}

function makeCalendar(){
    var body = $('#calendar_body');
    var month = $('<div>').addClass("data2");
    month.append($('<div>').addClass("prev2").append($('<img>').attr("src","./img/custom/flight.kz/prev.gif")).click(function(){newMonth(-1)}));
    month.append($('<div>').addClass("inf4").html(month_names[showDate.getMonth()]+', '+showDate.getFullYear()));
    month.append($('<div>').addClass("prev2").append($('<img>').attr("src","./img/custom/flight.kz/next.gif")).click(function(){newMonth(1)}));
    month.append($('<div>').addClass('clearfix'));
    body.html("").append(month);
    var table = $("<table>").addClass("data3");
    week = $('<tr>').addClass("glav").attr("valign","top");
    for(var i = 0; i < short_day_names.length; i++){
        week.append($('<td>').html(short_day_names[i]));
    }
    table.append(week);
    var day_num = 0;
    var days = $('<tr>').attr('valign','top');
    if (showDate.getDay() != 1){
        var num = (showDate.getDay()==0?6:showDate.getDay()-1);
        for(var i = 0; i < num; i++){
            days.append($('<td>').html("&nbsp;"));
            day_num++;
        }
    }
    var day = showDate;
    var firstday_id = ''+firstDate.getFullYear()+(firstDate.getMonth()<10 ? '0' : '')+firstDate.getMonth()+(firstDate.getDate()<10 ? '0' : '')+firstDate.getDate();
    if (lastDate){
        var lasttday_id = ''+lastDate.getFullYear()+(lastDate.getMonth()<10 ? '0' : '')+lastDate.getMonth()+(lastDate.getDate()<10 ? '0' : '')+lastDate.getDate();
    }
    if (activeDate){
        var activeday_id = ''+activeDate.getFullYear()+(activeDate.getMonth()<10 ? '0' : '')+activeDate.getMonth()+(activeDate.getDate()<10 ? '0' : '')+activeDate.getDate();
    }else{
        activeday_id = false;
    }
    do{
        var day_id = ''+day.getFullYear()+(day.getMonth()<10 ? '0' : '')+day.getMonth()+(day.getDate()<10 ? '0' : '')+day.getDate();
        var day_elem = $('<div>').attr('id',day_id).addClass("knopa3");
        day_elem.html(day.getDate());
        if (day_id==curdate_id){
            day_elem.addClass("current");
        }
        if (day_id==activeday_id){
            day_elem.addClass("knopa3_red");
        }
        if ((lastDate && lasttday_id<day_id)||(firstday_id>day_id)){
            day_elem.addClass("inactive");
        }else{
            day_elem.click(function(){changeDate($(this))});
        }
        days.append($("<td>").append(day_elem));
        day = nextDay(day,1);
        day_num++;
        if (day_num>6){
            day_num = 0;
            table.append(days);
            days = $('<tr>').attr('valign','top');
        }
    }while(showDate.getMonth() == day.getMonth());
    if(day_num){
        for(var i = 0; i < num; i++){
            days.append($("<td>").html("&nbsp;"));
        }
        table.append(days);
    }
    body.append(table);
    $('div',body).addClass('calendar');
}

function changeDate(elem){
    var active_date = elem.attr('id');
    activeDate = new Date(active_date.substring(0,4),active_date.substring(4,6),active_date.substring(6));
    makeDisable(false);
    $('.knopa3_red').removeClass('knopa3_red').addClass("knopa3");
    $(elem).addClass('knopa3_red').removeClass("knopa3");
}