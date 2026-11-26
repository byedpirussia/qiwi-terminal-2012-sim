UIProvider ={
  "grpId": "38",
  "id": "62260029",
  "logo": "62260029.gif",
  "receiptName": "",
  "sName": "Kirby",
  "small_logo": "",
  "tag": "visible",
  "__objects": [
    {
      "__type": "constParams",
      "__objects":[{"__type":"param","name":"real_prv_id","value":"6226"},
                   {"__type":"param","name":"_extra_ev_account1","value":"29"}]
    },
    {
      "__type": "pages",
      "__objects": [
        {
          "pageId": "30468",
          "title": "",
          "useOnline": "true",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Введите номер телефона",
                  "footer": "Внимание! Номер телефона вводится без <8>, в формате: (ХХХ) ХХХ-ХХ-ХХ",
                  "mask": "8(<!^\\d+${3}>)<!^\\d+${7}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{10}",
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
                  "disp_type": "receipt",
                  "header": "Наименование:",
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
                  "header": "Сумма к оплате",
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