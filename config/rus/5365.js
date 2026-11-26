UIProvider ={
  "grpId": "123",
  "id": "5365",
  "logo": "5365.gif",
  "receiptName": "",
  "sName": "ЧБФ Ару Ана",
  "small_logo": "",
  "tag": "visible, charity_aru",
  "__objects": [
    {
      "__type": "constParams"
    },
    {
      "__type": "pages",
      "__objects": [
        {
          "pageId": "5697001",
          "title": "",
          "useOnline": "true",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Введите номер лицевого счета",
                  "footer": "",
                  "mask": "<!^\\d+${1,9}>",
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