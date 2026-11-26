UIProvider ={
  "grpId": "20",
  "id": "5811",
  "logo": "5811.gif",
  "receiptName": "",
  "sName": "WebMoney",
  "small_logo": "",
  "tag": "visible",
    "prvPage":"embed_flash_webMoney.html",
  "__objects": [
    {
      "__type": "constParams"
    },
    {
      "__type": "pages",
      "__objects": [
        {
          "pageId": "30605",
          "title": "",
          "useOnline": "",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Введите номер Вашего Z-кошелька WebMoney",
                  "footer": "",
                  "mask": "Z<!^.*${0,12}>",
                  "name": "ev_extra_account1",
                  "nobr": "false",
                  "regexp": "^.*$",
                  "strip": "true",
                  "type": "text_input"
                },
                {
                  "layout": "DGDT",
                  "type": "keyboard"
                }
              ]
            }
          ]
        },
                {
          "pageId": "30606",
          "title": "",
          "useOnline": "true",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Введите номер Вашего Z-кошелька WebMoney",
                  "footer": "",
                  "mask": "Z<!^.*${12}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{12}$",
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
                  "header": "",
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
                  "header": "",
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
                  "header": "",
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