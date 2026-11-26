UIProvider ={
  "grpId": "20",
  "id": "2682",
  "logo": "bananaWars.gif",
  "receiptName": "",
  "sName": "BananaWars",
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
                             "value" : "2223"
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
                  "mask": "<!^.+${1,19}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^.{1,19}$",
                  "strip": "True",
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