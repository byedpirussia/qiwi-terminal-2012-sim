UIProvider ={
  "grpId": "382",
  "id": "3716",
  "logo": "3716.gif",
  "receiptName": "",
  "sName": "Павлодар - Водоканал",
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
          "pageId": "31029",
          "title": "",
          "useOnline": "",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Введите номер лицевого счета",
                  "footer": "",
                  "mask": "<!^[0-9.]+${1,20}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^.+$",
                  "strip": "True",
                  "type": "text_input"
                },
                {
                  "layout": "DGD",
                  "type": "keyboard"
                }
              ]
            }
          ]
        },
        {
          "pageId": "31030",
          "title": "",
          "useOnline": "true",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Введите РНН",
                  "footer": "",
                  "mask": "<!^\\d+${12}>",
                  "name": "_extra_ev_account1",
                  "nobr": "false",
                  "regexp": "^\\d{12}$",
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