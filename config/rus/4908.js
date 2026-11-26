UIProvider ={
  "grpId": "123",
  "id": "4908",
  "logo": "4908.gif",
  "receiptName": "",
  "sName": "Mary Kay",
  "small_logo": "",
  "tag": "visible",
   "__objects": [
    {
      "__type": "constParams",
      "__objects":[{
      	"__type":"param",
      	"name":"_receipt_Комиссия QIWI составляет",
      	"value":"1%"}]
    },
    {
      "__type": "pages",
      "__objects": [
        {
          "pageId": "30632",
          "title": "",
          "useOnline": "true",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Введите номер консультанта",
                  "footer": "",
                  "mask": "<!^\\d+${6,10}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{6,10}$",
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
          "pageId": "30634",
          "title": "",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "disp_name": "disp1",
                  "disp_type": "extra",
                  "header": "Проверте Ваши данные:",
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