UIProvider ={
  "grpId": "382",
  "id": "2080091",
  "logo": "2080091.gif",
  "receiptName": "",
  "sName": "Серебрянка",
  "small_logo": "",
  "tag": "visible",
  "__objects": [
    {
      "__type": "constParams",
      "__objects": [
        {
          "__type": "param",
          "name": "real_prv_id",
          "value": "2080"
        }
      ]
    },
    {
      "__type": "pages",
      "__objects": [
        {
          "pageId": "30047",
          "title": "",
          "useOnline": "true",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Дербес есеп шотыңыздың нөмірін енгізіңіз",
                  "footer": "",
                  "mask": "091<!^.+${1,9}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{1,12}$",
                  "strip": "False",
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
          "pageId": "30049",
          "title": "",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "disp_name": "disp1",
                  "disp_type": "extra",
                  "header": "Ақпараттарыңызды тексеріңіз:",
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