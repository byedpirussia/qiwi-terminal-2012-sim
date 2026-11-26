UIProvider ={
  "grpId": "103",
  "id": "2131003",
  "logo": "2131003.gif",
  "receiptName": "",
  "sName": "EMI CARD",
  "small_logo": "",
  "tag": "visible",
  "__objects": [
    {
      "__type": "constParams",
      "__objects":[{"__type":"param","name":"real_prv_id","value":"757"}]
    },
    {
      "__type": "pages",
      "__objects": [
        {
          "pageId": "30471",
          "title": "",
          "useOnline": "",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Келсім шарт нөмірін енгізіңіз",
                  "mask": "<!^\\d+${1,10}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{1,10}$",
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