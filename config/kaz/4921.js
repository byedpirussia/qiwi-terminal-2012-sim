UIProvider ={
  "grpId": "123",
  "id": "4921",
  "logo": "4921.gif",
  "receiptName": "",
  "sName": "КазТелеТот",
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
          "pageId": "30257",
          "title": "",
          "useOnline": "true",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Келсім шарт нөмірін енгізіңіз",
                  "footer": "",
                  "mask": "<!^\\d+${6,9}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{6,9}$",
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