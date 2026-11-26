UIProvider ={
  "grpId": "103",
  "id": "4916",
  "logo": "4916.gif",
  "receiptName": "",
  "sName": "Балхаш - Электронный Город",
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
          "pageId": "30843",
          "title": "",
          "useOnline": "true",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Введите номер договора",
                  "footer": "",
                  "mask": "<!^\\d+${6,11}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{6,8}$",
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