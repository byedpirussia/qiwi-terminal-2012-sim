UIProvider ={
  "grpId": "123",
  "id": "5685",
  "logo": "5685.gif",
  "receiptName": "",
  "sName": "Smart-photo",
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
          "pageId": "5685001",
          "title": "",
          "useOnline": "true",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Введите Ваш логин в системе Smart-photo",
                  "footer": "",
                  "mask": "<!^.+${1,25}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{1,25}$",
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
        }
      ]
    }
  ]
}