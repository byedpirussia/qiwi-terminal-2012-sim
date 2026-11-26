UIProvider ={
  "grpId": "20",
  "id": "642",
  "logo": "642.gif",
  "receiptName": "",
  "sName": "Green Line",
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
          "pageId": "30196",
          "title": "",
          "useOnline": "",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Телефоныңыздың нөмірін енгізіңіз",
                  "footer": "",
                  "mask": "<!^\\d+${11,12}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{11,12}$",
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