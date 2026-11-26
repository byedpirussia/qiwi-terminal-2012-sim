UIProvider ={
  "grpId": "103",
  "id": "2600",
  "logo": "2600.gif",
  "receiptName": "",
  "sName": "Интернет Дома",
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
          "pageId": "30918",
          "title": "",
          "useOnline": "true",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Логиніңізді енгізіңіз",
                  "footer": "",
                  "mask": "<!^\\d+${3}><!^\\d+${7}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^(099|001)\\d{7}$",
                  "strip": "true",
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