var target;
var items;
var searchTimeout;
var delay=0;
var selectedItem;
var currentValue;
var auto;
var allow=true;

function keyboardMainInit(){
    var main = $('<div>').attr('id','keyboard_main').addClass('keyboard bg');
    
    var holder = $('<div>').addClass('need');
    
    //header
    $(holder).append($('<div>').addClass('header').html('Введите название города'));
    
    // autocomplete
    var autocomplete = $('<div>').attr('id','autocomplete');
    var input = $('<input>').attr('id','input').attr('value','').attr('unselectable','on');
    input = $('<div>').addClass('inp').append($('<div>').addClass('inp_l').append($('<div>').addClass('inp_r').append(input).append($('<span>').attr('id','input_span'))));
    autocomplete.append(input);
    var results = $('<div>').addClass('block2 inactive').append($('<div>').addClass('block2_top').append($('<div>').addClass('block2_foot').attr('id','results')));
    autocomplete.append(results);
    $(holder).append(autocomplete);
    
    // keyboard
    var buttons_rus = [
        ['Й','Ц','У','К','Е','Н','Г','Ш','Щ','З','Х','Ъ'],
        ['Ф','Ы','В','А','П','Р','О','Л','Д','Ж','Э'],
        ['-','Я','Ч','С','М','И','Т','Ь','Б','Ю']
    ];
    var keyboard_rus = makeMainKeyboard(buttons_rus,'rus');
    $(holder).append(keyboard_rus);
    var buttons_eng = [
        ['Q','W','E','R','T','Y','U','I','O','P'],
        ['A','S','D','F','G','H','J','K','L'],
        ['-','Z','X','C','V','B','N','M']
    ];
    var keyboard_rus = makeMainKeyboard(buttons_eng,'eng');
    $(holder).append(keyboard_rus);
    
    // footer
    var footer = $('<div>').addClass('footer');
    footer.append($('<div>').addClass('button_menu menu_button'));
    footer.append($('<div>').addClass('button_menu').html('&larr; Назад').click(function(){closeMainKeyboard(false)}));
    footer.append($('<div>').addClass('button_menu').html('Подтвердить').attr("id","submit").click(function(){closeMainKeyboard(true)}));
    footer.append($('<div>').addClass('clearfix'));
    
    // применяем
    main.append(holder);
    main.append(footer);
    $('div',main).addClass('keyboard');
    $('body').append(main);
    $('.button').attr('unselectable','on');
}

function showMainKeyboard(elem){
    target = elem;
    items = [];
    $('#input').val("");
    $('#results').html("");
    selectedItem = false;
    allow = true;
    $('#input_span').html("");
    $('#keyboard_main').show();
    makeDisable(true);
    var $ololo = airports[0][3];
}

function closeMainKeyboard(save){
    if (save){
      if (selectedItem){
        var id = target.attr('id');
        var arr_id = id.split("_");
        var need_calendar = (data[arr_id[0]][arr_id[1]]?0:1);
        data[arr_id[0]][arr_id[1]] = selectedItem;
        addPointData(arr_id[0],arr_id[1],need_calendar);
        $('#keyboard_main').hide();
      }
    }else{
        $('#keyboard_main').hide();
    }
}

function makeMainKeyboard(buttons,suffix){
    var keyboard = $('<div>').attr('id','keyboard_'+suffix).addClass('keyboard_body');
    for(var i = 0; i < buttons.length; i++){
        for(var j = 0; j < buttons[i].length; j++){
            var val= buttons[i][j];
            button = $('<div>').attr('value',val).html(val).addClass('button').click(function(){
                addLetterm($(this).attr('value'));
            });
            keyboard.append(button);
        }
        if (i==1){
            button_backspace = $('<div>').html('&larr;').addClass('button blue').click(function(){backSpacem()});
            keyboard.append(button_backspace);
        }
    };
    button_lang = $('<div>').html(suffix=='rus'?'eng':'рус').addClass('button lang_button blue').click(function(){
        $('#keyboard_'+suffix).hide();
        $('#keyboard_'+(suffix=='rus'?'eng':'rus')).show();
    });
    keyboard.append(button_lang);
    keyboard.append($('<div>').addClass('clearfix'));
    button_space = $('<div>').html('&nbsp;').addClass('button spacebutton').click(function(){
        addLetterm(' ');
    });
    keyboard.append(button_space);
    $('.button',keyboard).append($("<div>").addClass('left_bg')).append($("<div>").addClass('right_bg'));
    return keyboard;
}

