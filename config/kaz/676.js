UIProvider ={
  "grpId": "103",
  "id": "676",
  "logo": "676.gif",
  "receiptName": "",
  "sName": "System Line ",
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
          "pageId": "30768",
          "title": "",
          "useOnline": "",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Өзіңіздің жеке идентификаторыңызды енгізіңіз (pin)",
                  "footer": "",
                  "mask": "<!^\\d+${2,10}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{2,10}$",
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