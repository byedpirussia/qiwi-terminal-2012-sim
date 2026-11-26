UIProvider ={
  "grpId": "123",
  "id": "7396",
  "logo": "7396.gif",
  "receiptName": "",
  "sName": "Big Town",
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
                  "header": "Введите номер счёта на оплату",
                  "mask": "<!^\\d+${1,11}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{1,11}$",
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