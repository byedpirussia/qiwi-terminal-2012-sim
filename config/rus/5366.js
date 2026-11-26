UIProvider ={
  "grpId": "123",
  "id": "5366",
  "logo": "5366.gif",
  "receiptName": "",
  "sName": "ОФПОБ Здоровая Азия",
  "small_logo": "",
  "tag": "visible, charity_zdaz",
  "__objects": [
    {
      "__type": "constParams"
    },
    {
      "__type": "pages",
      "__objects": [
        {
          "pageId": "5697001",
          "title": "",
          "useOnline": "true",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Введите номер лицевого счета",
                  "footer": "",
                  "mask": "<!^\\d+${1,9}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{1,9}$",
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