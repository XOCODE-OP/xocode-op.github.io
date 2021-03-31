
function getDataAsJson(_generate, _i)
{
    if ($("#labelcheck").is(":checked"))
    {
        let pairs = {};
        $(".q-input-cont").each(function()
        {
            let _key = $(this).find(".text-cont[data-type='label'] input").val();
            let _value = "";
            if (_generate)
            {
                let _type = $(this).find(".gen_data_select").val();
                if (_type != "inc_id")
                    _value = generateData(_type);
                else
                    _value = _i.toString();
            }
            else
            {
                _value = $(this).find(".text-cont[data-type='output'] input").val();
            }
            pairs[_key] = _value;
        });
        return pairs;
    }
    else
    {
        let arro = [];
        $(".q-input-cont").each(function()
        {
            if (_generate)
            {
                let _type = $(this).find(".gen_data_select").val();
                arro.push( generateData(_type) );
            }
            else
            {
                arro.push( $(this).find(".text-cont[data-type='output'] input").val() );
            }
        });
        return arro;
    }
}

function generateRowsAsJson(_rows)
{
    let arro = [];
    for (let i = 0; i < _rows; i++)
    {
        arro.push( getDataAsJson(true, i) );
    }
    return arro;
}

function generateData(_type)
{
    if (_type == "fullname")                return SDG.fullName();
    else if (_type == "lastname")           return SDG.lastName();
    else if (_type == "firstname")          return SDG.firstName();
    else if (_type == "digit")              return SDG.digit().toString();
    else if (_type == "digits")             return SDG.digits(20).toString();
    else if (_type == "job")                return SDG.job();
    else if (_type == "honorific")          return SDG.honorific();
    else if (_type == "sentence")           return SDG.placeholderTextSentence();
    else if (_type == "paragraph")          return SDG.placeholderTextParagraph();
    else if (_type == "boolean")            return SDG.boolean();
    else if (_type == "allspecialchars")    return SDG.charAnyMulti(20);
    else if (_type == "lowchars")           return SDG.charLowerMulti(20);
    else if (_type == "upperchars")         return SDG.charUpperMulti(20);
    else if (_type == "lowernumberchars")   return SDG.charLowerNumberMulti(20);
    else if (_type == "uppernumberchars")   return SDG.charUpperNumberMulti(20);
    else if (_type == "upperlowernumberchars")    return SDG.charUpperLowerNumberMulti(20);
    else if (_type == "lowernumberspecialchars")  return SDG.charLowerNumberSpecialMulti(20);
    else if (_type == "uppernumberspecialchars")  return SDG.charUpperNumberSpecialMulti(20);
    else if (_type == "decimal")            return SDG.decimal(0, 9, 16);
    else if (_type == "fraction")           return SDG.fraction();
    else if (_type == "unixtime")           return SDG.unixtime().toString();
    else if (_type == "email")              return SDG.email();
    else if (_type == "nickname")           return SDG.nickName();
    else if (_type == "url")                return SDG.url();
    else if (_type == "ipv4")               return SDG.ipv4();
    else if (_type == "useragent")          return SDG.userAgent();
    else if (_type == "hexcolor")           return SDG.hexColor();
    else if (_type == "macaddress")         return SDG.macAddress();
    else if (_type == "uuid")               return SDG.uuid();
    else if (_type == "phonenumber")        return SDG.phoneNumber();
    else if (_type == "moneyamount")        return SDG.moneyAmount();
    else if (_type == "currencysymbol")     return SDG.currencySymbol();
    else if (_type == "currencycode")       return SDG.currencyCode();
    else if (_type == "currencyname")       return SDG.currencyName();
    else if (_type == "color")              return SDG.color();
    else if (_type == "city")               return SDG.city();
    else if (_type == "country")            return SDG.country();
    else if (_type == "countrycode")        return SDG.countryCode();
    else if (_type == "longitude")          return SDG.longitude();
    else if (_type == "latitude")           return SDG.latitude();
    else if (_type == "address")            return SDG.address();
    else if (_type == "detailedaddress")    return SDG.detailedAddress();
    else if (_type == "month")              return SDG.month();
    else if (_type == "weekdayname")        return SDG.weekdayName();
    else if (_type == "operatingsystem")    return SDG.operatingSystem();
    else if (_type == "isp")                return SDG.isp();
    else if (_type == "browser")            return SDG.browser();
    else if (_type == "screensize")         return SDG.screenSize();
}

