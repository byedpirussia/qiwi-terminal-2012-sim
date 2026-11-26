UIProvider ={
  "grpId": "123",
  "id": "5512",
  "logo": "5512.gif",
  "receiptName": "",
  "sName": "Chocolife.me - Оплата заказа",
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
          "pageId": "30305",
          "title": "",
          "useOnline": "true",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Введите номер заявки",
                  "footer": "",
                  "mask": "<!^\\d+${1,8}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{1,8}$",
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