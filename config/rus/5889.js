UIProvider ={
  "grpId": "40",
  "id": "5889",
  "logo": "5889.gif",
  "receiptName": "",
  "sName": "Greenline",
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
          "pageId": "30445001",
          "title": "",
          "useOnline": "true",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Введите номер",
                  "footer": "",
                  "mask": "<!^\\d+${1,11}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^(372)\\d{8}$",
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