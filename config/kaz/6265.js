UIProvider ={
  "grpId": "81",
  "id": "6265",
  "logo": "6265.gif",
  "receiptName": "",
  "sName": "Супер лото",
  "small_logo": "",
  "tag": "visible",
  "prvPage":"flash_super_loto.html",
  "__objects": [
	{"__type":"constParams","__objects":[{"__type":"param","name":"EmbedParams","value":"RU"}]},
    {
      "__type": "pages",
      "__objects": [
        {
          "pageId": "30350",
          "title": "",
          "useOnline": "",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Введите номер лицевого счета",
                  "footer": "",
                  "mask": "<!^\\d+${1,10}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{1,10}$",
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