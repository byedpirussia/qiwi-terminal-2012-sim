UIProvider ={
  "grpId": "67501",
  "id": "675002",
  "logo": "675.gif",
  "receiptName": "",
  "sName": "Бюро находок",
  "small_logo": "",
  "tag": "visible,change",
  "__objects": [
    {
      "__type": "constParams",
      "__objects":[
					{"__type":"param","name":"real_prv_id","value":"675"},
					{"__type":"param","name":"_extra_ev_account1","value":"2"}, // Тип услуги (находка=1/утеря=2)
					]
    },
    {
      "__type": "pages",
      "__objects": [
		{
          "pageId": "9999123001",
          "title": "Данные заявителя",
          "useOnline": "false",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Данные заявителя: Введите номер телефона",
                  "footer": "Внимание! Номер телефона вводится без <8>, в формате: (ХХХ) ХХХ-ХХ-ХХ",
                  "mask": "8(<!^\\d+${3}>)<!^\\d+${7}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^(\\d{3})\\d{7}$",
                  "strip": "True",
                  "type": "text_input"
                },
                {
                  "layout": "DG",
                  "type": "keyboard"
                }
              ]
            }
          ]
        },
		{
          "pageId": "9999123002",
          "title": "Данные заявителя",
          "useOnline": "false",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Данные заявителя: ФИО заявителя",
                  "footer": "Введите ваши ФИО, например: Иванов Иван Иванович",
                  "mask": "<!^.+${5,60}>",
                  "name": "_extra_ev_account2",
                  "nobr": "false",
                  "regexp": "^.+ .+ .+$",
                  "strip": "True",
                  "type": "text_input"
                },
                {
                  "layout": "AL",
                  "type": "keyboard"
                }
              ]
            }
          ]
        },		
		{
          "pageId": "9999123003",
          "title": "Данные заявителя",
          "useOnline": "false",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Данные заявителя: Регион",
                  "footer": "Введите регион заявителя, например: алматы",
                  "mask": "<!^.+${2,20}>",
                  "name": "_extra_ev_account3",
                  "nobr": "false",
                  "regexp": "^.+$",
                  "strip": "True",
                  "type": "text_input"
                },
                {
                  "layout": "AL",
                  "type": "keyboard"
                }
              ]
            }
          ]
        },		
        {
          "pageId": "9999123004",
          "title": "Данные заявителя",
          "useOnline": "false",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Данные заявителя: Введите Ваш Email",
                  "footer": "На указанный вами Email будет отправлена информация о заказе.",
                  "mask": "<!^.+${6,24}>",
                  "name": "_extra_ev_account5",
                  "nobr": "false",
                  "regexp": "^([a-zA-Z0-9_-]|\\.)+@[a-zA-Z0-9_-]+\\.[a-z]{2,6}$",
                  "strip": "True",
                  "type": "text_input"
                },
                {
                  "layout": "AL",
                  "type": "keyboard"
                }
              ]
            }
          ]
        },
		{
          "pageId": "9999123005",
          "title": "Данные о находке/утере",
          "useOnline": "false",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Данные о находке/утере: ФИО",
                  "footer": "Введите ФИО владельца документа, например: Иванов Иван Иванович",
                  "mask": "<!^.+${5,60}>",
                  "name": "_extra_ev_account6",
                  "nobr": "false",
                  "regexp": "^.+ .+ .+$",
                  "strip": "True",
                  "type": "text_input"
                },
                {
                  "layout": "AL",
                  "type": "keyboard"
                }
              ]
            }
          ]
        },		
        {
          "pageId": "9999123006",
          "title": "Данные о находке/утере",
          "useOnline": "false",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Данные о находке/утере: Дата рождения",
                  "footer": "Введите дату рождения владельца документа в формате ДД.ММ.ГГГГ",
                  "mask": "<!^\\d+${2}>.<!^\\d+${2}>.<!^\\d+${4}>",
                  "name": "_extra_ev_account7",
                  "nobr": "false",
                  "regexp": "^d+{8}$",
                  "strip": "true",
                  "type": "text_input"
                },
                {
                  "layout": "DGD",
                  "type": "keyboard"
                }
              ]
            }
          ]
        },
		{
          "pageId": "9999123007",
          "title": "Данные о находке/утере",
          "useOnline": "false",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Данные о находке/утере: Вид документа",
                  "footer": "Введите вид документа, например: водительские права",
                  "mask": "<!^.+${3,20}>",
                  "name": "_extra_ev_account8",
                  "nobr": "false",
                  "regexp": "^.+$",
                  "strip": "True",
                  "type": "text_input"
                },
                {
                  "layout": "AL",
                  "type": "keyboard"
                }
              ]
            }
          ]
        },		
		{
          "pageId": "9999123008",
          "title": "Данные о находке/утере",
          "useOnline": "false",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Данные о находке/утере: Номер документа",
                  "footer": "Введите номер документа",
                  "mask": "<!^.+${1,20}>",
                  "name": "_extra_ev_account9",
                  "nobr": "false",
                  "regexp": "^.+$",
                  "strip": "True",
                  "type": "text_input"
                },
                {
                  "layout": "AL",
                  "type": "keyboard"
                }
              ]
            }
          ]
        },		
        {
          "pageId": "9999123009",
          "title": "Данные о находке/утере",
          "useOnline": "false",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Данные о находке/утере: Дата выдачи",
                  "footer": "Введите дату выдачи документа",
                  "mask": "<!^\\d+${2}>.<!^\\d+${2}>.<!^\\d+${4}>",
                  "name": "_extra_ev_account10",
                  "nobr": "false",
                  "regexp": "^d+{8}$",
                  "strip": "true",
                  "type": "text_input"
                },
                {
                  "layout": "ALMC",
                  "type": "keyboard"
                }
              ]
            }
          ]
        },
		{
          "pageId": "9999123010",
          "title": "Данные о находке/утере",
          "useOnline": "false",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Данные о находке/утере: Кем выдан",
                  "footer": "Введите название организации выдавшей документ",
                  "mask": "<!^.+${1,30}>",
                  "name": "_extra_ev_account11",
                  "nobr": "false",
                  "regexp": "^.+$",
                  "strip": "True",
                  "type": "text_input"
                },
                {
                  "layout": "AL",
                  "type": "keyboard"
                }
              ]
            }
          ]
        },		
		{
          "pageId": "9999123011",
          "title": "Данные о находке/утере",
          "useOnline": "true",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Данные о находке/утере: Дополнительное описание документа",
                  "footer": "Введите дополнительную информацию о документе (опционально)",
                  "mask": "<!^.+${0,50}>",
                  "name": "_extra_ev_account12",
                  "nobr": "false",
                  "regexp": "^.*$",
                  "strip": "True",
                  "type": "text_input"
                },
                {
                  "layout": "AL",
                  "type": "keyboard"
                }
              ]
            }
          ]
        },
		{
          "pageId": "9999123012",
          "title": "Проверка данных",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "disp_name": "disp1",
                  "disp_type": "fixedsum",
                  "header": "Сумма к оплате",
                  "mask": "<!^.+${1,255}>",
                  "name": "data",
                  "nobr": "false",
                  "regexp": "^.+$",
                  "strip": "false",
                  "type": "disp_input",
                  "visible": "true"
                }
              ]
            }
          ]
        }

      ]
    }
  ]
}