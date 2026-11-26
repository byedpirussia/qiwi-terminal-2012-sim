var target;
var current_type;
var edit=1;
var edit_mode = false;
var back;

function keyboardInit(types){
    var main = $('<div>').attr('id','keyboard').addClass('keyboard bg');
    
    var holder = $('<div>').addClass('need'); 
    
    for(var i = 0; i < types.length; i++){
        var header = $('<div>').addClass('name '+types[i]);
        header.append($('<p>').html(headers[types[i]]));
        if (typeof subheaders[types[i]] != 'undefined'){
            header.append($('<p>').addClass('tx').html(subheaders[types[i]]));
        }
        $(holder).append(header);
        $(holder).append(makeInput(types[i]));
        $(holder).append(makeKeyboard(buttons[types[i]],types[i]));
    }
    
    $(holder).append($('<input>').attr('type','hidden').attr('id','input'));
    
    // footer
    var footer = $('<div>').addClass('footer');
    footer.append($('<div>').addClass('button_menu menu_button'));
    footer.append($('<div>').addClass('button_menu').html('&larr; Назад').click(function(){closeKeyboard(false)}));
    footer.append($('<div>').addClass('button_menu').html('Подтвердить').attr("id","submit").click(function(){closeKeyboard(true)}));
    footer.append($('<div>').addClass('clearfix'));
    
    // применяем
    main.append($('<div>').addClass("centermap").append(holder));
    main.append(footer);
    $('body').append(main);
}

function showKeyboard(elem,type){
    target = elem;
    $(elem).blur();
    edit = 1;
    addInputValue(type,patternValue(getValue(target,type),type));
    if (getValue(target,type) && !$(target).hasClass('empty')){
        makeDisable(false);
    }else{
        makeDisable(true);
    }
    $('.name').hide();
    $('.input').hide();
    $('.keybord').hide();
    $('.'+type).show();
    $('#keyboard').show();
    current_type = type;
}

function closeKeyboard(save){
    if (save){
        if (checkValue($('#input').val(),current_type)){
            addFromKeyboard(target,$('#input').val(),current_type);
            $('#keyboard').hide();
        }
    }else{
        $('#keyboard').hide();
    }
}

function makeKeyboard(buttons,suffix){
    var keyboard = $('<div>').addClass('keybord '+suffix);
    for(var i = 0; i < buttons.length; i++){
        for(var j = 0; j < buttons[i].length; j++){
            var val= buttons[i][j];
            if (val == 'bksp'){
                button = $('<span>').append($('<span>').addClass('knopa_l').append($('<span>').addClass('knopa_r').html('&larr;'))).addClass('active').click(function(){
                    backSpace()
                });
            }else if(val == 'lang'){
                button = $('<span>').append($('<span>').addClass('knopa_l').append($('<span>').addClass('knopa_r').html(suffix=='rus'?'eng':'рус'))).addClass('active3').click(function(){
                    $('#keyboard_'+suffix).hide();
                    $('#keyboard_'+(suffix=='rus'?'eng':'rus')).show();
                });
            }else if(val == 'space'){
                button = $('<span>').append($('<span>').addClass('knopa_l').append($('<span>').addClass('knopa_r').html('&nbsp;'))).addClass('send').click(function(){
                    addLetter(' ');
                });
            }else if(val == 'null'){
                button = $('<span>').html('&nbsp;').addClass('null');
            }else{
                button = $('<span>').append($('<span>').addClass('knopa_l').append($('<span>').addClass('knopa_r').html(val))).attr('value',val).addClass('knopa').click(function(){
                    addLetter($(this).attr('value'));
                });
            }
            keyboard.append(button);
        }
        keyboard.append($('<div>').addClass('clearfix'));
    };
    return keyboard;
}

function backSpace(){
    var val = getCurrentValue(current_type,1);
    if (val){
        back=true;
        val = patternValue(val.slice(0,val.length-1),current_type,1)
        addInputValue(current_type,val);
    }
}
                                       
