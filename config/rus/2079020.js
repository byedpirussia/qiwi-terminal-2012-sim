UIProvider ={
  "grpId": "382",
  "id": "2079020",
  "logo": "2079020.gif",
  "receiptName": "",
  "sName": "Аягоз",
  "small_logo": "",
  "tag": "visible",
  "__objects": [
    {
      "__type": "constParams",
      "__objects": [
        {
          "__type": "param",
          "name": "real_prv_id",
          "value": "2079"
        }
      ]
    },
    {
      "__type": "pages",
      "__objects": [
        {
          "pageId": "30698",
          "title": "",
          "useOnline": "true",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Введите номер лицевого счета",
                  "footer": "",
                  "mask": "20<!^.+${1,10}>",
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
          "pageId": "30700",
          "title": "",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "disp_name": "disp1",
                  "disp_type": "extra",
                  "header": "Проверте Ваши данные:",
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