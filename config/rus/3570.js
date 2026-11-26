UIProvider ={
  "grpId": "103",
  "id": "3570",
  "logo": "3570.gif",
  "receiptName": "",
  "sName": "I-Forward",
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
          "pageId": "30572",
          "title": "",
          "useOnline": "",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Введите виртуальный номер",
                  "footer": "",
                  "mask": "<!^\\d+${4,20}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{4,20}$",
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