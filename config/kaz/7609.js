UIProvider ={
  "grpId": "123",
  "id": "7609",
  "logo": "7609.gif",
  "receiptName": "",
  "sName": "TVORITEL",
  "small_logo": "",
  "tag": "visible, charity_tvoritel",
  "__objects": [
    {
      "__type": "constParams"
    },
    {
      "__type": "pages",
      "__objects": [
        {
          "pageId": "30102",
          "title": "",
          "useOnline": "",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Расчетный счет ОФБ TVORITEL",
                  "footer": "",
                  "mask": "$$004700633$$<!^\\d*${0,1}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{0,20}$",
                  "strip": "false",
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