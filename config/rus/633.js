UIProvider ={
  "grpId": "103",
  "id": "633",
  "logo": "633.gif",
  "receiptName": "",
  "sName": "MetroMax",
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
          "pageId": "30645",
          "title": "",
          "useOnline": "",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Введите номер договора",
                  "footer": "",
                  "mask": "<!^\\d+${5}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{5}$",
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