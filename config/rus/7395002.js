UIProvider ={
  "grpId": "7395",
  "id": "7395002",
  "logo": "7395.gif",
  "receiptName": "",
  "sName": "Skidkadrom Пополнение счета",
  "small_logo": "",
  "tag": "visible",
  "__objects": [
    {
      "__type": "constParams",
      "__objects":[
		  {"__type":"param","name":"real_prv_id","value":"7395"},
		  {"__type":"param","name":"_extra_ev_account1","value":"2"}
	  ]
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
        }
      ]
    }
  ]
}