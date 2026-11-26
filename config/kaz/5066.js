UIProvider = {
    "tag": "change",
    "grpId": "123",
    "id": "5066",
    "logo": "5066.gif",
    "sName": "Nikken",
    "tag": "visible",
    "__objects": [{ "__type": "constParams" },
  { "__type": "pages",
      "__objects": [{ "pageId": "6970",
          "__objects": [{ "__type": "controls",
              "__objects": [{ "disp_type": "receipt",
                  "header": "Тапсырыс нөмірін енгізіңіз",
                  "mask": "<!^\\d+${1,20}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{1,20}$",
                  "strip": "false",
                  "type": "text_input"
              },
    { "layout": "DG",
        "type": "keyboard"
    }]
          }]
      },
    { "pageId": "6971",
        "__objects": [{ "__type": "controls",
            "__objects": [{ "disp_type": "receipt",
            	"disp_desc": "Тапсырыс нөмірі",
                "header": "Тапсырыс нөмірін енгізіңіз",
                "mask": "<!^\\d+${6}>",
                "name": "_extra_ev_account1",
                "nobr": "false",
                "regexp": "^\\d{6}$",
                "strip": "false",
                "type": "text_input"
            },
    { "layout": "DG",
        "type": "keyboard"
    }]
        }]
    },
    { "pageId": "6972",
        "useOnline": "true",
        "__objects": [{ "__type": "controls",
            "__objects": [{ "disp_type": "fixedsum",
                "header": "Тапсырыс сома",
                "mask": "<!^\\d+${1,6}>",
                "name": "_extra_ev_account2",
                "nobr": "false",
                "regexp": "^\\d{1,6}$",
                "strip": "false",

                "type": "text_input"
            },

    { "layout": "DG", "type": "keyboard"}]
        }]
    }]
  }]
};
