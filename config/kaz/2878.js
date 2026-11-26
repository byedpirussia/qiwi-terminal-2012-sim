UIProvider ={
  "grpId": "123",
  "id": "2878",
  "logo": "2878.gif",
  "receiptName": "",
  "sName": "Aquabionica",
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
          "pageId": "30417",
          "title": "",
          "useOnline": "",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Келсім шарт нөмірін енгізіңіз",
                  "footer": "",
                  "mask": "<!^.+${1,20}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d+$",
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
          "pageId": "30418",
          "title": "",
          "useOnline": "true",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Тапсырыс нөмірін енгізіңіз",
                  "footer": "",
                  "mask": "<!^\\d+${2,10}>",
                  "name": "_extra_ev_acccunt1",
                  "nobr": "false",
                  "regexp": "^\\d{2,10}$",
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
          "pageId": "30420",
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