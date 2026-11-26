var authOnlineCellular = false;
var divisionOfPayments = false;

var extraPrv = [
['382',[22988,'Test','zkh.gif']],
['123',[28022,'Оплата за обучение','krediti.gif']],
['40',[28021,'Мой провайдер','tv.gif']],
['382',[23265,'Test2','zkh.gif']]
];

var fieldDescr = function(fname,mask,ml,tl,cp)
{
	this.fieldName = fname;
	this.fieldMask = mask;
	this.maxLength = ml;
	this.title = tl;
	this.caption = cp;
	this.enteredValues = new Array();
}

var fieldsDescr = new Array();

fieldsDescr["22988"] = new Array();
fieldsDescr["22988"].push(new fieldDescr('account','8(\\d{3})\\d{3}-\\d{2}-\\d{2}',5,'Номер счета',''));
fieldsDescr["28022"] = new Array();
fieldsDescr["28022"].push(new fieldDescr('account','\\d{6}',6,'Номер зачетной книжки',''));
fieldsDescr["28021"] = new Array();
fieldsDescr["28021"].push(new fieldDescr('account','\\d{5}',5,'Введите Ваш id',''));
fieldsDescr["23265"] = new Array();
fieldsDescr["23265"].push(new fieldDescr('account','8(\\d{3})\\d{3}-\\d{2}-\\d{2}',10,'Account',''));
