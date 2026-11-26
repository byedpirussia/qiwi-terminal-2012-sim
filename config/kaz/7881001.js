UIProvider ={
  "grpId": "7881",
  "id": "7881001",
  "logo": "7881.gif",
  "receiptName": "",
  "sName": "Kanday.kz Купондарды төлеу",
  "small_logo": "",
  "tag": "visible",
  "__objects": [
    {
      "__type": "constParams",
      "__objects":[
		  {"__type":"param","name":"real_prv_id","value":"7881"},
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
                  "header": "Төлейтін сома",
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
                  "header": "ФИО",
                  "mask": "<!^.+${1,255}>",
                  "name": "data2",
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