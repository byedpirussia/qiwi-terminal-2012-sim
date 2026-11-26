UIProvider ={
  "grpId": "103",
  "id": "7918",
  "logo": "16.gif",
  "receiptName": "",
  "sName": "Digital TV<br>Кызылорда",
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
          "pageId": "30197",
          "title": "",
          "useOnline": "true",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Введите номер договора",
                  "footer": "",
                  "mask": "<!^\\d+${5,7}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{5,7}$",
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