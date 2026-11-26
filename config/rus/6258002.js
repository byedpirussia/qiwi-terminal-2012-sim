UIProvider ={
  "grpId": "625801",
  "id": "6258002",
  "logo": "6258.gif",
  "receiptName": "",
  "sName": "Eurahost",
  "small_logo": "",
  "tag": "visible",
    "__objects": [
    {
      "__type": "constParams",
      "__objects":[{"__type":"param","name":"real_prv_id","value":"6258"},
                   {"__type":"param","name":"_extra_ev_account1","value":"1"}, // Тип услуги
				   {"__type":"param","name":"_extra_ev_account2","value":"128"}] // Объем
    },
    {
      "__type": "pages",
      "__objects": [
        {
          "pageId": "6258000",
          "title": "",
          "useOnline": "false",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Введите период услуги",
                  "footer": "Только для услуг хостинга. В месяцах (от 1 до 12).",
                  "mask": "<!^\\d+${1,2}>",
                  "name": "_extra_ev_account3",
                  "nobr": "false",
                  "regexp": "^[1-9]{1}[0-9]{0,1}$",
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
          "pageId": "6258001",
          "title": "",
          "useOnline": "false",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Введите ваш логин",
                  "footer": "Вы должны быть зарегистрированы на сайте eurahost.kz",
                  "mask": "<!^.+${1,20}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^[a-zA-Z0-9_]+$",
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
          "pageId": "6258002",
          "title": "",
          "useOnline": "false",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Введите ваш контактный номер телефона",
                  "footer": "Внимание! Номер телефона вводится без <8>, в формате: (ХХХ) ХХХ-ХХ-ХХ",
                  "mask": "8(<!^\\d+${3}>)<!^\\d+${7}>",
                  "name": "_extra_ev_account4",
                  "nobr": "false",
                  "regexp": "^\\d{10}",
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
          "pageId": "6258003",
          "title": "",
          "useOnline": "true",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Введите Ваш Email",
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
        }
      ]
    }
  ]
}