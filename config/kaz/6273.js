UIProvider ={
  "grpId": "123",
  "id": "6273",
  "logo": "6273.gif",
  "receiptName": "",
  "sName": "Асыл Арман",
  "small_logo": "",
  "tag": "visible,change",
  "__objects": [
    {
      "__type": "constParams"
    },
    {
      "__type": "pages",
      "__objects": [
        {
          "pageId": "30530001",
          "title": "",
          "useOnline": "true",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Төлеміңіздің кодын енгізіңіз",
                  "footer": "",
                  "mask": "<!^\\d+${1,15}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{1,15}$",
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
          "pageId": "30530002",
          "title": "",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "disp_name": "disp1",
                  "disp_type": "fixedsum",
                  "header": "Төлеуге",
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