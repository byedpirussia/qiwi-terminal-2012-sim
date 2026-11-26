UIProvider ={
  "grpId": "20",
  "id": "2682",
  "logo": "26825064.gif",
  "receiptName": "",
  "sName": "Battle of Immortals",
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
                             "value" : "5064"
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
                  "header": "Төлемдік ID-іңізді енгізіңіз",
                  "mask": "<!^.+${1,16}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^.{1,16}$",
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