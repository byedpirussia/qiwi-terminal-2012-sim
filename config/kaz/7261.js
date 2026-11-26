UIProvider ={
  "grpId": "382",
  "id": "7261",
  "logo": "7261.gif",
  "receiptName": "",
  "sName": "ГКП «Костанайская теплоэнергетическая компания»",
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
          "pageId": "6272001",
          "title": "",
          "useOnline": "true",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Жеке шоттың нөмiрiң енгiзiңiз",
                  "footer": "",
                  "mask": "<!^\\d+${1,7}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{1,7}$",
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
        },
        {
          "pageId": "6272002",
          "title": "",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "disp_name": "disp1",
                  "disp_type": "extra",
                  "header": "Адрес:",
                  "mask": "<!^.+${1,255}>",
                  "name": "data",
                  "nobr": "false",
                  "regexp": "^.+$",
                  "strip": "false",
                  "type": "disp_input",
                  "visible": "true"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}