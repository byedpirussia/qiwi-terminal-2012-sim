UIProvider ={
  "grpId": "123",
  "id": "5368",
  "logo": "5368.gif",
  "receiptName": "",
  "sName": "Электронный дневник (Аксай)",
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
          "pageId": "5368987",
          "title": "",
          "useOnline": "true",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Введите номер договора",
                  "footer": "",
                  "mask": "<!^\\d+${6,7}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{6,7}$",
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