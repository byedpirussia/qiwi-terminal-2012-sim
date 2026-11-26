var y = 0;

function getCastoPrv(id) {
    if (!(extraPrv.length && fieldsDescr.length))
        return null;
    var a = [],
        o = {},
        sMask = '',
        sLayout = 'AL';
    for (var i = 0; i < extraPrv.length; i++) {
        if (parseInt(extraPrv[i][0], 10) == Math.abs(parseInt(id, 10))) {
            y++;
            o.id = extraPrv[i][1][0].toString();
            o.sName = extraPrv[i][1][1];
            o.logo = extraPrv[i][1][2];
            o.grpId = extraPrv[i][0];
            o.tag = "visible";
            sMask = fieldsDescr[o.id][0]["fieldMask"].replace(/\\/g, "");
            sMask = sMask.replace(/d{/g, "<!^\\d+${");
            sMask = sMask.replace(/w{/g, "<!^\\w+${");
            sMask = sMask.replace(/}/g, "}>");
            sLayout = (/\\w/g.test(sMask)) ? 'AL' : 'DG';
            o.__objects = 
            [
                {"__type": "constParams"},
                {
                    "__type": "pages",
                    "__objects": 
                    [
                        {
                            "pageId": y.toString(),
                            "__objects": 
                            [
                                {
                                    "__type": "controls",
                                    "__objects": 
                                    [
                                        {
                                            "header": fieldsDescr[o.id][0]["title"],
                                            "footer": "",
                                            "mask": sMask,
                                            "name": "account",
                                            "nobr": "false",
                                            "regexp": "^" + fieldsDescr[o.id][0]["fieldMask"] + "$",
                                            "strip": "True",
                                            "type": "text_input"
                                        },
                                        {
                                            "layout": sLayout,
                                            "type": "keyboard"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ];
            a.push(o);
            o={};
            
        }
    }
    return a;
   
}

function getCastomShort(a) {
    var o = {},
        aPrv = [];
    for (var i = 0; i < a.length; i++) {
        o.elementType = 'PROVIDER';
        o.elementValue = {
            "id" : a[i]["id"].toString(),
            "logo" : a[i]["logo"],
            "small_logo" : '',
            "sName" : a[i]["sName"],
            "tag" : a[i]["tag"]
        }
        aPrv.push(o);
        o={};
    }
    return aPrv;
}