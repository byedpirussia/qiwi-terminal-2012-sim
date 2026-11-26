UIProvider ={
  "grpId": "7881",
  "id": "7881002",
  "logo": "7881.gif",
  "receiptName": "",
  "sName": "Kanday.kz Пополнение счета",
  "small_logo": "",
  "tag": "visible",
  "__objects": [
    {
      "__type": "constParams",
      "__objects":[
		  {"__type":"param","name":"real_prv_id","value":"7881"},
		  {"__type":"param","name":"_extra_ev_account1","value":"1"}
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
                  "header": "Сіздің сәйкестендіруші нөміріңізді енгізіңіз",
                  "footer": "",
                  "mask": "<!^\\d+${1,10}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{1,10}$",
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