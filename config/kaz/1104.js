UIProvider ={
  "grpId": "103",
  "id": "1104",
  "logo": "1104.gif",
  "receiptName": "",
  "sName": "MetroNet",
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
          "pageId": "30651",
          "title": "",
          "useOnline": "",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Телефонның немесе карточканың нөмірін енгізіңіз",
                  "footer": "",
                  "mask": "<!^\\d+${10,14}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{10,14}$",
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