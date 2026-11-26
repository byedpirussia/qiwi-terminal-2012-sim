UIProvider ={
  "grpId": "103",
  "id": "3156",
  "logo": "3156.gif",
  "receiptName": "",
  "sName": "Шымкент-онлайн",
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
          "pageId": "31146",
          "title": "",
          "useOnline": "",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Введите номер договора",
                  "footer": "",
                  "mask": "<!^\\d+${2}>-<!^\\d+${2}>/<!^\\d+${2}>-<!^\\d+${2}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{2}\\-\\d{2}\\/\\d{2}\\-\\d{2}$",
                  "strip": "False",
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