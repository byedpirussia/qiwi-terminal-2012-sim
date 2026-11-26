UIProvider ={
  "grpId": "123",
  "id": "8158",
  "logo": "8158.gif",
  "receiptName": "",
  "sName": "СМС-дневник (Талдыкорган)",
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
                  "header": "Нөмірңізді енгізіңіз",
                  "footer": "",
                  "mask": "<!^.+${1,25}>",
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