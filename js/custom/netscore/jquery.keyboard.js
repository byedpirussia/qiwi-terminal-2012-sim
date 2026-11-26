var keyboard_shiftIsEnabled = 0;
var keyboard_currentLang = 'en';
var keyboard_currentElement;
var keyboard_imgpath = 'img/custom/netscore/keyboard/';

(function ($) {
	$.fn.keyboard = function(param) {
		var el = this;
		buildKeyboard();
		$(el).click(function() {
        keyboard_currentLang='en';
			$('#keyboard-bk').show();
			$('#keyboard').show();
			keyboard_currentElement = this;
            keyboard_currentLang = keyboard_currentLang == 'num' && $(this).attr('keyboardmode') != 'numeric' ? 'ru' : keyboard_currentLang;
			changeLang($(this).attr('keyboardmode') != 'numeric' ? keyboard_currentLang : 'num');

			var tagname = document.getElementById($(this).attr('id')).tagName.toLowerCase();
			if (tagname == 'div' || tagname == 'span') {
				$('#keyboard-inputbox').val($(this).html());
			} else {
				$('#keyboard-inputbox').val($(this).val());
			}


            if($('#keyboard-inputbox').val()=="0")
            {
                $('#keyboard-inputbox').val("");
            }
            for(var i=0;i<20;i++)
            {
                $('#keyboard-inputbox').MoveSelection('next');
            }
 
		});
		
		function changeLang(s) {
 
			$('#keyboard_' + keyboard_currentLang).hide();
			keyboard_currentLang = s;
			$('#keyboard_' + keyboard_currentLang).show();
		}

		function calcCoords(r, c) {
			var x=5; //отступ от левого края
			x += 70*(c-1); //расчет левой границы
			x += 10*(c-1); //поправка на расстояние между кнопками
			
			var y=5; //отступ от верхнего края
			y += 80*(r-1); //расчет верхней границы
			
			return [x, y];
		}

		function calcCoordsS(r, c, colspan) {
			colspan = !colspan ? 1 : colspan;
			var x1 = calcCoords(r, c, colspan)[0];
			var y1 = calcCoords(r, c, colspan)[1];
			var x2 = x1+(70*colspan)+(10*(colspan-1));
			var y2 = y1+70;
			
			return x1+','+y1+','+x2+','+y2;			
		}

		function calcCoordsSM(r, c, colspan, addmeta) {
			var coords = calcCoordsS(r, c, colspan);
			var meta = '{ r: \'' + r + '\', c: \'' + c + '\'' + ( addmeta ? ', ' + addmeta : '' ) + ' }'
			return 'coords="' + coords + '" class="' + meta + '"';
		}
		
		function buildKeyboardBASE(numeric) {
			var html = ''
			+ '<area id="keyboard-left" shape="rect" ' + calcCoordsSM(1, 7, 2) + ' href="#">' // влево
			+ '<area id="keyboard-right" shape="rect" ' + calcCoordsSM(1, 9, 2) + ' href="#">' // вправо
			+ '<area id="keyboard-del" shape="rect" ' + calcCoordsSM(1, 11, 2) + ' href="#">' // удалить
			+ '';

			if(numeric) {
				html += '<area id="keyboard-done" shape="rect" ' + calcCoordsSM(5, 9, 4) + ' href="#">'; // Готово
			} else {
				html += '<area id="keyboard-done" shape="rect" ' + calcCoordsSM(6, 10, 3) + ' href="#">'; // Готово
			}
			
			if(!numeric) {
				html += ''
					+ '<area id="keyboard-lang" shape="rect" ' + calcCoordsSM(6, 1, 2) + ' href="#">' // смена языка
					+ '<area id="keyboard-shift" shape="rect" ' + calcCoordsSM(6, 3) + ' href="#">' // SHIFT
					+ '<area id="keyboard-space" shape="rect" ' + calcCoordsSM(6, 4, 6) + ' href="#">' // Пробел
					+ '';
			}
			return html;
		}

		function buildKeyboardRU() {
			var html = '<img id="keyboard_ru" style="display: none" src="' + keyboard_imgpath + 'keyboard_ru.jpg" usemap="#keyboard_ru" border="0" />'
				+ '<map name=keyboard_ru>'
				+ buildKeyboardBASE();
			
			var v = [
				 [ '\'v\': \'1\', \'shift\': \'!\'', '\'v\': \'2\', \'shift\': \'@\'', '\'v\': \'3\', \'shift\': \'№\'', '\'v\': \'4\', \'shift\': \';\'', '\'v\': \'5\', \'shift\': \'%\'', '\'v\': \'6\', \'shift\': \':\'', '\'v\': \'7\', \'shift\': \'?\'', '\'v\': \'8\', \'shift\': \'*\'', '\'v\': \'9\', \'shift\': \'(\'', '\'v\': \'0\', \'shift\': \')\'', '\'v\': \'-\', \'shift\': \'_\'', '\'v\': \'=\', \'shift\': \'+\'' ]
				,[ '\'v\': \'Й\'', '\'v\': \'Ц\'', '\'v\': \'У\'', '\'v\': \'К\'', '\'v\': \'Е\'', '\'v\': \'Н\'', '\'v\': \'Г\'', '\'v\': \'Ш\'', '\'v\': \'Щ\'', '\'v\': \'З\'', '\'v\': \'Х\'', '\'v\': \'Ъ\'' ]
				,[ '\'v\': \'Ф\'', '\'v\': \'Ы\'', '\'v\': \'В\'', '\'v\': \'А\'', '\'v\': \'П\'', '\'v\': \'Р\'', '\'v\': \'О\'', '\'v\': \'Л\'', '\'v\': \'Д\'', '\'v\': \'Ж\'', '\'v\': \'Э\'', '\'v\': \'Я\'' ]
				,[ '\'v\': \'@\'', '', '\'v\': \'Ч\'', '\'v\': \'С\'', '\'v\': \'М\'', '\'v\': \'И\'', '\'v\': \'Т\'', '\'v\': \'Ь\'', '\'v\': \'Б\'', '\'v\': \'Ю\'', '\'v\': \'.\'', '\'v\': \',\'' ]
			];

			for(var r=2;r<=5;r++) {
				for(var c=1;c<=12;c++) {
					if(!v[r - 2][c - 1]) continue;
					html += '<area id="keyboard-'+r+'-'+c+'" shape="rect" ' + calcCoordsSM(r, c, 0, v[r - 2][c - 1]) + ' href="#">';
				}
			}
			html += '</map>';
			return html;
		}

		function buildKeyboardKZ() {
			var html = '<img id="keyboard_kz" style="display: none" src="' + keyboard_imgpath + 'keyboard_kz.jpg" usemap="#keyboard_kz" border="0" />'
				+ '<map name=keyboard_kz>'
				+ buildKeyboardBASE();
			
			var v = [
				 [ '\'v\': \'!\', \'shift\': \'1\'', '\'v\': \'Ә\', \'shift\': \'2\'', '\'v\': \'І\', \'shift\': \'3\'', '\'v\': \'Ң\', \'shift\': \'4\'', '\'v\': \'Ғ\', \'shift\': \'5\'', '\'v\': \';\', \'shift\': \'6\'', '\'v\': \':\', \'shift\': \'7\'', '\'v\': \'Ү\', \'shift\': \'8\'', '\'v\': \'Ұ\', \'shift\': \'9\'', '\'v\': \'Қ\', \'shift\': \'0\'', '\'v\': \'Ө\', \'shift\': \'-\'', '\'v\': \'Һ\', \'shift\': \'=\'' ]
				,[ '\'v\': \'Й\'', '\'v\': \'Ц\'', '\'v\': \'У\'', '\'v\': \'К\'', '\'v\': \'Е\'', '\'v\': \'Н\'', '\'v\': \'Г\'', '\'v\': \'Ш\'', '\'v\': \'Щ\'', '\'v\': \'З\'', '\'v\': \'Х\'', '\'v\': \'Ъ\'' ]
				,[ '\'v\': \'Ф\'', '\'v\': \'Ы\'', '\'v\': \'В\'', '\'v\': \'А\'', '\'v\': \'П\'', '\'v\': \'Р\'', '\'v\': \'О\'', '\'v\': \'Л\'', '\'v\': \'Д\'', '\'v\': \'Ж\'', '\'v\': \'Э\'', '\'v\': \'Я\'' ]
				,[ '\'v\': \'@\'', '', '\'v\': \'Ч\'', '\'v\': \'С\'', '\'v\': \'М\'', '\'v\': \'И\'', '\'v\': \'Т\'', '\'v\': \'Ь\'', '\'v\': \'Б\'', '\'v\': \'Ю\'', '\'v\': \'.\'', '\'v\': \',\'' ]
			];

			for(var r=2;r<=5;r++) {
				for(var c=1;c<=12;c++) {
					if(!v[r - 2][c - 1]) continue;
					html += '<area id="keyboard-'+r+'-'+c+'" shape="rect" ' + calcCoordsSM(r, c, 0, v[r - 2][c - 1]) + ' href="#">';
				}
			}
			html += '</map>';
			return html;
		}

		function buildKeyboardEN() {
			var html = '<img id="keyboard_en" style="display: none" src="' + keyboard_imgpath + 'keyboard_en.jpg" usemap="#keyboard_en" border="0" />'
				+ '<map name=keyboard_en>'
				+ buildKeyboardBASE();
			
			var v = [
				 [ '\'v\': \'1\', \'shift\': \'!\'', '\'v\': \'2\', \'shift\': \'@\'', '\'v\': \'3\', \'shift\': \'№\'', '\'v\': \'4\', \'shift\': \';\'', '\'v\': \'5\', \'shift\': \'%\'', '\'v\': \'6\', \'shift\': \':\'', '\'v\': \'7\', \'shift\': \'?\'', '\'v\': \'8\', \'shift\': \'*\'', '\'v\': \'9\', \'shift\': \'(\'', '\'v\': \'0\', \'shift\': \')\'', '\'v\': \'-\', \'shift\': \'_\'', '\'v\': \'=\', \'shift\': \'+\'' ]
				,[ '', '\'v\': \'Q\'', '\'v\': \'W\'', '\'v\': \'E\'', '\'v\': \'R\'', '\'v\': \'T\'', '\'v\': \'Y\'', '\'v\': \'U\'', '\'v\': \'I\'', '\'v\': \'O\'', '\'v\': \'P\'', '' ]
				,[ '', '\'v\': \'A\'', '\'v\': \'S\'', '\'v\': \'D\'', '\'v\': \'F\'', '\'v\': \'G\'', '\'v\': \'H\'', '\'v\': \'J\'', '\'v\': \'K\'', '\'v\': \'L\'', '', '' ]
				,[ '', '\'v\': \'@\'', '\'v\': \'Z\'', '\'v\': \'X\'', '\'v\': \'C\'', '\'v\': \'V\'', '\'v\': \'B\'', '\'v\': \'N\'', '\'v\': \'M\'', '\'v\': \'.\'', '\'v\': \',\'', '' ]
			];

			for(var r=2;r<=5;r++) {
				for(var c=1;c<=12;c++) {
					if(!v[r - 2][c - 1]) continue;
					html += '<area id="keyboard-'+r+'-'+c+'" shape="rect" ' + calcCoordsSM(r, c, 0, v[r - 2][c - 1]) + ' href="#">';
				}
			}
			html += '</map>';
			return html;
		}

		function buildKeyboardNUM() {
			var html = '<img id="keyboard_num" style="display: none" src="' + keyboard_imgpath + 'keyboard_num.jpg" usemap="#keyboard_num" border="0" />'
				+ '<map name=keyboard_num>'
				+ buildKeyboardBASE(1);
			
			var v = [
				 [ '\'v\': \'1\'', '', '', '', '\'v\': \'2\'', '', '', '', '\'v\': \'3\'' ]
				,[ '\'v\': \'4\'', '', '', '', '\'v\': \'5\'', '', '', '', '\'v\': \'6\'' ]
				,[ '\'v\': \'7\'', '', '', '', '\'v\': \'8\'', '', '', '', '\'v\': \'9\'' ]
				,[ '\'v\': \'.\'', '', '', '', '\'v\': \'0\'' ]
			];

			for(var r=2;r<=5;r++) {
				for(var c=1;c<=12;c+=4) {
					if(!v[r - 2][c - 1]) continue;
					html += '<area id="keyboard-'+r+'-'+c+'" shape="rect" ' + calcCoordsSM(r, c, 4, v[r - 2][c - 1]) + ' href="#">';
				}
			}
			html += '</map>';
			return html;
		}

		function buildKeyboard() {
			if($('#keyboard-bk').attr('id')) return;
			
			var el = this;
			var html = '<div id="keyboard-inputbox-container"><input name="keyboard-inputbox" id="keyboard-inputbox" /></div>';
			
			html += buildKeyboardRU();
			html += buildKeyboardKZ();
			html += buildKeyboardEN();
			html += buildKeyboardNUM();
			
			$('body').append('<div id="keyboard-bk"></div>');
			$('body').append('<div id="keyboard">'+html+'</div>');
			
			$('area[id^="keyboard-"]').unbind("click").bind("click", function(){
				if($(this).attr('id')=='keyboard-left') {
					$('#keyboard-inputbox').MoveSelection('prev');
				} else if($(this).attr('id')=='keyboard-right') {
					$('#keyboard-inputbox').MoveSelection('next');
				} else if($(this).attr('id')=='keyboard-del') {
					$('#keyboard-inputbox').replaceSelection('', true);
				} else if($(this).attr('id')=='keyboard-lang') {
					 if(keyboard_currentLang == 'ru') {
						changeLang('kz');
						return;
					}
					if(keyboard_currentLang == 'kz') {
						changeLang('en');
						return;
					}
					if(keyboard_currentLang == 'en') {
						changeLang('ru');
						return;
					} 
				} else if($(this).attr('id')=='keyboard-shift') {
					keyboard_shiftIsEnabled = !keyboard_shiftIsEnabled;
					$('#keyboard_' + keyboard_currentLang).attr('src', keyboard_imgpath + 'keyboard_' + keyboard_currentLang + (keyboard_shiftIsEnabled ? '_shift' : '') + '.jpg');
				} else if($(this).attr('id')=='keyboard-space') {
					$('#keyboard-inputbox').replaceSelection(' ', true);
				} else if($(this).attr('id')=='keyboard-done') {
					var tagname = document.getElementById($(keyboard_currentElement).attr('id')).tagName.toLowerCase();
					if (tagname == 'div' || tagname == 'span') {
						$(keyboard_currentElement).html($('#keyboard-inputbox').val());
					} else {
						$(keyboard_currentElement).val($('#keyboard-inputbox').val());
					}

					if($(keyboard_currentElement).attr('keyboardcopyval')) {
						$($(keyboard_currentElement).attr('keyboardcopyval')).each(function(){
							var tagname = document.getElementById($(this).attr('id')).tagName.toLowerCase();
							if (tagname == 'div' || tagname == 'span') {
								$(this).html($('#keyboard-inputbox').val());
							} else {
								$(this).val($('#keyboard-inputbox').val());
							}
						});
					}

					keyboard_currentElement = null;
					$('#keyboard-bk').hide();
					$('#keyboard').hide();
				} else {
					var meta = $(this).metadata();
					var v = meta.v ? meta.v : 'null';
					var shift = meta.shift ? meta.shift : v;
					$('#keyboard-inputbox').replaceSelection(keyboard_shiftIsEnabled ? shift : v, true);
				}
			});
		}
	};
})(jQuery);

