UIProvider ={
  "grpId": "123",
  "id": "1103",
  "logo": "1103.gif",
  "receiptName": "",
  "sName": "Букмекерская контора ГОЛ+ПАС",
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
          "pageId": "30251",
          "title": "",
          "useOnline": "true",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Введите номер договора",
                  "footer": "",
                  "mask": "<!^.+${2,6}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{2,6}$",
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