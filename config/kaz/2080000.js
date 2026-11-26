UIProvider ={
  "grpId": "382",
  "id": "2080000",
  "logo": "2080000.gif",
  "receiptName": "",
  "sName": "Семей Пригород",
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
          "pageId": "30131",
          "title": "",
          "useOnline": "true",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Дербес есеп шотыңыздың нөмірін енгізіңіз",
                  "footer": "",
                  "mask": "000<!^.+${1,9}>",
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
          "pageId": "30133",
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