function addLetter(letter){
    var val = getCurrentValue(current_type,0);
    val = patternValue(val+letter,current_type,0)
    addInputValue(current_type,val);
}






// настройки
var headers = {
    'email':"Введите E-mail адрес",
    'phone':"Введите номер телефона",
    'booking':"Введите номер заказа",
    'last_name':"Фамилия пассажира",
    'first_name':"Имя пассажира",
    'dob':"Введите дату рождения",
    'country_code':"Введите код страны гражданства",
    'document_num':"Введите номер паспорта",
    'document_date':"Введите срок действия паспорта"
}

var subheaders = {
    'last_name':"Введите латинскими буквами",
    'first_name':"Введите латинскими буквами",
    'country_code':"2 латинских символа"
}

var buttons = {
    "email":[
        ['1','2','3','4','5','6','7','8','9','0','-'],
        ['Q','W','E','R','T','Y','U','I','O','P','bksp'],
        ['A','S','D','F','G','H','J','K','L','@','null'],
        ['Z','X','C','V','B','N','M','.','_'],
        ['space']
    ],
    "last_name":[
        ['Q','W','E','R','T','Y','U','I','O','P'],
        ['A','S','D','F','G','H','J','K','L'],
        ['Z','X','C','V','B','N','M','-','bksp'],
        ['space']
    ],
    "country_code":[
        ['Q','W','E','R','T','Y','U','I','O','P'],
        ['A','S','D','F','G','H','J','K','L','bksp'],
        ['Z','X','C','V','B','N','M']
    ],
    "document_num":[
        ['1','2','3','4','5','6','7','8','9','0'],
        ['Q','W','E','R','T','Y','U','I','O','P'],
        ['A','S','D','F','G','H','J','K','L','bksp'],
        ['Z','X','C','V','B','N','M']
    ],
    "phone":[
        ['1','2','3'],
        ['4','5','6'],
        ['7','8','9'],
        ['null','0','bksp']
    ]
}

buttons.first_name = buttons.last_name;
buttons.dob = buttons.phone;
buttons.document_date = buttons.phone;
buttons.booking = buttons.phone;

// функции, зависящие от типов

function getCurrentValue(type,to_del){
    if(type=="dob" || type=="document_date"){
        value=$('.'+type+' .inf'+(edit>1?edit:'')+' .hidden').val();
        if (!to_del){
            if(edit<3 && value.length>1){
                edit = edit+1;
                value=$('.'+type+' .inf'+edit+' .hidden').val();
                if (value.length>1){
                    edit = 3;
                    value=$('.'+type+' .inf'+edit+' .hidden').val();
                }
                edit_mode = false;
            }
        }else if(!edit_mode && value=='' && edit>1){
            edit = edit-1;
            value=$('.'+type+' .inf'+(edit>1?edit:'')+' .hidden').val();
        }
        return value;
    }else{
        return $('#input').val();
    }
}

function checkValue(value,type){
    switch(type)
    {
    case "email":
      return value.toLowerCase().match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9]{2}(?:[a-z0-9-]*[a-z0-9])?/)
      break;
    case "phone":
      return value.match(/\+7[0-9]{10}$/)
      break;
    case "booking":
      return value.match(/[0-9]{6}$/)
      break;
    case "last_name":
      return value.match(/[A-Z-]{2,}$/)
      break;
    case "first_name":
      return value.match(/[A-Z-]{2,}$/)
      break;
    case "dob":
      return value.match(/[0-9]{2}.[0-9]{2}.[0-9]{4}$/)
      break;
    case "country_code":
      return value.match(/[A-Z-]{2}$/)
      break;
    case "document_num":
      return value.match(/[0-9A-Z]{5,}$/)
      break;
    case "document_date":
      return value.match(/[0-9]{2}.[0-9]{2}.[0-9]{4}$/)
      break;
    default:
      return false;
    }
}

