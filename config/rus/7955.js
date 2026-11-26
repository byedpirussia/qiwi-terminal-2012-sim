UIProvider ={
  "grpId": "123",
  "id": "7955",
  "logo": "7955.gif",
  "receiptName": "",
  "sName": "Ваш репетитор",
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
                  "mask": "<!^.+${1,10}>",
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