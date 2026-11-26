UIProvider ={
  "grpId": "40",
  "id": "6191",
  "logo": "6191.gif",
  "receiptName": "",
  "sName": "Орда ТВ",
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
          "pageId": "30605",
          "title": "",
          "useOnline": "false",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Введите Ваш номер договора",
                  "mask": "<!^\\d+${4}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{4}$",
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