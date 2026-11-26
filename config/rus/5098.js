UIProvider ={
  "grpId": "123",
  "id": "5098",
  "logo": "5098.gif",
  "receiptName": "",
  "sName": "Guidejet",
  "small_logo": "",
  "tag": "visible",
  "__objects": [
    {
      "__type": "constParams",
      "__objects":[
		  {"__type":"param","name":"real_prv_id","value":"8125"}
	  ]
    },
    {
      "__type": "pages",
      "__objects": [
        {
          "pageId": "30542",
          "title": "",
          "useOnline": "true",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Введите номер лицевого счета",
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