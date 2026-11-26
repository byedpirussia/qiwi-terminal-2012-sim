UIProvider ={
  "grpId": "81",
  "id": "4553",
  "logo": "4553.gif",
  "receiptName": "",
  "sName": "ALSECO",
  "small_logo": "",
  "tag": "visible",
  "prvPage":"embed_flash_alseco.html",
  "__objects": [
	{"__type":"constParams","__objects":[{"__type":"param","name":"EmbedParams","value":"KZ"}]},
    {
      "__type": "pages",
      "__objects": [
        {
          "pageId": "30349",
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