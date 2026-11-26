UIProvider ={
  "grpId": "81",
  "id": "6105",
  "logo": "6105.gif",
  "receiptName": "",
  "sName": "ЕРЦ",
  "small_logo": "",
  "tag": "visible",
  "prvPage":"embed_flash_erc.html",
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