function backSpacem(){
    if ($('#input').val()){
        $('#input').val($('#input').val().slice(0,$('#input').val().length-1));
        auto=false;
        allow = true;
        _addLetterm();
    }
}
                                       
function addLetterm(letter){
    if (allow){
        $('#input').val($('#input').val()+letter);
        auto=true;
        _addLetterm()
    }
}

function _addLetterm(){
    selectedItem = false;
    makeDisable(true);
    items = [];
    $('#input_span').html("");
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(checkValuem,delay);
}

function checkValuem(){
    var show = true;
    if ($('#input').val() && $('#input').val().length>2){
        findValuesm();
    }
    if (auto){
        if (items.length==1){
            applyResultm(0);
        }else if(items.length && items[0][1].toUpperCase()==$('#input').val().toUpperCase() && items[0][4]){
            if (items[0][1].toUpperCase()==items[1][1].toUpperCase() && items[0][2].toUpperCase()==items[1][2].toUpperCase()){
                applyResultm(0);
            }
        }
    }
    showResultsm();
}

function findValuesm(){
    currentValue = $('#input').val(); 
    var city=[];
    var airport=[];
    var start_city=[];
    var start_airport=[];
    var sub_city=[];
    var sub_airport=[];
    for(var i = 0; i < airports.length; i++){
        if(airports[i][3]==currentValue.toUpperCase()){
            items[items.length] = airports[i];
        }else if(airports[i][1].toUpperCase()==currentValue.toUpperCase() && airports[i][0].toUpperCase()==currentValue.toUpperCase()){
            items[items.length] = airports[i];
        }else if(airports[i][1].toUpperCase()==currentValue.toUpperCase()){
            city[city.length] = airports[i];
        }else if(airports[i][0].toUpperCase()==currentValue.toUpperCase()){
            airport[airport.length] = airports[i];
        }else if(airports[i][1].toUpperCase().indexOf(currentValue.toUpperCase())===0){
            start_city[start_city.length] = airports[i];
        }else if(airports[i][0].toUpperCase().indexOf(currentValue.toUpperCase())===0){
            start_airport[start_airport.length] = airports[i];
        }else if(airports[i][1].toUpperCase().indexOf(currentValue.toUpperCase())!==-1){
            sub_city[sub_city.length] = airports[i];
        }else if(airports[i][0].toUpperCase().indexOf(currentValue.toUpperCase())!==-1){
            sub_airport[sub_airport.length] = airports[i];
        }
    }
    for(var i = 0; i < city.length; i++){
        items[items.length] = city[i];
        if(items.length >= 4){
            return true;
        }
    }
    for(var i = 0; i < airport.length; i++){
        items[items.length] = airport[i];
        if(items.length >= 4){
            return true;
        }
    }
    for(var i = 0; i < start_city.length; i++){
        items[items.length] = start_city[i];
        if(items.length >= 4){
            return true;
        }
    }
    for(var i = 0; i < start_airport.length; i++){
        items[items.length] = start_airport[i];
        if(items.length >= 4){
            return true;
        }
    }
    for(var i = 0; i < sub_city.length; i++){
        items[items.length] = sub_city[i];
        if(items.length >= 4){
            return true;
        }
    }
    for(var i = 0; i < sub_airport.length; i++){
        items[items.length] = sub_airport[i];
        if(items.length >= 4){
            return true;
        }
    }
}

function showResultsm(){
    var ul = $('<ul>')
    if (items.length>0){
        $('.block2').removeClass("inactive");
    }else{
        $('.block2').addClass("inactive");
    }
    for(var i = 0; i < items.length; i++){
        var item = items[i];
        var li = $("<li>").html(formatResultm(item)).attr('id',i).click(function(){applyResultm($(this).attr('id'));$('#results').html("")})
        ul.append(li);
    }
    $('#results').html(ul);
}

function formatResultm(item){
    var result = '';
    if(item[0]==item[1]){
        result = item[1]+', '+item[2];
    }else{
        result = item[0]+', '+item[1];
    }
    result = '<span class="nd2">'+item[3]+'</span><span class="nd">'+result+'</span>';
    result = highlight(result,currentValue);
    return result;
}

function highlight(value,term){
    return value.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + term.replace(/([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi, "\\$1") + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");
}

function applyResultm(id){
    var item = items[id];
    selectedItem = item;
    makeDisable(false);
    $('#input').val(item[4]?item[1]:item[0]);
    $('#input_span').html(item[3]);
    items = [];
    allow = false;
    $('.block2').addClass("inactive");
}