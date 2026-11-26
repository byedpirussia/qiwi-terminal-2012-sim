UIProvider ={
  "grpId": "103",
  "id": "989",
  "logo": "989.gif",
  "receiptName": "",
  "sName": "ASTEL",
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
          "pageId": "30431",
          "title": "",
          "useOnline": "true",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Шотыңыздың нөмірін енгізіңіз",
                  "footer": "",
                  "mask": "<!^\\d+${12}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{12}$",
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