UIProvider ={
  "grpId": "123",
  "id": "7467",
  "logo": "7467.gif",
  "receiptName": "",
  "sName": "GRA.KZ",
  "small_logo": "",
  "tag": "visible",
  "__objects": [
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
                  "header": "Телефоныңыздың нөмірін енгізіңіз",
                  "footer": "Назар аударыныз! Телефон нөмірі (ХХХ) ХХХ-ХХ-ХХ форматында, сегізсіз енгізіледі.",
                 "mask": "8(<!^\\d+${3}>)<!^\\d+${7}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{10}$",
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
        },
		{
          "pageId": "30382",
          "title": "",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "disp_name": "disp1",
                  "disp_type": "",
                  "header": "Қазіргі баланс",
                  "mask": "<!^.+${1,255}>",
                  "name": "data",
                  "nobr": "false",
                  "regexp": "^.+$",
                  "strip": "false",
                  "type": "disp_input",
                  "visible": "true"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}