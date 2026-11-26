UIProvider ={
  "grpId": "20",
  "id": "2682",
  "logo": "2682150.gif",
  "receiptName": "",
  "sName": "Звездные Бои",
  "small_logo": "",
  "tag": "visible",
  "prvPage":"embed_flash_2Pay.html",
  "__objects": [
    {
      "__type": "constParams",
      "__objects" : [
                        {
                             "__type" : "param",
                             "name" : "_extra_ev_account1",
                             "value" : "gm"
                        },
                        {
                             "__type" : "param",
                             "name" : "_extra_ev_account2",
                             "value" : "150"
                        },
                        {"__type":"param","name":"real_prv_id","value":"2682"}
                  ]
    },
    {
      "__type": "pages",
      "__objects": [
        {
          "pageId": "2682150",
          "title": "",
          "useOnline": "true",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Введите номер счета",
                  "mask": "<!^.+${1,29}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^.{1,29}$",
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
        }
      ]
    }
  ]
}