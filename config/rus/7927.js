UIProvider ={
  "grpId": "20",
  "id": "7927",
  "logo": "7927.gif",
  "receiptName": "",
  "sName": "Smart Sim",
  "small_logo": "",
  "tag": "visible",
  "__objects": [
    {
      "__type": "constParams",
      "__objects":[] 
    },
    {
      "__type": "pages",
      "__objects": [
		{
          "pageId": "9999123001",
          "title": "",
          "useOnline": "true",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Введите номер",
                  "footer": "",
                  "mask": "<!^.+${1,12}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^.+$",
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