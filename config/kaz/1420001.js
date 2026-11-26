UIProvider ={
  "grpId": "20",
  "id": "1420001",
  "logo": "1420001.gif",
  "receiptName": "",
  "sName": "Дос",
  "small_logo": "",
  "tag": "visible",
  "__objects": [
    {
      "__type": "constParams",
      "__objects":[{"__type":"param","name":"real_prv_id","value":"142"}]
    },
    {
      "__type": "pages",
      "__objects": [
        {
          "pageId": "30999",
          "title": "",
          "useOnline": "",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Телефоныңыздың нөмірін енгізіңіз1234",
                  "footer": "Назар аударыныз! Телефон нөмірі (ХХХ) ХХХ-ХХ-ХХ форматында, сегізсіз енгізіледі.",
                  "mask": "8(<!^\\d+${3}>)<!^\\d+${7}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^7714\\d{6}$",
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