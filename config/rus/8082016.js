UIProvider ={
  "grpId": "8082",
  "id": "8082016",
  "logo": "zhku_otoplenie.gif",
  "receiptName": "",
  "sName": "ЖКЕО-г.Жанаозен",
  "small_logo": "",
  "tag": "visible",
  "__objects": [
    {
      "__type": "constParams",
	  "__objects":[
		  {"__type":"param","name":"real_prv_id","value":"8082"},
		  {"__type":"param","name":"_extra_ev_account1","value":"152"}
	  ]
    },
    {
      "__type": "pages",
      "__objects": [
        {
          "pageId": "30530001",
          "title": "",
          "useOnline": "true",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Введите номер лицевого счета",
                  "footer": "",
                  "mask": "<!^.+${1,20}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^.{1,20}$",
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
          "pageId": "30530002",
          "title": "",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "disp_name": "disp1",
                  "disp_type": "",
                  "header": "Адрес",
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
                  "header": "Микрорайон",
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