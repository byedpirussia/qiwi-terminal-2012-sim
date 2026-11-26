UIProvider ={
  "grpId": "20",
  "id": "2682",
  "logo": "26823094.gif",
  "receiptName": "",
  "sName": "CrossFire",
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
                             "value" : "3094"
                        },
                        {"__type":"param","name":"real_prv_id","value":"2682"}
                  ]
    },
    {
      "__type": "pages",
      "__objects": [
        {
          "pageId": "26823094",
          "title": "",
          "useOnline": "true",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Ойындағы идентификаторыңызды енгізіңіз",
                  "mask": "<!^.+${1,29}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^.{1,29}$",
                  "strip": "true",
                  "type": "text_input"
                },
                {
                  "layout": "AL",
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