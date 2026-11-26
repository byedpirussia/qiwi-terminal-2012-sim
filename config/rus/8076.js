UIProvider ={
  "grpId": "123",
  "id": "8076",
  "logo": "8076.gif",
  "receiptName": "",
  "sName": "Мир скидок",
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
                  "header": "Введите Ваш E-mail",
                  "footer": "",
                  "mask": "<!^.+${1,50}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^([a-zA-Z0-9_-]|\\.)+@[a-zA-Z0-9_-]+\\.[a-z]{2,6}$",
                  "strip": "True",
                  "type": "text_input"
                },
                {
                  "layout": "ALL",
                  "type": "keyboard"
                }
              ]
            }
          ]
        },
		{
          "pageId": "30382",
          "title": "",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
				{
                  "disp_name": "disp1",
                  "disp_type": "",
                  "header": "ФИО",
                  "mask": "<!^.+${1,255}>",
                  "name": "data1",
                  "nobr": "false",
                  "regexp": "^.+$",
                  "strip": "false",
                  "type": "disp_input",
                  "visible": "true"
                },
              ]
            }
          ]
        }
      ]
    }
  ]
}