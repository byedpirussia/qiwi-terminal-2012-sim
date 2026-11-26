UIProvider ={
  "grpId": "382",
  "id": "3154",
  "logo": "3154.gif",
  "receiptName": "",
  "sName": "ЖКХ (Спецмашин, вывоз мусора г.Павлодар)",
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
          "pageId": "30906",
          "title": "",
          "useOnline": "true",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Жеке шот нөмірін енгізіңіз ",
                  "footer": " Шотты түбіртектен қараңыз",
                  "mask": "<!^\\d+${1,10}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{1,10}$",
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