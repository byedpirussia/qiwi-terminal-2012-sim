UIProvider ={
  "grpId": "20",
  "id": "268238",
  "logo": "neverlands.gif",
  "receiptName": "",
  "sName": "NeverLands",
  "small_logo": "",
  "tag": "visible",
  "__objects": [
    {
      "__type": "constParams",
      "__objects" : [
                        {
                             "__type" : "param",
                             "name" : "account1",
                             "value" : "gm"
                        },
                        {
                             "__type" : "param",
                             "name" : "account2",
                             "value" : "38"
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
                  "mask": "<!^.+${1,21}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^.{1,21}$",
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