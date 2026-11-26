var adv4 = [];

var adv5 = [];

var oHolidays = {
    "1.1"   : { name: "Новый год", img: "" },
    "7.1"   : { name: "Православное Рождество", img: "./img/ui/holidays/7_1.png" },
    "25.1"  : { name: "День студентов (Татьянин день)", img: "" },
    "14.2"  : { name: "День святого Валентина (День всех влюбленных)", img: "" },
    "23.2"  : { name: "День защитника Отечества", img: "" },
    "8.3"   : { name: "Международный женский день", img: "" },
    "1.4"   : { name: "День смеха / День дурака", img: "" },
    "12.4"  : { name: "Всемирный день авиации и космонавтики", img: "" },
    "1.5"   : { name: "День весны и труда", img: "" },
    "7.5"   : { name: "День радио", img: "" },
    "9.5"   : { name: "День Победы", img: "" },
    "1.6"   : { name: "Всемирный день защиты детей", img: "" },
    "6.6"   : { name: "Пушкинский день России", img: "" },
    "12.6"  : { name: "День России", img: "" },
    "27.6"  : { name: "День молодежи России", img: "" },
    "3.7"   : { name: "День ГИБДД", img: "" },
    "9.7"   : { name: "День российской почты", img: "" },
    "2.8"   : { name: "День Воздушно-десантных войск", img: "" },
    "12.8"  : { name: "День Военно-воздушных сил", img: "" },
    "13.8"  : { name: "День строителя", img: "" },
    "20.8"  : { name: "День Воздушного флота России", img: "" },
    "27.8"  : { name: "День кино России", img: "" },
    "1.9"   : { name: "День знаний", img: "" },
    "30.9"  : { name: "День Интернета России", img: "" },
    "5.10"  : { name: "День учителя", img: "" },
    "29.10" : { name: "День автомобилиста", img: "" },
    "4.11"  : { name: "День народного единства", img: "" },
    "10.11" : { name: "День милиции", img: "" },
    "12.12" : { name: "День Конституции Российской Федерации", img: "" },
    "20.12" : { name: "День ФСБ", img: "" }
}

function getBtmContent(sContentPlace) {
    var oHoliday = null;
    var flag = true;
    var oDate = new Date();
    var sDate = oDate.getDate().toString(10) + "." + (oDate.getMonth() + 1).toString(10);
    var oContentPlace = document.getElementById(sContentPlace);
    
    if (adv5.length > 0) {
        adv_array.push(adv5);
    }
    
    if (oContentPlace == null || oContentPlace == "undefined") {
        return;
    }
    if (oHolidays !== null && oHolidays !== "undefined") {
        if (oHolidays.hasOwnProperty(sDate)) {
            oHoliday = oHolidays[sDate];
            if (oHoliday !== null && oHoliday !== "undefined" &&
                oHoliday.img !== null && oHoliday.img !== "undefined" &&
                oHoliday.img.toString().length > 0) {
                oContentPlace.innerHTML = '<img alt="" src="' + oHoliday.img + '" />';
                return;    
            }    
        }
    }
    if (adv4.length > 0) {
        for (var i = 0; i < adv_array.length; i++)
            if (adv_array[i][0] == 'index_page_4')
                flag = false;
                
        if (flag)
            adv_array.push(adv4);
    }
}