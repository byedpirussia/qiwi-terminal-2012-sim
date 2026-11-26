UIProvider ={
  "grpId": "123",
  "id": "5679",
  "logo": "5679.gif",
  "receiptName": "",
  "sName": "Тотобет",
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
          "pageId": "5679001",
          "title": "",
          "useOnline": "true",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Шотыңыздың нөмірін енгізіңіз",
                  "footer": "",
                  "mask": "<!^.+${1,7}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{1,7}$",
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