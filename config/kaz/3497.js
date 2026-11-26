UIProvider ={
  "grpId": "123",
  "id": "3497",
  "logo": "3497.gif",
  "receiptName": "",
  "sName": "Faberlic",
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
          "pageId": "30510",
          "title": "",
          "useOnline": "",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Сатып алушының жеке кодын енгізіңіз",
                  "footer": "",
                  "mask": "<!^.+${1,15}>",
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
          "pageId": "30511",
          "title": "",
          "useOnline": "true",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Тапсырыс нөмірін енгізіңіз",
                  "footer": "",
                  "mask": "<!^\\d+${4}>-<!^\\d+${1,20}>",
                  "name": "_extra_ev_acccunt1",
                  "nobr": "false",
                  "regexp": "^\\d{4}-\\d+$",
                  "strip": "False",
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
          "pageId": "30513",
          "title": "",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "disp_name": "disp1",
                  "disp_type": "extra",
                  "header": "Ақпараттарыңызды тексеріңіз:",
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