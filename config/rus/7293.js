UIProvider ={
  "grpId": "40",
  "id": "7293",
  "logo": "7293.gif",
  "receiptName": "",
  "sName": "Смотри ТВ",
  "small_logo": "",
  "tag": "visible, change",
  "__objects": [
    {
      "__type": "constParams"
    },
    {
      "__type": "pages",
      "__objects": [
        {
          "pageId": "30411",
          "title": "",
          "useOnline": "true",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Введите Ваш код",
                  "footer": "",
                  "mask": "<!^\\d+${6,12}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{6,12}$",
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
                  "disp_type": "fixedsum",
                  "header": "Сумма к оплате",
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