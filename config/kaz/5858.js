UIProvider ={
  "grpId": "123",
  "id": "5858",
  "logo": "0.gif",
  "receiptName": "",
  "sName": "31 канал",
  "small_logo": "",
  "tag": "change, visible",
  "__objects": [
    {
      "__type": "constParams"
    },
    {
      "__type": "pages",
      "__objects": [
        {
          "pageId": "30510",
          "title": "",
          "useOnline": "",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Выбирете дату выхода обнвления",
                  "footer": "",
                  "mask": "<!^.*${0,255}>",
                  "name": "_extra_ev_account2",
                  "nobr": "false",
                  "regexp": "^.*$",
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
          "pageId": "30511",
          "title": "",
          "useOnline": "",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Введите ФИО",
                  "footer": "",
                  "mask": "<!^.+${5,255}>",
                  "name": "_extra_ev_account1",
                  "nobr": "false",
                  "regexp": "^.{5,255}$",
                  "strip": "True",
                  "type": "text_input"
                },
                {
                  "layout": "ALCR",
                  "type": "keyboard"
                }
              ]
            }
          ]
        },
        {
          "pageId": "30512",
          "title": "",
          "useOnline": "",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Введите ваш номер телефона",
                  "footer": "",
                  "mask": "8<!^\\d+${3}><!^\\d+${7}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{10}$",
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
          "pageId": "30513",
          "title": "",
          "useOnline": "true",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Введите текст объявления",
                  "footer": "",
                  "mask": "<!^.+${5,255}>",
                  "name": "_extra_ev_account3",
                  "nobr": "false",
                  "regexp": "^.{5,255}$",
                  "strip": "True",
                  "type": "text_input"
                },
                {
                  "layout": "ALR",
                  "type": "keyboard"
                }
              ]
            }
          ]
        },
        {
          "pageId": "30607",
          "title": "",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "disp_name": "disp1",
                  "disp_type": "fixedsum",
                  "header": "",
                  "mask": "<!^.+${1,255}>",
                  "name": "data",
                  "nobr": "false",
                  "regexp": "^.+$",
                  "strip": "false",
                  "type": "disp_input",
                  "visible": "true"
                },
                {
                  "disp_name": "disp2",
                  "disp_type": "extra",
                  "header": "",
                  "mask": "<!^.+${1,255}>",
                  "name": "data2",
                  "nobr": "false",
                  "regexp": "^.+$",
                  "strip": "false",
                  "type": "disp_input",
                  "visible": "true"
                },
                {
                  "disp_name": "disp3",
                  "disp_type": "extra",
                  "header": "",
                  "mask": "<!^.+${1,255}>",
                  "name": "data3",
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