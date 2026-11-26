UIProvider ={
  "grpId": "123",
  "id": "7855",
  "logo": "7855.gif",
  "receiptName": "",
  "sName": "DSMS.kz",
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
                  "header": "ID номеріңізді еңгізіңіз",
                  "footer": "",
                  "mask": "<!^\\d+${10,11}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{10,11}$",
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