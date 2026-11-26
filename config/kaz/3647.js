UIProvider ={
  "grpId": "382",
  "id": "3647",
  "logo": "3647.gif",
  "receiptName": "",
  "sName": "Павлодарлифт",
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
          "pageId": "31036",
          "title": "",
          "useOnline": "",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Жеке шот нөмірін енгізіңіз ",
                  "footer": " Шотты түбіртектен қараңыз",
                  "mask": "<!^\\d+${6,8}>",
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