UIProvider ={
  "grpId": "123",
  "id": "1631",
  "logo": "1631.gif",
  "receiptName": "",
  "sName": "ПГК",
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
          "pageId": "31042",
          "title": "",
          "useOnline": "",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Введите Ваш ID",
                  "footer": "",
                  "mask": "<!^.+${5,6}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{5,6}$",
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