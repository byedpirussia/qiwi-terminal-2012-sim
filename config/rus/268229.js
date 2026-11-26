UIProvider ={
  "grpId": "20",
  "id": "2682265",
  "logo": "sadimpair.gif",
  "receiptName": "",
  "sName": "Садовая империя",
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
                             "value" : "265"
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
                  "header": "Введите Ваш ID",
                  "mask": "<!^.+${1,14}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^.{1,14}$",
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