UIProvider ={
  "grpId": "103",
  "id": "7928",
  "logo": "7928.gif",
  "receiptName": "",
  "sName": "GigaNet",
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
                  "header": "Жеке шот нөмірін енгізіңіз",
                  "footer": "",
                  "mask": "<!^\\d+${7}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{7}$",
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