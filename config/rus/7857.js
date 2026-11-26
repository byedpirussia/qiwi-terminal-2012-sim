UIProvider ={
  "grpId": "123",
  "id": "7857",
  "logo": "7857.gif",
  "receiptName": "",
  "sName": "mport",
  "small_logo": "",
  "tag": "visible",
  "__objects": [
    {
      "__type": "pages",
      "__objects": [
        {
          "pageId": "30381",
          "title": "",
          "useOnline": "true",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Введите номер договора",
                  "footer": "",
                  "mask": "<!^\\d+${1,3}>-<!^\\d+${11,12}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^([0-9]{1,3})-([0-9]{12})$",
                  "strip": "false",
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