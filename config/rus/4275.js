UIProvider ={
  "grpId": "123",
  "id": "4275",
  "logo": "4275.gif",
  "receiptName": "",
  "sName": "Sot.kz",
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
          "pageId": "30755",
          "title": "",
          "useOnline": "",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Введите номер заказа",
                  "footer": "",
                  "mask": "<!^.+${1,20}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^.+$",
                  "strip": "True",
                  "type": "text_input"
                },
                {
                  "layout": "AL",
                  "type": "keyboard"
                }
              ]
            }
          ]
        },
        {
          "pageId": "30756",
          "title": "",
          "useOnline": "",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Ваша фамилия",
                  "footer": "",
                  "mask": "<!^\\w+${1,20}>",
                  "name": "_extra_ev_acccunt1",
                  "nobr": "false",
                  "regexp": "^\\w+$",
                  "strip": "True",
                  "type": "text_input"
                },
                {
                  "layout": "ALCR",
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