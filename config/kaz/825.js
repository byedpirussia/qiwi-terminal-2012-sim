UIProvider ={
  "grpId": "103",
  "id": "825",
  "logo": "825.gif",
  "receiptName": "",
  "sName": "VIPcard",
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
          "pageId": "30792",
          "title": "",
          "useOnline": "",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Картаңыздың нөмірін енгізіңіз",
                  "footer": "",
                  "mask": "<!^\\d+${1,20}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d+$",
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