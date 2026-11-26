UIProvider ={
  "grpId": "123",
  "id": "2889",
  "logo": "2889.gif",
  "receiptName": "",
  "sName": "A-System Group",
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
          "pageId": "30437",
          "title": "",
          "useOnline": "true",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Введите Ваш E-mail",
                  "footer": "",
                  "mask": "<!^.+${6,24}>",
                  "name": "account",
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
          "pageId": "30439",
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