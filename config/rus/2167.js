UIProvider ={
  "grpId": "382",
  "id": "2167",
  "logo": "2167.gif",
  "receiptName": "",
  "sName": "МАЭК - Казатомпром",
  "small_logo": "",
  "tag": "visible",
  "__objects": [
    {
      "__type": "constParams"
    },
    {
      "__type": "pages",
      "__objects": [
        {
          "pageId": "30995",
          "title": "",
          "useOnline": "false",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Введите номер лицевого счета или номер договора",
                  "footer": "",
                  "mask": "<!^\\d+${1,20}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d+$",
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
          "pageId": "30996",
          "title": "",
          "useOnline": "false",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Показания по электроэнергии день",
                  "footer": "",
                  "mask": "<!^\\d*${1,10}>",
                  "name": "_extra_ev_account1",
                  "nobr": "false",
                  "regexp": "^\\d{1,10}$",
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
          "pageId": "30997",
          "title": "",
          "useOnline": "false",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Показания по электроэнергии ночь",
                  "footer": "",
                  "mask": "<!^\\d*${1,10}>",
                  "name": "_extra_ev_account2",
                  "nobr": "false",
                  "regexp": "^\\d{1,10}$",
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
          "pageId": "30998",
          "title": "",
          "useOnline": "false",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Показания по электроэнергии вечер",
                  "footer": "",
                  "mask": "<!^\\d*${1,10}>",
                  "name": "_extra_ev_account3",
                  "nobr": "false",
                  "regexp": "^\\d{1,10}$",
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
          "pageId": "30999",
          "title": "",
          "useOnline": "false",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Показания по питьевой воде",
                  "footer": "",
                  "mask": "<!^.+${1,15}>",
                  "name": "_extra_ev_account4",
                  "nobr": "false",
                  "regexp": "^.+$",
                  "strip": "True",
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
          "pageId": "31000",
          "title": "",
          "useOnline": "false",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Показания по горячей воде",
                  "footer": "",
                  "mask": "<!^.+${1,15}>",
                  "name": "_extra_ev_account5",
                  "nobr": "false",
                  "regexp": "^.+$",
                  "strip": "True",
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
          "pageId": "31001",
          "title": "",
          "useOnline": "true",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Показания по тех. воде",
                  "footer": "",
                  "mask": "<!^.+${1,15}>",
                  "name": "_extra_ev_account6",
                  "nobr": "false",
                  "regexp": "^.+$",
                  "strip": "True",
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
          "pageId": "31002",
          "title": "",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "disp_name": "disp1",
                  "disp_type": "extra",
                  "header": "Проверте Ваши данные:",
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