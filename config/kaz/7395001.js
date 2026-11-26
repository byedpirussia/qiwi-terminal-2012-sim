UIProvider ={
  "grpId": "7395",
  "id": "7395001",
  "logo": "7395.gif",
  "receiptName": "",
  "sName": "Skidkadrom Купондарды төлеу",
  "small_logo": "",
  "tag": "visible,change",
  "__objects": [
    {
      "__type": "constParams",
      "__objects":[
		  {"__type":"param","name":"real_prv_id","value":"7395"},
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
                  "header": "Купоныңыздың нөмірін енгізіңіз",
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
                  "disp_type": "fixedsum",
                  "header": "Сумма к оплате",
                  "mask": "<!^.+${1,255}>",
                  "name": "data",
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