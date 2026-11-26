UIProvider ={
  "grpId": "7470",
  "id": "7470001",
  "logo": "7470.gif",
  "receiptName": "",
  "sName": "Рай скидок Купондарды төлеу",
  "small_logo": "",
  "tag": "visible,change",
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
                  "disp_type": "",
                  "header": "Ақпараттарыңызды тексеріңіз",
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
                  "disp_type": "fixedsum",
                  "header": "Төлейтін сома",
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