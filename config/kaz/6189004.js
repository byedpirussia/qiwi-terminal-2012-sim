UIProvider ={
  "grpId": "42",
  "id": "6189004",
  "logo": "6189.gif",
  "receiptName": "",
  "sName": "Работа сегодня Актобе",
  "small_logo": "",
  "tag": "visible",
  "__objects": [
    {
      "__type": "constParams",
      "__objects":[{"__type":"param","name":"real_prv_id","value":"6189"}]
    },
    {
      "__type": "pages",
      "__objects": [
        {
          "pageId": "30693",
          "title": "",
          "useOnline": "true",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Дербес есеп шотыңыздың нөмірін енгізіңіз",
                  "footer": "",
                  "mask": "<!^\\d+${6}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{6}$",
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
          "pageId": "30695",
          "title": "",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "disp_name": "disp1",
                  "disp_type": "extra",
                  "header": "",
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