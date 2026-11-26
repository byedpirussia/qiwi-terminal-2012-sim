UIProvider ={
  "grpId": "123",
  "id": "5623",
  "logo": "5623.gif",
  "receiptName": "",
  "sName": "Almaline",
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
          "pageId": "5623001",
          "title": "",
          "useOnline": "true",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Введите лицевой счет",
                  "footer": "",
                  "mask": "<!^.+${1,10}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^.{1,25}$",
                  "strip": "True",
                  "type": "text_input"
                },
                {
                  "layout": "AL",
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