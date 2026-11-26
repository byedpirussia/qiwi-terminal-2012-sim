UIProvider ={
  "grpId": "123",
  "id": "3717",
  "logo": "3717.gif",
  "receiptName": "",
  "sName": "GSM - INFORM",
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
          "pageId": "30536",
          "title": "",
          "useOnline": "",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Введите Ваш ID",
                  "footer": "",
                  "mask": "<!^.+${2,20}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{2,20}$",
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