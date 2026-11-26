UIProvider ={
  "grpId": "382",
  "id": "2167",
  "logo": "2167.gif",
  "receiptName": "",
  "sName": "МАЭК - Казатомпром",
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
          "pageId": "30995",
          "title": "",
          "useOnline": "false",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Өзіңіздің дербес есепшотыңызды енгізіңіз/келісім шарт №",
                  "footer": "",
                  "mask": "<!^\\d+${1,20}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d+$",
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
          "pageId": "30996",
          "title": "",
          "useOnline": "false",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Электр қуатының күндізгі көрсетулері",
                  "footer": "",
                  "mask": "<!^\\d*${1,10}>",
                  "name": "_extra_ev_account1",
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
        },	
		{
          "pageId": "30997",
          "title": "",
          "useOnline": "false",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Электр қуатының түнгі көрсетулері",
                  "footer": "",
                  "mask": "<!^\\d*${1,10}>",
                  "name": "_extra_ev_account2",
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
        },		
		{
          "pageId": "30998",
          "title": "",
          "useOnline": "false",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Электр қуатының кешкі көрсетулері",
                  "footer": "",
                  "mask": "<!^\\d*${1,10}>",
                  "name": "_extra_ev_account3",
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
        },		
		{
          "pageId": "30999",
          "title": "",
          "useOnline": "false",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Ішетін су көрсетілімі",
                  "footer": "",
                  "mask": "<!^.+${1,15}>",
                  "name": "_extra_ev_account4",
                  "nobr": "false",
                  "regexp": "^.+$",
                  "strip": "True",
                  "type": "text_input"
                },
                {
                  "layout": "DGD",
                  "type": "keyboard"
                }
              ]
            }
          ]
        },		
		{
          "pageId": "31000",
          "title": "",
          "useOnline": "false",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Ыстық су көрсетілімі",
                  "footer": "",
                  "mask": "<!^.+${1,15}>",
                  "name": "_extra_ev_account5",
                  "nobr": "false",
                  "regexp": "^.+$",
                  "strip": "True",
                  "type": "text_input"
                },
                {
                  "layout": "DGD",
                  "type": "keyboard"
                }
              ]
            }
          ]
        },		
		{
          "pageId": "31001",
          "title": "",
          "useOnline": "true",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Техникалық су көрсетілімі",
                  "footer": "",
                  "mask": "<!^.+${1,15}>",
                  "name": "_extra_ev_account6",
                  "nobr": "false",
                  "regexp": "^.+$",
                  "strip": "True",
                  "type": "text_input"
                },
                {
                  "layout": "DGD",
                  "type": "keyboard"
                }
              ]
            }
          ]
        },		
        {
          "pageId": "31002",
          "title": "",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "disp_name": "disp1",
                  "disp_type": "extra",
                  "header": "Терiлген нөмірдi тексерiнiз",
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