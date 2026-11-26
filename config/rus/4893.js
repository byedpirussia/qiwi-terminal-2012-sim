UIProvider ={
  "grpId": "123",
  "id": "4893",
  "logo": "4893.gif",
  "receiptName": "",
  "sName": "Юридическое бюро НАЙЗА",
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
          "pageId": "31152",
          "title": "",
          "useOnline": "true",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Введите номер заявки",
                  "footer": "",
                  "mask": "<!^.+${3,5}>",
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