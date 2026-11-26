UIProvider ={
  "grpId": "123",
  "id": "972",
  "logo": "972.gif",
  "receiptName": "",
  "sName": "Art to Be",
  "small_logo": "",
  "tag": "visible, charity_arttube",
  "__objects": [
    {
      "__type": "constParams"
    },
    {
      "__type": "pages",
      "__objects": [
        {
          "pageId": "30425",
          "title": "",
          "useOnline": "",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Введите номер договора",
                  "footer": "",
                  "mask": "<!^.+${11}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{11}$",
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