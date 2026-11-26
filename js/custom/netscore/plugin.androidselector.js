(function ($) {
    //    $.fn.AndroidSelector = function (items, returnItemIdTo, returnItemValueTo, triggerafter) {
    //        $(this).unbind('click').click(function () {
    //            var container_height = items.length * 90 > 900 ? 900 : items.length * 90;
    //            $('body').append('<div id="AndroidSelectorBackground" style="display: none; width:1280px; height:1024px; background: #000; position:absolute; top:0px; z-index: 0; filter:alpha(opacity=50);-moz-opacity:0.5; opacity: 0.5;"></div>');
    //            $('body').append('<div id="AndroidSelectorContainer" style="display:none; overflow: scroll; border:5px solid #0f0f10; width:1000px; height:' + container_height + 'px; background:#fff; position:absolute; left:50%; top:50%; margin-top:-' + (container_height / 2) + 'px; margin-left:-500px; z-index: 1;"></div>');

    //            $.each(items, function (index, item) {
    //                var style = 'border-top: 2px solid #ffffff; border-bottom: 1px solid #9F9F9F; background: #F3F3F3; padding: 15px';
    //                var html = '<div id="AndroidSelectorItem' + index + '" style="' + style + '" itemid="' + item.id + '" returnItemIdTo="' + returnItemIdTo + '" returnItemValueTo="' + returnItemValueTo + '" triggerafter="' + triggerafter + '">' + item.name + '</div>';
    //                $('#AndroidSelectorContainer').append(html)
    //                $('#AndroidSelectorItem' + index).click(function () {
    //                    var id = $(this).attr('itemid');
    //                    var value = $(this).html();
    //                    if (id == 0) value = '';

    //                    var returnItemIdTo = $(this).attr('returnItemIdTo');
    //                    var returnItemValueTo = $(this).attr('returnItemValueTo');
    //                    var triggerafter = $(this).attr('triggerafter');

    //                    //alert(id+'\n'+value+'\n'+returnItemIdTo+'\n'+returnItemValueTo)
    //                    //alert($(returnItemValueTo).attr('id') + '\n' + this.tagName);
    //                    if (returnItemIdTo && $(returnItemIdTo).length != 0) {
    //                        var tagname = document.getElementById($(returnItemIdTo).attr('id')).tagName.toLowerCase();
    //                        if (tagname == 'div' || tagname == 'span') {
    //                            $(returnItemIdTo).html(id);
    //                        } else {
    //                            $(returnItemIdTo).val(id);
    //                        }
    //                    }

    //                    if (returnItemValueTo && $(returnItemValueTo).length != 0) {
    //                        var tagname = document.getElementById($(returnItemValueTo).attr('id')).tagName.toLowerCase();
    //                        if (tagname == 'div' || tagname == 'span') {
    //                            $(returnItemValueTo).html(value);
    //                        } else {
    //                            $(returnItemValueTo).val(value);
    //                        }
    //                    }

    //                    if (triggerafter) eval(triggerafter);

    //                    $('#AndroidSelectorBackground, #AndroidSelectorContainer').remove();
    //                });
    //            });
    //            $('#AndroidSelectorBackground, #AndroidSelectorContainer').show();
    //        });
    //    };


    $.fn.RadioSelector = function (items, returnItemIdTo, controlName, triggerafter) {
        var td_container = "";
        controlName = controlName.replace("#", "");
        $.each(items, function (index, item) {
            var selected = "";
            if (item.selected) {
                selected = " selected "
            }
            td_container = td_container + '<td><input style="position:absolute; z-index:-10;"   type="radio" name="' + controlName + '" value="' + item.id + '" id="RadioSelector' + controlName + index + '" />' +
                    '<label onclick=" $(\'.' + controlName + '\').removeClass(\'selected\'); $(this).addClass(\'selected\'); $(\'' + returnItemIdTo + '\').val(\'' + item.id + '\'); " class="rate_button ' + controlName + selected + '" for="RadioSelector' + controlName + index + '">' +
                        '<div class="check-sign"></div>' +
                        '<span class="rate-text">' + item.name + '</span>' +
                        '<div class="right"></div>' +
                    '</label></td>';
        });
        var table_container = "";
        table_container = table_container + '<table style="width: 100px;" ><tr>' + td_container + '</tr></table>';
        $(this).append(table_container);
    };


    $.fn.RadioBigSelector = function (items, returnItemIdTo, controlName, triggerafter) {
        var td_container = "";
        controlName = controlName.replace("#", "");
        $.each(items, function (index, item) {
            var selected_big = "";
            if (item.selected_big) {
                selected_big = " selected_big "
            }
            td_container = td_container +
                '<td><input style="position:absolute; z-index:-10;"   type="radio" name="' + controlName + '" value="' + item.id + '" id="RadioSelector' + controlName + index + '" />' +
                    '<label onclick=" $(\'.' + controlName + '\').removeClass(\'selected_big\'); $(this).addClass(\'selected_big\'); $(\'' + returnItemIdTo + '\').val(\'' + item.id + '\'); " class="rate_big_button ' + controlName + selected_big + '" for="RadioSelector' + controlName + index + '">' +
                        '<div class="check-sign-big" style="left:20px;"></div>' +
                        '<span class="rate-big-text" >' + item.name + '</span>' +
                        '<div class="right"></div>' +
                    '</label>' +
                '</td>';
        });
        var table_container = "";
        table_container = table_container + '<table style="width: 545px; " ><tr>' + td_container + '</tr></table>';
        $(this).append(table_container);

    };

    $.fn.LocationSelector = function (items, returnItemIdTo, controlName, triggerafter) {
        var div_container = "";
        var table_container = "";
        for (var i = 0; i < items.length; i++) {
            if (items[i].type_city == true) {
                div_container = div_container +
                    '<div style="padding: 10px 0px 10px 0px;" class="location"  onclick="selectCity(\'' + items[i].id + '\',\'' + items[i].name + '\'); $(\'' + returnItemIdTo + '\').val(\'' + items[i].id + '\'); goto(\'index\'); " >' +
                        '<span class="location-text" >' + items[i].name + '</span>' +
                        '<div class="right"></div>' +
                    '</div>';
            }
        }
        table_container = table_container + '<table><tr><td>' + div_container + '</td></tr></table>';
        $(this).append(table_container);
    };


    $.fn.BuildListCityForRegionId = function (region_city_id) {

        var items = save_items;
        var returnItemIdTo = save_returnItemIdTo;
        var controlName = save_controlName;
        var triggerafter = save_triggerafter;

        var left_column = "";
        var right_column = "";
        var center_column = "";
        var back_button = ""
        var index_region = 0;
        var result_items = [];
        var row_number = 9;
        var table_container = "";

        for (var i = 0; i < items.length; i++) {
            if (items[i].region_id == region_city_id) {
                var new_items = {}
                new_items.id = items[i].id;
                new_items.name = items[i].name;
                result_items[index_region] = new_items;
                if (index_region / row_number >= 0 && index_region / row_number < 1) {

                    left_column = left_column +
                        '<div  class="region_city" style="padding: 7px 0px 7px 0px;"   onclick="selectCity(\'' + result_items[index_region].id + '\',\'' + result_items[index_region].name + '\'); $(\'' + returnItemIdTo + '\').val(\'' + result_items[index_region].id + '\'); goto(\'index\');  " >' +
                            '<div class="region-text" >' + result_items[index_region].name + '</div>' +
                            '<div class="right"></div>' +
                        '</div>';
                }
                if (index_region / row_number >= 1 && index_region / row_number < 2) {
                    center_column = center_column +
                        '<div  class="region_city" style="padding: 7px 0px 7px 0px;"  onclick="selectCity(\'' + result_items[index_region].id + '\',\'' + result_items[index_region].name + '\'); $(\'' + returnItemIdTo + '\').val(\'' + result_items[index_region].id + '\'); goto(\'index\');">' +
                            '<div class="region-text" >' + result_items[index_region].name + '</div>' +
                            '<div class="right"></div>' +
                        '</div>';
                }
                if (index_region / row_number >= 2 && index_region / row_number < 3) {
                    right_column = right_column +
                        '<div  class="region_city" style="padding: 7px 0px 7px 0px;"  onclick="selectCity(\'' + result_items[index_region].id + '\',\'' + result_items[index_region].name + '\'); $(\'' + returnItemIdTo + '\').val(\'' + result_items[index_region].id + '\');  goto(\'index\');  " >' +
                            '<div class="region-text" >' + result_items[index_region].name + '</div>' +
                            '<div class="right"></div>' +
                        '</div>';
                }
                index_region++;
            }
        }

        right_column = right_column + '<div class="region_city"  style="position:absolute;  top:905px; left:875px;"   onclick="goto(\'location\'); " >' +

                                        '<div class="region-back-text" >  Вернуться назад к списку областей </div>' +
                                        '<div class="right"></div>' +
                                        '<div class="back"></div>' +
                                        '</div>';



        table_container = table_container +
            '<table><tr style="vertical-align:top;"  ><td style="padding-left:50px; width:340px; ">' + left_column + '</td><td style=" width:340px;"  >' + center_column + '</td><td style=" width:340px;" >' + right_column + '</td></tr></table>';
        $(this).append(table_container);

    };

    var save_items;
    var save_returnItemIdTo;
    var save_controlName;
    var save_triggerafter;

    $.fn.RegionCitySelector = function (items, returnItemIdTo, controlName, triggerafter) {
        save_items = items;
        save_returnItemIdTo = returnItemIdTo;
        save_controlName = controlName;
        save_triggerafter = triggerafter;
    };



    $.fn.RegionSelector = function (items, returnItemIdTo, controlName, triggerafter) {
        var left_column = "";
        var right_column = "";
        var index_region = 0;
        var result_items = [];
        var row_number = 8;
        var table_container = "";
        for (var i = 0; i < items.length; i++) {
            if (items[i].type_region == true) {
                var new_items = {}
                new_items.id = items[i].id;
                new_items.name = items[i].name;
                new_items.type_region = items[i].type_region;
                result_items[index_region] = new_items;
                if (index_region / row_number >= 0 && index_region / row_number < 1) {
                    left_column = left_column +
                        '<div  class="region" style="padding: 5px 0px 6px 0px;"   onclick=" $(\'#locationRegionCity\').BuildListCityForRegionId(' + result_items[index_region].id + '); $(\'#locationCityAndRegion\').css(\'display\', \'none\');  $(\'#locationRegionCity\').css(\'display\', \'block\'); " >' +
                            '<div class="region-text" >' + result_items[index_region].name + '</div>' +
                            '<div class="right"></div>' +
                        '</div>';
                }
                if (index_region / row_number >= 1 && index_region / row_number < 2) {
                    right_column = right_column +
                        '<div  class="region" style="padding: 5px 0px 6px 0px;"    onclick=" $(\'#locationRegionCity\').BuildListCityForRegionId(' + result_items[index_region].id + '); $(\'#locationCityAndRegion\').css(\'display\', \'none\'); $(\'#locationRegionCity\').css(\'display\', \'block\');" >' +
                            '<div class="region-text" >' + result_items[index_region].name + '</div>' +
                            '<div class="right"></div>' +
                        '</div>';
                }
                index_region++;
            }
        }
        table_container = table_container +
            '<table><tr style="vertical-align:top;"><td>' + left_column + '</td><td>' + right_column + '</td></tr></table>';
        $(this).append(table_container);
    };



    $.fn.LanguageSelector = function (items, returnItemIdTo, control_name, triggerafter) {
        var td_container = "";
        control_name = control_name.replace("#", "");
        $.each(items, function (index, item) {
            var selected_language = "";
            if (item.selected_language) {
                selected_language = " selected_language "
            }
            td_container = td_container +
                '<td style="width: 113px;"><input style="position:absolute; z-index:-10;"   type="radio" name="' + control_name + '" value="' + item.id + '" id="LanguageSelector' + control_name + index + '" />' +
                    '<label onclick=" $(\'.' + control_name + '\').removeClass(\'selected_language\'); $(this).addClass(\'selected_language\'); $(\'' + returnItemIdTo + '\').val(\'' + item.id + '\'); chnagesystemlang();" class="language ' + control_name + selected_language + '" for="LanguageSelector' + control_name + index + '">' +
                        '<span class="language-text">' + item.name + '</span>' +
                    '</label>' +
                '</td>';
        });
        var table_container = "";
        table_container = table_container + '<table style=" width: 260px;"><tr>' + td_container + '</tr></table>';
        $(this).append(table_container);
    };


    $.fn.JobAreaSelector = function (items, returnItemIdTo, controlName, triggerafter) {
        var left_column = "";
        var right_column = "";
        var center_column = "";
        var index_region = 0;
        var result_items = [];
        var row_number = 10;
        var table_container = "";

        for (var i = 0; i < items.length; i++) {
            var new_items = {}
            new_items.id = items[i].id;
            new_items.name = items[i].name;
            result_items[index_region] = new_items;
            if (index_region / row_number >= 0 && index_region / row_number < 1) {
                left_column = left_column +
                    '<div  class="job_area" style="padding: 7px 0px 7px 0px;"   onclick="selectJobArea(\'' + result_items[index_region].id + '\',\'' + result_items[index_region].name + '\'); $(\'' + returnItemIdTo + '\').val(\'' + result_items[index_region].id + '\');   " >' +
                        '<div class="job_area_text" >' + result_items[index_region].name + '</div>' +
                    '</div>';
            }
            if (index_region / row_number >= 1 && index_region / row_number < 2) {
                center_column = center_column +
                    '<div  class="job_area" style="padding: 7px 0px 7px 0px;"   onclick="selectJobArea(\'' + result_items[index_region].id + '\',\'' + result_items[index_region].name + '\'); $(\'' + returnItemIdTo + '\').val(\'' + result_items[index_region].id + '\');   " >' +
                        '<div class="job_area_text" >' + result_items[index_region].name + '</div>' +
                    '</div>';
            }
            if (index_region / row_number >= 2 && index_region / row_number < 3) {
                right_column = right_column +
                    '<div  class="job_area" style="padding: 7px 0px 7px 0px;"   onclick="selectJobArea(\'' + result_items[index_region].id + '\',\'' + result_items[index_region].name + '\'); $(\'' + returnItemIdTo + '\').val(\'' + result_items[index_region].id + '\');   " >' +
                        '<div class="job_area_text" >' + result_items[index_region].name + '</div>' +
                    '</div>';
            }
            index_region++;
        }
        table_container = table_container +
            '<table style="margin-top:40px;"><tr style="vertical-align:top;"  ><td style="padding-left:5px; width:420px; ">' + left_column + '</td><td style=" width:420px;"  >' + center_column + '</td><td style=" width:420px;" >' + right_column + '</td></tr></table>';
        $(this).append(table_container);

    };

    $.fn.JobLevelSelector = function (items, returnItemIdTo, controlName, triggerafter) {
        var div_container = "";
        var table_container = "";
        for (var i = 0; i < items.length; i++) {
            div_container = div_container +
                '<div  class="job_area" style="padding: 7px 0px 7px 0px;"   onclick="selectJobLevel(\'' + items[i].id + '\',\'' + items[i].name + '\'); $(\'' + returnItemIdTo + '\').val(\'' + items[i].id + '\');   " >' +
                    '<div class="job_area_text" >' + items[i].name + '</div>' +
                '</div>';
        }
        table_container = table_container + '<table style="margin-top: 35px; margin-left:40px;"><tr><td>' + div_container + '</td></tr></table>';
        $(this).append(table_container);
    };

    // доделать 
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

    $.fn.VacancyLanguageSelector = function (items, returnItemIdTo, controlName, triggerafter) {
        var td_container = "";
        controlName = controlName.replace("#", "");
      

        for (var index = 0; index < items.length; index++) {

         
            td_container = td_container +
                '<td><input class="check_box_class" style="position:absolute; z-index: -10; "   type="checkbox" name="check' + controlName + index + '" value="' + items[index].id + '" id="CheckBoxSelector' + controlName + index + '" />' +
                        '<label   onclick="' +
                            ' $(this).toggleClass(\'selected_big\'); ' +
                            ' " class="rate_big_button ' + controlName  + '" for="CheckBoxSelector' + controlName + index + '">' +
                            '<div class="check-windows"></div>' +
                            '<div class="check-language-sign-big" style="left:20px;"></div>' +
                            '<span class="rate-big-text" >' + items[index].name + '</span>' +
                            '<div class="right"></div>' +
                        '</label>' +
                '</td>';

           

        }


        var table_container = "";
        table_container = table_container + '<table style="width: 545px; " ><tr>' + td_container + '<td><td></tr></table>';
        $(this).append(table_container);
    };

})(jQuery);

function selectCity(id, name) {
    $("#location-id").val(id);
    $("#location-text").html(name);
    $('#citySelectionDiv').css('display', 'none');
}

function selectJobArea(id, name) {
    $("#area-id").val(id);
    $("#area-text").html(name);
    $('#job_area_background').css('display', 'none');
}

function selectJobLevel(id, name) {
    $("#level-id").val(id);
    $("#position-level-text").html(name);
    $('#job_level_background').css('display', 'none');
    $('#job_level_phone').css('display', 'none');
    $('#goto-prev').css('display', 'block');
    $('#goto-result').css('display', 'block');
}
 
