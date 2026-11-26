UIProvider ={
  "grpId": "7470",
  "id": "7470002",
  "logo": "7470.gif",
  "receiptName": "",
  "sName": "Рай скидок Пополнение счета",
  "small_logo": "",
  "tag": "visible",
  "__objects": [
  	{
      "__type": "constParams",
      "__objects":[{"__type":"param","name":"real_prv_id","value":"7470"}]
    },
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
                  "mask": "<!^.+${6,24}>",
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
                  "header": "Проверьте Ваши данные",
                  "mask": "<!^.+${1,255}>",
                  "name": "data1",
                  "nobr": "false",
                  "regexp": "^.+$",
                  "strip": "false",
                  "type": "disp_input",
                  "visible": "true"
                },
                {
                  "disp_name": "disp2",
                  "disp_type": "",
                  "header": "Текущий баланс",
                  "mask": "<!^.+${1,255}>",
                  "name": "data2",
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