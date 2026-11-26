UIProvider ={
  "grpId": "103",
  "id": "2130",
  "logo": "2130.gif",
  "receiptName": "",
  "sName": "Ивентис Телеком",
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
          "pageId": "30912",
          "title": "",
          "useOnline": "",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Жеке шот нөмірін енгізіңіз ",
                  "footer": " Шотты түбіртектен қараңыз",
                  "mask": "<!^\\d+${1,20}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{1,20}$",
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