UIProvider ={
  "grpId": "20",
  "id": "2682",
  "logo": "26823841.gif",
  "receiptName": "",
  "sName": "Mgates онлайн игры",
  "small_logo": "",
  "tag": "visible",
  "prvPage":"embed_flash_2Pay.html",
  "__objects": [
    {
      "__type":"constParams","__objects":[{"__type":"param","name":"EmbedParams","value":"RU"}],
      "__objects" : [
                        {
                             "__type" : "param",
                             "name" : "_extra_ev_account1",
                             "value" : "gm"
                        },
                        {
                             "__type" : "param",
                             "name" : "_extra_ev_account2",
                             "value" : "3841"
                        },
                        {"__type":"param","name":"real_prv_id","value":"2682"}
                  ]
    },
    {
      "__type": "pages",
      "__objects": [
        {
          "pageId": "30605",
          "title": "",
          "useOnline": "true",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Ойыншы ID енгізіңіз",
                  "mask": "<!^.+${1,9}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^.{1,9}$",
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