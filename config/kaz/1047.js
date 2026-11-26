UIProvider ={
  "grpId": "103",
  "id": "1047",
  "logo": "1047.gif",
  "receiptName": "",
  "sName": "СТС",
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
          "pageId": "31102",
          "title": "",
          "useOnline": "",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Келсім шарт нөмірін енгізіңіз",
                  "footer": "",
                  "mask": "<!^\\d+${4,15}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{4,15}$",
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