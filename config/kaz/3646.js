UIProvider ={
  "grpId": "382",
  "id": "3646",
  "logo": "3646.gif",
  "receiptName": "",
  "sName": "РЭМлифт",
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
          "pageId": "31072",
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