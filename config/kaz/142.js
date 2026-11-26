UIProvider ={
  "grpId": "20",
  "id": "142",
  "logo": "142.gif",
  "receiptName": "",
  "sName": "Beeline",
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
          "pageId": "30849",
          "title": "",
          "useOnline": "",
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
                  "regexp": "^(777\\d|705\\d|771[^4])\\d{6}$",
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