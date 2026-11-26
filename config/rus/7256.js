UIProvider ={
  "grpId": "-47",
  "id": "7256",
  "logo": "-47.gif",
  "receiptName": "",
  "sName": "OTAU TV<br>Пакет \"Стандарт\"",
  "small_logo": "",
  "tag": "visible",
  "__objects": [
    {
      "__type": "constParams",
      "__objects":[{
      	"__type":"param",
      	"name":"_receipt_prt_operator",
      	"value":"Оператор: "}]
    },
    {
      "__type": "pages",
      "__objects": [
        {
          "pageId": "6272001",
          "title": "",
          "useOnline": "true",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Введите номер лицевого счета",
                  "footer": "",
                  "mask": "<!^\\d+${1,6}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{1,6}$",
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
          "pageId": "6272002",
          "title": "",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "disp_name": "disp1",
                  "disp_type": "extra",
                  "header": "Лицевой счет:",
                  "mask": "<!^.+${1,255}>",
                  "name": "data",
                  "nobr": "false",
                  "regexp": "^.+$",
                  "strip": "false",
                  "type": "disp_input",
                  "visible": "true"
                },
                 {
                  "disp_name": "disp2",
                  "disp_type": "extra",
                  "header": "Имя абонента:",
                  "mask": "<!^.+${1,255}>",
                  "name": "data2",
                  "nobr": "false",
                  "regexp": "^.+$",
                  "strip": "false",
                  "type": "disp_input",
                  "visible": "true"
                },
                {
                  "disp_name": "disp3",
                  "disp_type": "extra",
                  "header": "Текущий пакет каналов:",
                  "mask": "<!^.+${1,255}>",
                  "name": "data3",
                  "nobr": "false",
                  "regexp": "^.+$",
                  "strip": "false",
                  "type": "disp_input",
                  "visible": "true"
                },
                {
                  "disp_name": "disp4",
                  "disp_type": "extra",
                  "header": "Оплачиваемый пакет каналов:",
                  "mask": "<!^.+${1,255}>",
                  "name": "data4",
                  "nobr": "false",
                  "regexp": "^.+$",
                  "strip": "false",
                  "type": "disp_input",
                  "visible": "true"
                },
                {
                  "disp_name": "disp5",
                  "disp_type": "extra",
                  "header": "Остаток денежных средств на начало текущего дня:",
                  "mask": "<!^.+${1,255}>",
                  "name": "data5",
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