function patternValue(value,type,back){
    if (type=="phone"){
        if (value.indexOf('+7') != "0"){
            return "+7";
        }else{
            return value;
        }
    }else if(type=="dob" || type=="document_date"){
        if(value.length>4){
            value=value.substr(0,value.length-1);
        }
        $('.'+type+' .inf'+(edit>1?edit:'')+' .hidden').val(value);
        return value;
    }else{
        return value;
    }
}

function makeInput(type){
    if (type != "dob" && type != "document_date"){
        return $('<div>').addClass('inp input '+type).append($('<div>').addClass('inp_l').append($('<div>').addClass('inp_r').append($('<input>').addClass("inp3"))));
    }else{
        var inp1_inp = $('<div>').addClass('inp_r').append($('<input>').attr("type","text").addClass('value')).append($('<input>').attr("type","hidden").addClass('hidden')).append($('<div>').addClass('clear'));
        inp1 = $('<div>').addClass('inf').append($('<div>').addClass('inp').append($('<div>').addClass('inp_l').append(inp1_inp))).click(function(){addHighLight(this,1)});
        var inp2_inp = $('<div>').addClass('inp_r').append($('<input>').attr("type","text").addClass('value')).append($('<input>').attr("type","hidden").addClass('hidden')).append($('<div>').addClass('clear'));
        inp2 = $('<div>').addClass('inf2').append($('<div>').addClass('inp').append($('<div>').addClass('inp_l').append(inp2_inp))).click(function(){addHighLight(this,2)});
        var inp3_inp = $('<div>').addClass('inp_r').append($('<input>').attr("type","text").addClass('value')).append($('<input>').attr("type","hidden").addClass('hidden')).append($('<div>').addClass('clear'));
        inp3 = $('<div>').addClass('inf3').append($('<div>').addClass('inp').append($('<div>').addClass('inp_l').append(inp3_inp))).click(function(){addHighLight(this,3)});
        return $('<div>').addClass('data input '+type).append(inp1).append(inp2).append(inp3).append($('<div>').addClass('clearfix'));
    }
}

function addHighLight(elem,edit_n){
    addInputValue(current_type,'');
    $('input',elem).val('').blur();
    edit = edit_n;
    edit_mode = true;
}

function addInputValue(type,value){
    if (type != "dob" && type != "document_date"){
        $('#input').val(value);
        $('.'+type+' .inp3').focus();
        $('.'+type+' .inp3').val(value);
        if (checkValue(value,type)){
            makeDisable(false);
        }else{
            makeDisable(true);
        }
    }else{
        if ($('.'+type+' .inf .hidden').val()){
            val1 = ($('.'+type+' .inf .hidden').val().length>1?$('.'+type+' .inf .hidden').val():'0'+$('.'+type+' .inf .hidden').val());
        }else{
            val1 = 'дд';
        }
        if ($('.'+type+' .inf2 .hidden').val()){
            val2 = ($('.'+type+' .inf2 .hidden').val().length>1?$('.'+type+' .inf2 .hidden').val():'0'+$('.'+type+' .inf2 .hidden').val());
        }else{
            val2 = 'мм';
        }
        if ($('.'+type+' .inf3 .hidden').val()){
            val3 = $('.'+type+' .inf3 .hidden').val();
        }else{
            val3 = 'гггг';
        }
        $('.'+type+' .inf .value').val(val1);
        $('.'+type+' .inf2 .value').val(val2);
        $('.'+type+' .inf3 .value').val(val3);
        value = val1+'.'+val2+'.'+val3;
        $('#input').val(value);
        if (checkValue(value,type)){
            var min = $(target).attr("mindate");
            var max = $(target).attr("maxdate");
            var val = (new Date(value.substr(6,4),(value.substr(3,2)-1),value.substr(0,2)).getTime())/1000;
            if ((!min || val>min) && (!max || val<max)){
                makeDisable(false);
            }else{
                makeDisable(true);
                if (type == "dob"){
                    makeError("Дата рождения не соответствует типу пассажира!");
                }else{
                    makeError("Паспорт просрочен");
                }
            }
        }else{
            makeDisable(true);
        }
    }
}