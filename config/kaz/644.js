UIProvider ={
  "grpId": "20",
  "id": "644",
  "logo": "644.gif",
  "receiptName": "",
  "sName": "Activ",
  "small_logo": "",
  "tag": "visible",
  "__objects": [
    {
      "__type": "constParams"
    },
    {
      "__type": "pages",
      "__objects": [
        {
          "pageId": "30393",
          "title": "",
          "useOnline": "true",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Телефоныңыздың нөмірін енгізіңіз",
                  "footer": "Назар аударыныз! Телефон нөмірі (ХХХ) ХХХ-ХХ-ХХ форматында, сегізсіз енгізіледі.",
                  "mask": "8(<!^\\d+${3}>)<!^\\d+${7}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^(701|702|775)\\d{7}$",
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