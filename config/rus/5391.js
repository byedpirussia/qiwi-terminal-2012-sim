UIProvider ={
  "grpId": "123",
  "id": "5391",
  "logo": "5391.gif",
  "receiptName": "",
  "sName": "Такси XXI век",
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
          "pageId": "5391001",
          "title": "",
          "useOnline": "true",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Введите свой позывной номер",
                  "footer": "",
                  "mask": "<!^\\d+${3,5}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{3,5}$",
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