(function () {

    var fieldSelection = {

        getSelection: function () {

            var e = this.jquery ? this[0] : this;

            return (

            /* mozilla / dom 3.0 */
				('selectionStart' in e && function () {
				    var l = e.selectionEnd -
e.selectionStart;
				    return { start: e.selectionStart, end:
e.selectionEnd, length: l, text: e.value.substr(e.selectionStart, l)
				    };
				}) ||

            /* exploder */
				(document.selection && function () {

				    e.focus();

				    var r =
document.selection.createRange();
				    if (r == null) {
				        return { start: 0, end:
e.value.length, length: 0
				        }
				    }

				    var re = e.createTextRange();
				    var rc = re.duplicate();
				    re.moveToBookmark(r.getBookmark());
				    rc.setEndPoint('EndToStart', re);

				    return { start: rc.text.length, end: rc.
text.length + r.text.length, length: r.text.length, text: r.text
				    };
				}) ||

            /* browser not supported */
				function () {
				    return { start: 0, end: e.value.length,
				        length: 0
				    };
				}

			)();

        },

        replaceSelection: function () {

            var e = this.jquery ? this[0] : this;
            var text = arguments[0] || '';

            return (

            /* mozilla / dom 3.0 */
				('selectionStart' in e && function () {

				    var x = e.selectionStart;
				    if (text == "") {
				        if (e.selectionStart ==
e.selectionEnd)  // backspace operation
				        {
				            e.value = e.value.substr(0,
e.selectionStart - 1) + text + e.value.substr(e.selectionEnd,
e.value.length);
				            e.selectionStart = x - 1;
				            e.selectionEnd = x - 1;
				            e.focus();
				        }
				        else {  // replace selected text
				            e.value = e.value.substr(0,
e.selectionStart) + text + e.value.substr(e.selectionEnd, e.value.length);
				            e.selectionStart = x;
				            e.selectionEnd = x;
				            e.focus();
				        }
				    }

				    else {
				        e.value = e.value.substr(0,
e.selectionStart) + text + e.value.substr(e.selectionEnd, e.value.length);
				        e.selectionStart = x + 1;
				        e.selectionEnd = x + 1;
				        e.focus();
				    }
				    return this;
				}) ||

            /* exploder */
				(document.selection && function () {
				    e.focus();
				    var range =
document.selection.createRange();
				    if (text == "") {
				        if (range.text == "")
				            range.moveStart("character",
-1);
				        range.text = text;
				        range.select();
				    }
				    else {
				        range.text = text;
				        range.moveEnd("character",
text.length - 1);
				        range.select();

				    }
				    return this;
				}) ||

            /* browser not supported */
				function () {

				    if (text == "") {
				        var str = e.val();
				        e.val(str.substring(0, str.length -
1));
				    }
				    else
				        e.value += text;

				    return this;
				}

			)();

        },
        MoveSelection: function (direction) {

            var e = this.jquery ? this[0] : this;
            return (

            /* mozilla / dom 3.0 */
				('selectionStart' in e && function () {
				    if (direction == "next") {
				        var x = e.selectionStart;
				        e.selectionStart = x + 1;
				        e.selectionEnd = x + 1;
				        e.focus();
				    } else {
				        var x = e.selectionStart;
				        e.selectionStart = x - 1;
				        e.selectionEnd = x - 1;
				        e.focus();
				    }
				    return this;
				}) ||

            /* exploder */
				(document.selection && function () {
				    if (direction == "next") {
				        setCaretPosition(e,
getCaretPosition(e) + 1)
				    } else {
				        setCaretPosition(e,
getCaretPosition(e) - 1)
				    }
				    return this;
				}) ||

            /* browser not supported */
				function () {

				    if (text == "") {
				        var str = e.val();
				        e.val(str.substring(0, str.length -
1));
				    }
				    else
				        e.value += text;

				    return this;
				}

			)();

        }

    };

    jQuery.each(fieldSelection, function (i) { jQuery.fn[i] = this; });

})();

function getCaretPosition(ctrl) {

    var CaretPos = 0;
    // IE Support
    if (document.selection) {

        ctrl.focus();
        var Sel = document.selection.createRange();

        Sel.moveStart('character', -ctrl.value.length);

        CaretPos = Sel.text.length;
    }
    // Firefox support
    else if (ctrl.selectionStart || ctrl.selectionStart == '0')
        CaretPos = ctrl.selectionStart;
    return (CaretPos);
}

function setCaretPosition(ctrl, pos) {

    if (ctrl.setSelectionRange) {
        ctrl.focus();
        ctrl.setSelectionRange(pos, pos);
    }
    else if (ctrl.createTextRange) {
        var range = ctrl.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
}