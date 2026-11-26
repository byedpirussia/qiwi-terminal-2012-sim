UIProvider ={
  "grpId": "103",
  "id": "4616",
  "logo": "4616.gif",
  "receiptName": "",
  "sName": "BeNetCom",
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
          "pageId": "30450",
          "title": "",
          "useOnline": "",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Введите номер телефона",
                  "footer": "",
                  "mask": "<!^\\d+${6}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^((68[89])|475)\\d{3}$",
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