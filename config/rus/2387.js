UIProvider ={
  "grpId": "123",
  "id": "2387",
  "logo": "2387.gif",
  "receiptName": "",
  "sName": "Мамба",
  "small_logo": "",
  "tag": "visible",
  "__objects": [
    {
     "__type":"constParams","__objects":[{"__type":"param","name":"EmbedParams","value":"RU"}]
    },
    {
      "__type": "pages",
      "__objects": [
        {
          "pageId": "30989",
          "title": "",
          "useOnline": "true",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Введите логин или E-mail",
                  "footer": "",
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