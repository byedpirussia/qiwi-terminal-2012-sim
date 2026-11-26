UIProvider ={
  "grpId": "20",
  "id": "5910",
  "logo": "5910.gif",
  "receiptName": "",
  "sName": "IPS",
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
          "pageId": "30606",
          "title": "",
          "useOnline": "true",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Тапсырыс нөмірін енгізіңіз",
                  "footer": "",
                  "mask": "<!^\\d+${8}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{8}$",
                  "strip": "true",
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
          "pageId": "30607",
          "title": "",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "disp_name": "disp1",
                  "disp_type": "extra",
                  "header": "Имя",
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
                  "header": "Фамилия",
                  "mask": "<!^.+${1,255}>",
                  "name": "data2",
                  "nobr": "false",
                  "regexp": "^.+$",
                  "strip": "false",
                  "type": "disp_input",
                  "visible": "true"
                },
                {
                  "disp_name": "disp3",
                  "disp_type": "extra",
                  "header": "Отчество",
                  "mask": "<!^.+${1,255}>",
                  "name": "data3",
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