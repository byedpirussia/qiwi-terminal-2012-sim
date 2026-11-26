UIProvider ={
  "grpId": "123",
  "id": "3718",
  "logo": "3718.gif",
  "receiptName": "",
  "sName": "The Last City",
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
          "pageId": "30774",
          "title": "",
          "useOnline": "true",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Введите Ваш личный код",
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