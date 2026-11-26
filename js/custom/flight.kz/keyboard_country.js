var items;
var searchTimeout;
var delay=0;
var selectedItem;
var currentValue;
var auto;
var allow=true;

function keyboardCountryInit(){
    var main = $('<div>').attr('id','keyboard_country_main').addClass('keyboard bg');
    
    var holder = $('<div>').addClass('need');
    
    //header
    $(holder).append($('<div>').addClass('header').html('Введите название страны'));
    
    // autocomplete
    var autocomplete = $('<div>').attr('id','autocomplete');
    var input = $('<input>').attr('id','input_country').attr('value','').attr('unselectable','on');
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
    var keyboard_rus = makeCountryKeyboard(buttons_rus,'rus');
    $(holder).append(keyboard_rus);
    var buttons_eng = [
        ['Q','W','E','R','T','Y','U','I','O','P'],
        ['A','S','D','F','G','H','J','K','L'],
        ['-','Z','X','C','V','B','N','M']
    ];
    var keyboard_rus = makeCountryKeyboard(buttons_eng,'eng');
    $(holder).append(keyboard_rus);
    
    // footer
    var footer = $('<div>').addClass('footer');
    footer.append($('<div>').addClass('button_menu menu_button'));
    footer.append($('<div>').addClass('button_menu').html('&larr; Назад').click(function(){closeCountryKeyboard(false)}));
    footer.append($('<div>').addClass('button_menu').html('Подтвердить').attr("id","submit2").click(function(){closeCountryKeyboard(true)}));
    footer.append($('<div>').addClass('clearfix'));
    
    // применяем
    main.append(holder);
    main.append(footer);
    $('div',main).addClass('keyboard');
    $('body').append(main);
    $('.button').attr('unselectable','on');
}

function showCountryKeyboard(elem){
    target = elem;
    $(elem).blur();
    items = [];
    $('#input_country').val("");
    $('#results').html("");
    selectedItem = false;
    allow = true;
    $('#input_span').html("");
    $('#keyboard_country_main').show();
    makeDisable(true);
}

function closeCountryKeyboard(save){
    if (save){
      if (selectedItem){
        addCountry()
        $('#keyboard_country_main').hide();
      }
    }else{
        $('#keyboard_country_main').hide();
    }
}

function makeCountryKeyboard(buttons,suffix){
    var keyboard = $('<div>').attr('id','keyboard_'+suffix).addClass('keyboard_body');
    for(var i = 0; i < buttons.length; i++){
        for(var j = 0; j < buttons[i].length; j++){
            var val= buttons[i][j];
            button = $('<div>').attr('value',val).html(val).addClass('button').click(function(){
                addLetterC($(this).attr('value'));
            });
            keyboard.append(button);
        }
        if (i==1){
            button_backspace = $('<div>').html('&larr;').addClass('button blue').click(function(){backSpaceC()});
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
        addLetterC(' ');
    });
    keyboard.append(button_space);
    $('.button',keyboard).append($("<div>").addClass('left_bg')).append($("<div>").addClass('right_bg'));
    return keyboard;
}

function backSpaceC(){
    if ($('#input_country').val()){
        $('#input_country').val($('#input_country').val().slice(0,$('#input_country').val().length-1));
        auto=false;
        allow = true;
        _addLetterC();
    }
}
                                       
function addLetterC(letter){
    if (allow){
        $('#input_country').val($('#input_country').val()+letter);
        auto=true;
        _addLetterC()
    }
}

function _addLetterC(){
    selectedItem = false;
    makeDisable(true);
    items = [];
    $('#input_span').html("");
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(checkValueC,delay);
}

function checkValueC(){
    var show = true;
    if ($('#input_country').val()){
        findValues();
    }
    if (auto){
        if (items.length==1){
            applyResult(0);
        }
    }
    showResults();
}

function findValues(){
    currentValue = $('#input_country').val(); 
    for(var i = 0; i < countries.length; i++){
        if((countries[i][1].toUpperCase().indexOf(currentValue.toUpperCase())!==-1) || (countries[i][0]==currentValue)){
            items[items.length] = countries[i];
            if(items.length >= 4){
                return true;
            }
        }
    }
}

function showResults(){
    var ul = $('<ul>')
    if (items.length>0){
        $('.block2').removeClass("inactive");
    }else{
        $('.block2').addClass("inactive");
    }
    for(var i = 0; i < items.length; i++){
        var item = items[i];
        var li = $("<li>").html(formatResult(item)).attr('id',i).click(function(){applyResult($(this).attr('id'));$('#results').html("")})
        ul.append(li);
    }
    $('#results').html(ul);
}

function formatResult(item){
    result = '<span class="nd2">'+item[0]+'</span><span class="nd">'+item[1]+'</span>';
    result = highlight(result,currentValue);
    return result;
}

function applyResult(id){
    var item = items[id];
    selectedItem = item;
    makeDisable(false);
    $('#input_country').val(item[1]);
    $('#input_span').html(item[0]);
    items = [];
    allow = false;
    $('.block2').addClass("inactive");
}

function addCountry(){
    $(target).val(selectedItem[1]);
    $(".code",$(target).parent()).val(selectedItem[0]);
}