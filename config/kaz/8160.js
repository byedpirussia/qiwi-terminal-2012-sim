UIProvider ={
  "grpId": "123",
  "id": "8160",
  "logo": "8160.gif",
  "receiptName": "",
  "sName": "Автогид",
  "small_logo": "",
  "tag": "visible",
  "__objects": [
    {
      "__type": "pages",
      "__objects": [
        {
          "pageId": "30381",
          "title": "",
          "useOnline": "true",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Өзіңіздің жеке кеңсеңіздің номерін енгізіңіз",
                  "footer": "",
                  "mask": "<!^\\d+${1,11}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{1,11}$",
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