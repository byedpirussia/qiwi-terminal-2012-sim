UIProvider ={
  "grpId": "40",
  "id": "4529",
  "logo": "16.gif",
  "receiptName": "",
  "sName": "Digital TV<br>Актау",
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
          "pageId": "30191",
          "title": "",
          "useOnline": "true",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Введите номер договора",
                  "footer": "",
                  "mask": "<!^\\d+${1,5}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{1,5}$",
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