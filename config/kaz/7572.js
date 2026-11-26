UIProvider ={
  "grpId": "123",
  "id": "7572",
  "logo": "7572.gif",
  "receiptName": "",
  "sName": "Sky media TV",
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
          "pageId": "30605",
          "title": "",
          "useOnline": "true",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Картанын нөмірін енгізіңіз",
                  "mask": "<!^\\d+${16}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{16}$",
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