function downloadObjectAsJson(exportObj, exportName)
{
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj, null, 2));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", exportName);
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

function downloadGeneric(dataStr, exportName)
{
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", exportName);
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

function convertOutDataTypeToSQLtype(_type)
{
    if (_type == "sentence")
    {
        return "TEXT";
    }
    else if (_type == "boolean")
    {
        return "BOOLEAN";
    }
    else if (_type == "digits")
    {
        return "INT(22)";
    }
    else if (_type == "moneyamount" || _type == "fraction" || _type == "decimal")
    {
        return "DECIMAL(10,20)";
    }
    else if (_type == "latitude" || _type == "longitude")
    {
        return "DOUBLE(30)";
    }
    else 
    {
        return "VARCHAR(255)";
    }
}

function checkIfSqlExportIsGo()
{
    if ($("#sql_table").val().length > 0)
    {
        if ($("#labelcheck").is(":checked"))
        {
            $(".sqlbuttons").show()
            return;
        }
    }
    $(".sqlbuttons").hide();
}

function getConfigJson()
{
    let config = {};
    config.rows = [];
    if ($("#labelcheck").is(":checked")) 
    {
        config.labels = true;

        $(".q-input-cont").each(function()
        {
            let row = {};
            row.label = $(this).find(".text-cont[data-type='label'] input").val();
            row.type  = $(this).find(".gen_data_select").val();
            row.value = $(this).find(".text-cont[data-type='output'] input").val();
            config.rows.push(row);
        });
    }
    else
    {
        $(".q-input-cont").each(function()
        {
            let row = {};
            row.type = $(this).find(".gen_data_select").val();
            row.value = $(this).find(".text-cont[data-type='output'] input").val();
            config.rows.push(row);
        });
    }
    return config;
}

function buildUIFromConfig(config)
{
    if (!config.rows || config.rows.length < 1) return;

    $("#labelcheck").prop("checked", config.labels);
    $(".text-cont[data-type='label']").attr("data-active", ""+config.labels);
    if (config.labels == true)  $(".text-cont[data-type='label']").show();
    else                        $(".text-cont[data-type='label']").hide();

    //load should be called on document ready
    //at this point we should have one row, the base
    //the previous code will set the label up
    for (let i = 0; i < config.rows.length; i++)
    {
        let e = config.rows[i];

        let he = $( ".q-input-cont:eq("+i+")" );
        if (config.labels == true) he.find("input[name='txt_label']").val(""+e.label).change().click();
        he.find("input[name='output']").val(""+e.value).change().click();
        if (e.value.length > 0)     he.find("span").addClass('hoverlabel-lock');
        he.find(".gen_data_select").val(""+e.type).change();
        
        if (i < config.rows.length -1)
            $( ".q-input-cont:last-of-type" ).clone(true).appendTo( ".list-of-fields" );
    }
    
    checkIfSqlExportIsGo();
}

function saveToStorage()
{
    let _data = getConfigJson();
    localStorage.setItem("mockr_config", JSON.stringify(_data));
}

function loadFromStorage()
{
    let _datastr = localStorage.getItem("mockr_config");
    let _data = JSON.parse(_datastr);
    buildUIFromConfig(_data);
}

function toggleLabelCheck()
{
    if ($("#labelcheck").is(":checked"))
    {
        $(".text-cont[data-type='label']").show();
        $(".text-cont[data-type='label']").attr("data-active", "true");
    }
    else if (!$("#labelcheck").is(":checked"))
    {
        $(".text-cont[data-type='label']").hide();
        $(".text-cont[data-type='label']").attr("data-active", "false");
    }
    checkIfSqlExportIsGo();
}

function exportSqlStatic()
{
    let outsql = '';
    let total = $(".q-input-cont").length;
    if ( $("#sql_table_create").is(":checked") )
    {
        outsql = "CREATE TABLE `" + $("#sql_table").val() + "` (";
        let i1 = 0;
        $(".q-input-cont").each(function()
        {
            let _key = $(this).find(".text-cont[data-type='label'] input").val();
            let _type = $(this).find(".gen_data_select").val();
            outsql = outsql + "`" + _key + "` " + convertOutDataTypeToSQLtype(_type);
            if (i1 != total - 1) outsql = outsql + ", ";
            i1++;
        });
        outsql = outsql + ");";
    }

    outsql = outsql + "INSERT INTO " + $("#sql_table").val() + " (";
    let i2 = 0;
    $(".q-input-cont").each(function()
    {
        let _key = $(this).find(".text-cont[data-type='label'] input").val();
        outsql = outsql + "`" + _key + "`";
        if (i2 != total - 1) outsql = outsql + ", ";
        i2++;
    });
    outsql = outsql + ")";

    outsql = outsql + " VALUES (";
    let i3 = 0;
    $(".q-input-cont").each(function()
    {
        let _value = $(this).find(".text-cont[data-type='output'] input").val();
        let _type = $(this).find(".gen_data_select").val();
        if (_type != "boolean")
            outsql = outsql + "'" + _value + "'";
        else
            outsql = outsql + _value;
        if (i3 != total - 1) outsql = outsql + ", ";
        i3++;
    });
    outsql = outsql + ");";

    $("#debug").text(outsql);
}

function exportSqlGenerate()
{
    let outsql = '';
    let rownum = parseInt( $("#sqlrownum").val() );
    if (rownum < 1) return;

    let total = $(".q-input-cont").length;
    if ( $("#sql_table_create").is(":checked") )
    {
        outsql = "CREATE TABLE `" + $("#sql_table").val() + "` (";
        let i1 = 0;
        $(".q-input-cont").each(function()
        {
            let _key = $(this).find(".text-cont[data-type='label'] input").val();
            let _type = $(this).find(".gen_data_select").val();
            outsql = outsql + "`" + _key + "` " + convertOutDataTypeToSQLtype(_type);
            if (i1 != total - 1) outsql = outsql + ", ";
            i1++;
        });
        outsql = outsql + ");";
    }

    outsql = outsql + "INSERT INTO " + $("#sql_table").val() + " (";
    let i2 = 0;
    $(".q-input-cont").each(function()
    {
        let _key = $(this).find(".text-cont[data-type='label'] input").val();
        outsql = outsql + "`" + _key + "`";
        if (i2 != total - 1) outsql = outsql + ", ";
        i2++;
    });
    outsql = outsql + ") VALUES ";

    for (let r = 0; r < rownum; r++)
    {
        outsql = outsql + "(";
        let i3 = 0;
        $(".q-input-cont").each(function()
        {
            let _type = $(this).find(".gen_data_select").val();
            let _value = "";
            if (_type != "inc_id")
                _value = generateData(_type);
            else
                _value = (r+1).toString();
            
            if (_type != "boolean")
                outsql = outsql + "'" + _value + "'";
            else
                outsql = outsql + _value;
            if (i3 != total - 1) outsql = outsql + ", ";
            i3++;
        });
        if (r != rownum - 1)
            outsql = outsql + "), ";
        else
            outsql = outsql + ");";
    }
    
    $("#debug").text(outsql);
    $("#debug").select();
}


$(document).ready(function ()
{
    loadFromStorage();

    $(".text-cont").click(function ()
    {
        $(this).find("input[type='text']").focus();
        saveToStorage();
    });

    $(".q-input-cont input[type='text']").change(function(e)
    {
        if ($(this).val().length > 0)
            $(this).parent().find("span").addClass('hoverlabel-lock');
        else
            $(this).parent().find("span").removeClass('hoverlabel-lock');

        saveToStorage();
    });

    $(".gen_data_select").change(function()
    {
        let textbox = $(this).parent().find("input[name='output']");
        textbox.val( generateData($(this).val()) );
        textbox.change();
        saveToStorage();
    });

    $("#addfield").click(function()
    {
        $( ".q-input-cont:last-of-type" ).clone(true).appendTo( ".list-of-fields" );
        saveToStorage();
    });

    $(".refresh_button").click(function ()
    {
        $(this).parent().find(".gen_data_select").change();
        saveToStorage();
    });

    $(".killfield").click(function()
    {
        if ($(".killfield").length > 1) $(this).parent().remove();
        saveToStorage();
    });

    $("#labelcheck").change(function ()
    {
        toggleLabelCheck();
        saveToStorage();
    });

    $("#but_exp_dat-row").click(function()
    {
        saveToStorage();
        downloadObjectAsJson(getDataAsJson(false), "data.json");
    });

    $("#but_exp_many-rows").click(function()
    {
        saveToStorage();
        let rownum = parseInt( $("#jsonrownum").val() );
        if (rownum > 0)
        {
            downloadObjectAsJson( generateRowsAsJson(rownum), "data.json");
            //$("#debug").text( generateRowsAsJson(rownum) );
        }
    });

    $("#sql_table").change(function()
    {
        checkIfSqlExportIsGo();
        saveToStorage();
    });

    $("#sql_table").keyup(function()
    {
        checkIfSqlExportIsGo();
        saveToStorage();
    });

    $("#but_exp_csv-static").click(function ()
    {
        saveToStorage();

        let muhjson = getDataAsJson(false);
        let csvContent = "data:text/csv;charset=utf-8,";
        csvContent += "\r\n";
        if ($("#labelcheck").is(":checked"))
        {
            //json with labels
            //csvContent = csvContent.substr(0, csvContent.length - 1);
            //csvContent += "\r\n";
            var labels = [];
            for (let key in muhjson)
            {
                if (muhjson.hasOwnProperty(key))
                {           
                    labels.push(key);
                    csvContent += "\"" + key + "\"";
                    csvContent += ",";
                }
            }
            csvContent = csvContent.substr(0, csvContent.length - 1);
            csvContent += "\r\n";

            for (let i = 0; i < labels.length; i++)
            {
                const e = muhjson[labels[i]];
                csvContent += e + ",";
            }
            csvContent = csvContent.substr(0, csvContent.length - 1);
            csvContent += "\r\n";
        }
        else
        {
            //array
            for (let i = 0; i < muhjson.length; i++)
            {
                const e = muhjson[i];
                csvContent += e + ",";
                csvContent += "\r\n";
            }
            csvContent = csvContent.substr(0, csvContent.length - 1);
        }
        console.log(csvContent);
        //console.log(muhjson);
        downloadGeneric(csvContent, "data-table.csv");
    });

    $("#but_exp_csv-many").click(function ()
    {
        saveToStorage();

        let amount_of_rows = parseInt( $("#csvtotalrows").val() );
        if (amount_of_rows > 0)
        {
            let muhjson = generateRowsAsJson(amount_of_rows);
            console.log(muhjson);

            let csvContent = "data:text/csv;charset=utf-8,";
            csvContent += "\r\n";

            var labels = null
            if ($("#labelcheck").is(":checked"))
            {
                labels = [];
                for (let key in muhjson[0])
                {
                    if (muhjson[0].hasOwnProperty(key))
                    {           
                        labels.push(key);
                        csvContent += "\"" + key + "\"";
                        csvContent += ",";
                    }
                }
                csvContent = csvContent.substr(0, csvContent.length - 1);
                csvContent += "\r\n";

                for (let r = 0; r < muhjson.length; r++)
                {
                    for (let i = 0; i < labels.length; i++)
                    {
                        let e = muhjson[r][labels[i]];
                        if (e.includes("'")) e = e.split("'").join(" ");
                        if (e.includes(",")) e = e.split(",").join(" ");
                        csvContent += e + ",";
                    }
                    csvContent = csvContent.substr(0, csvContent.length - 1);
                    csvContent += "\r\n";
                }
            }
            else
            {
                //array //TEST TODO:
                for (let r = 0; r < muhjson.length; r++)
                {
                    let ro = muhjson[r];
                    console.log(ro);
                    for (let fi = 0; fi < ro.length; fi++)
                    {
                        let e = ro[fi];
                        if (e.includes("'")) e = e.split("'").join(" ");
                        if (e.includes(",")) e = e.split(",").join(" ");
                        csvContent += e + ",";
                    }
                    csvContent = csvContent.substr(0, csvContent.length - 1);
                    csvContent += "\r\n";
                }
            }

            downloadGeneric(csvContent, "data-table.csv");
        }

    });

    $("#but_exp_sql_shown").click(function ()
    {
        saveToStorage();
        exportSqlStatic();
    });

    $("#but_exp_sql_many-rows").click(function ()
    {
        saveToStorage();
        exportSqlGenerate();
    });

    $("#debug").click(function()
    {
        $("#debug").select();
    });

});