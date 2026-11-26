UIProvider ={
  "grpId": "45",
  "id": "6321",
  "logo": "45.gif",
  "receiptName": "",
  "sName": "АО «Трансэнерго» - юр. лица",
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
          "pageId": "6272001",
          "title": "",
          "useOnline": "true",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Дербес есеп шотыңыздың нөмірін енгізіңіз",
                  "footer": "",
                  "mask": "<!^\\d+${1,5}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{1,5}$",
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
          "pageId": "6272002",
          "title": "",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "disp_name": "disp1",
                  "disp_type": "extra",
                  "header": "Ф.И.О:",
                  "mask": "<!^.+${1,255}>",
                  "name": "data",
                  "nobr": "false",
                  "regexp": "^.+$",
                  "strip": "false",
                  "type": "disp_input",
                  "visible": "true"
                },
                 {
                  "disp_name": "disp2",
                  "disp_type": "extra",
                  "header": "Мекенжай:",
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