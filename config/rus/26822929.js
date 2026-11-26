UIProvider ={
  "grpId": "20",
  "id": "2682",
  "logo": "26822929.gif",
  "receiptName": "",
  "sName": "Galaxy",
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
                             "value" : "2929"
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
                  "header": "Введите Ваш ник",
                  "mask": "<!^.+${1,10}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^.{1,10}$",
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