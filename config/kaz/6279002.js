UIProvider ={
  "grpId": "44",
  "id": "6279002",
  "logo": "6279.gif",
  "receiptName": "",
  "sName": "TopKupon.kz Пополнение счета",
  "small_logo": "",
  "tag": "visible",
  "__objects": [
    {
      "__type": "constParams",
      "__objects":[{"__type":"param","name":"real_prv_id","value":"6279"}]
    },
    {
      "__type": "pages",
      "__objects": [
        {
          "pageId": "30381",
          "title": "",
          "useOnline": "true",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Введите Ваш e-mail",
                  "footer": "",
                  "mask": "<!^.+${1,25}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^.{1,30}$",
                  "strip": "True",
                  "type": "text_input"
                },
                {
                  "layout": "ALL",
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