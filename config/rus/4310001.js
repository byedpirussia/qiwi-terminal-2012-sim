UIProvider ={
  "grpId": "20",
  "id": "4310001",
  "logo": "4310001.gif",
  "receiptName": "",
  "sName": "Tele2",
  "small_logo": "",
  "tag": "visible",
  "__objects": [
    {
      "__type": "constParams",
      "__objects":[{"__type":"param","name":"real_prv_id","value":"431"}]
    },
    {
      "__type": "pages",
      "__objects": [
        {
          "pageId": "30669",
          "title": "",
          "useOnline": "",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Введите номер телефона",
                  "footer": "",
                  "mask": "8(<!^\\d+${3}>)<!^\\d+${7}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^(707)\\d{7}$",
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
        }
      ]
    }
  ]
}