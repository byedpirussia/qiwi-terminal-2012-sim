UIProvider ={
  "grpId": "20",
  "id": "268283",
  "logo": "gladiator.gif",
  "receiptName": "",
  "sName": "Гладиаторы",
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
                             "value" : "83"
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
                  "mask": "<!^.+${1,24}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^.{1,24}$",
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