UIProvider ={
  "grpId": "123",
  "id": "7985",
  "logo": "7985.gif",
  "receiptName": "",
  "sName": "SkidBon",
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
                  "header": "Идентификатордiн нөмірін енгізіңіз",
                  "mask": "<!^\\d+${6,10}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{6,10}$",
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