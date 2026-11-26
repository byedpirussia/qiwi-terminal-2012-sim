UIProvider ={
  "grpId": "40",
  "id": "4892",
  "logo": "4892.gif",
  "receiptName": "",
  "sName": "Радуга",
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
          "pageId": "30951",
          "title": "",
          "useOnline": "true",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Введите номер счета",
                  "footer": "",
                  "mask": "<!^\\d+${3,7}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{3,7}$",
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