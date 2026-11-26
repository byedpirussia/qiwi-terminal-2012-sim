UIProvider ={
  "grpId": "103",
  "id": "5963",
  "logo": "34.gif",
  "receiptName": "",
  "sName": "Inside",
  "small_logo": "",
  "tag": "visible",
  "__objects": [
    {
      "__type": "constParams",
      "__objects":[{
      	"__type":"param",
      	"name":"_receipt_prt_top_msg",
      	"value":"Для подтверждения оплаты позвоните по номерам 2-733-822, 2-733-815  (внут 105) и продиктуйте НОМЕР ТЕРМИНАЛА, точную ДАТУ, ВРЕМЯ, СУММУ оплаты оператору."}]
    },
    {
      "__type": "pages",
      "__objects": [
        {
          "pageId": "30197",
          "title": "",
          "useOnline": "true",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Введите название организации",
                  "footer": "ВНИМАНИЕ!!! Обязательно сохраните чек об оплате!!! Для подтверждения оплаты позвоните по номерам 2-733-822, 2-733-815  (внут 105) и продиктуйте НОМЕР ТЕРМИНАЛА, точную ДАТУ, ВРЕМЯ, СУММУ оплаты оператору.",
                  "mask": "<!^.+${1,50}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^.{1,50}$",
                  "strip": "True",
                  "type": "text_input"
                },
                {
                  "layout": "AL",
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