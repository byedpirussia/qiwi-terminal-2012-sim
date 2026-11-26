UIProvider ={
  "grpId": "123",
  "id": "5773",
  "logo": "5773.gif",
  "receiptName": "",
  "sName": "TENDER PLUS",
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
          "pageId": "5773001",
          "title": "",
          "useOnline": "",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Введите Ваш регистрационный номер в системе TenderPlus",
                  "footer": "",
                  "mask": "<!^.+${1,9}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{1,9}$",
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