UIProvider ={
  "grpId": "382",
  "id": "5918",
  "logo": "33.gif",
  "receiptName": "",
  "sName": "Электр куаты",
  "small_logo": "",
  "tag": "visible",
  "__objects": [
	 {"__type":"constParams","__objects":[{"__type":"param","name":"_receipt_prt_operator","value":"Атырауэнергосауда"}]},
    {
      "__type": "pages",
      "__objects": [
        {
          "pageId": "30124",
          "title": "",
          "useOnline": "true",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Өзіңіздің жеке есеп шотыңызды енгізіңіз",
                  "footer": "",
                  "mask": "<!^\\d+${1,12}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{1,12}$",
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
          "pageId": "30126",
          "title": "",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "disp_name": "disp1",
                  "disp_type": "extra",
                  "header": "Ақпараттарыңызды тексеріңіз",
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