UIProvider ={
  "grpId": "382",
  "id": "4997",
  "logo": "4997.gif",
  "receiptName": "",
  "sName": "Караганды Жылу Сбыт- за электроэнергию",
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
          "pageId": "30361",
          "title": "",
          "useOnline": "true",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Абонент №",
                  "footer": "",
                  "mask": "<!^\\d+${6,7}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{6,7}$",
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
          "pageId": "30008",
          "title": "",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "disp_name": "disp2",
                  "disp_type": "extra",
                  "header": "Проверте Ваши данные:",
                  "mask": "<!^.+${1,255}>",
                  "name": "data2",
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