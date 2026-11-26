adv_array.push(['index_page_2',[['flash2','kcell_comis/banner.swf', []]]]);// 		Главная страница. Правый маленький баннер
adv_array.push(['index_page_3',[['flash2','cmtkz/banner.swf', []]]]);// 			Главная страница. Правый маленький баннер
adv_array.push(['index_page_4',[['flash2','qw/banner.swf', [0]]]]);// 				Правый нижний угол
adv_array.push(['index_page_5',[['flash2','super_loto_new/banner.swf', []]]]);//	Левый нижний угол
//adv_array.push(['main_page',[['flash2','iskra/banner.swf', []]]]);// 				Вторая страница
//adv_array.push(['adv_cellular_3',[['flash2','gtm_banner.swf', [643,644]]]]);		Правый нижний для сотовых
adv_array.push(['enter_account',[['flash2','banner.swf', [643,644]]]]);// 	 		Верхний баннер для сотовых

addDatedAdvert(['index_page_4',[['flash2','nurotan/banner.swf', [0]]]],2011,12,8,2011,12,20);
addDatedAdvert(['index_page_5',[['flash2','super_loto/banner.swf', [0]]]],2011,12,15,2012,1,1);

function addDatedAdvert(param, startYear, startMonth, startDay, endYear, endMonth, endDay)
{
    var today = new Date().valueOf();
    var startDate = new Date().setFullYear(startYear,startMonth-1,startDay).valueOf();
    var endDate = new Date().setFullYear(endYear,endMonth-1,endDay).valueOf();
	
    if(today >= startDate && today < endDate)
    {
        adv_array.push(param);
			for(var i = 0; i<adv_array.length; i++)
				if(adv_array[i][0] == param[0])
					adv_array[i][1] = param[1];		
    }	
}

function getadvindex(name){
	var idx = 0;
	while(idx <= adv_array.length-1)
	{
		if (adv_array[idx][0] == name) {return idx};
		idx = idx + 1;
	}

	return -1;
}

function getcontent(name){
	var retval = '';
	var adv_counter = getcookie(name+'_adv_counter');

	var adv_array_index = getadvindex(name);
	var adv_array_length = 0;

	if ((adv_counter==false) || (isNaN(adv_counter))) {
		adv_counter = 0;
	}

	if (adv_array_index==-1) {
		return "";
	}

	adv_array_length = adv_array[adv_array_index][1].length;

	if (adv_array_length==0) {
		return "";
	}

	if (adv_counter>adv_array_length-1) {
		adv_counter = 0;
	}

	retval = adv_array[adv_array_index][1][adv_counter];

	adv_counter = 1 + (+adv_counter);
	document.cookie = name+'_adv_counter = '+adv_counter;

	return retval;

}