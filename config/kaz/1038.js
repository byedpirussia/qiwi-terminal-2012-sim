UIProvider ={
  "grpId": "382",
  "id": "1038",
  "logo": "1038.gif",
  "receiptName": "",
  "sName": "Кустанай Су",
  "small_logo": "",
  "tag": "visible",
  "__objects": [
    {
      "__type": "constParams"
    },
    {
      "__type": "pages",
      "__objects": [
        {
          "pageId": "30968",
          "title": "",
          "useOnline": "true",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Дербес есеп шотыңыздың нөмірін енгізіңіз",
                  "footer": "",
                  "mask": "<!^\\d+${1,6}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{1,6}$",
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
          "pageId": "30970",
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