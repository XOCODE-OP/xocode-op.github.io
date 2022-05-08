// jshint esversion: 11

const LOCAL_STORAGE_KEY = "MOCKR";

function saveToStorage(data)
{
    // console.trace();
    if (!data)
    {
        console.log("saveToStorage ABORTED because data is", data);
        return;
    }
    // console.log("saveToStorage()", data);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
}

function loadFromStorage()
{
    let _datastr = localStorage.getItem(LOCAL_STORAGE_KEY);
    // console.log("raw load", _datastr);
    if (!_datastr || _datastr === undefined || _datastr == "undefined") // literally the string saying undefined due to previous saving error
    {
        console.log("no storage");
        return null;
    }
    else
    {
        console.log("loadFromStorage", _datastr, typeof _datastr, _datastr.length);
        return JSON.parse(_datastr);
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
    if (_type == "fullname")                return Mockr.fullName();
    else if (_type == "lastname")           return Mockr.lastName();
    else if (_type == "firstname")          return Mockr.firstName();
    else if (_type == "digit")              return Mockr.digit();
    else if (_type == "digits")             return Mockr.digits(20);
    else if (_type == "job")                return Mockr.job();
    else if (_type == "inc_id")             return 0;
    else if (_type == "honorific")          return Mockr.honorific();
    else if (_type == "sentence")           return Mockr.placeholderTextSentence();
    else if (_type == "paragraph")          return Mockr.placeholderTextParagraph();
    else if (_type == "boolean")            return Mockr.boolean();
    else if (_type == "allspecialchars")    return Mockr.charAnyMulti(20);
    else if (_type == "lowchars")           return Mockr.charLowerMulti(20);
    else if (_type == "upperchars")         return Mockr.charUpperMulti(20);
    else if (_type == "lowernumberchars")   return Mockr.charLowerNumberMulti(20);
    else if (_type == "uppernumberchars")   return Mockr.charUpperNumberMulti(20);
    else if (_type == "upperlowernumberchars")    return Mockr.charUpperLowerNumberMulti(20);
    else if (_type == "lowernumberspecialchars")  return Mockr.charLowerNumberSpecialMulti(20);
    else if (_type == "uppernumberspecialchars")  return Mockr.charUpperNumberSpecialMulti(20);
    else if (_type == "decimal")            return Mockr.decimal(0, 9, 16);
    else if (_type == "fraction")           return Mockr.fraction();
    else if (_type == "unixtime")           return Mockr.unixtime();
    else if (_type == "email")              return Mockr.email();
    else if (_type == "nickname")           return Mockr.nickName();
    else if (_type == "url")                return Mockr.url();
    else if (_type == "ipv4")               return Mockr.ipv4();
    else if (_type == "useragent")          return Mockr.userAgent();
    else if (_type == "hexcolor")           return Mockr.hexColor();
    else if (_type == "macaddress")         return Mockr.macAddress();
    else if (_type == "uuid")               return Mockr.uuid();
    else if (_type == "phonenumber")        return Mockr.phoneNumber();
    else if (_type == "moneyamount")        return Mockr.moneyAmount();
    else if (_type == "currencysymbol")     return Mockr.currencySymbol();
    else if (_type == "currencycode")       return Mockr.currencyCode();
    else if (_type == "currencyname")       return Mockr.currencyName();
    else if (_type == "color")              return Mockr.color();
    else if (_type == "city")               return Mockr.city();
    else if (_type == "country")            return Mockr.country();
    else if (_type == "countrycode")        return Mockr.countryCode();
    else if (_type == "longitude")          return Mockr.longitude();
    else if (_type == "latitude")           return Mockr.latitude();
    else if (_type == "address")            return Mockr.address();
    else if (_type == "detailedaddress")    return Mockr.detailedAddress();
    else if (_type == "month")              return Mockr.month();
    else if (_type == "weekdayname")        return Mockr.weekdayName();
    else if (_type == "operatingsystem")    return Mockr.operatingSystem();
    else if (_type == "isp")                return Mockr.isp();
    else if (_type == "browser")            return Mockr.browser();
    else if (_type == "screensize")         return Mockr.screenSize();
    return null;
}

function downloadObjectAsJson(exportObj, exportName)
{
    console.log("downloadObjectAsJson", exportObj, exportName);
    let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj, null, 2));
    let downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", exportName);
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

function downloadGeneric(dataStr, exportName)
{
    let downloadAnchorNode = document.createElement('a');
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

function exportRowsAsCSV(useIdentifiers, fields, rownum)
{
    if (rownum < 1) return;

    let muhjson = exportRowsAsJSON(useIdentifiers, fields, rownum);

    let csvContent = "data:text/csv;charset=utf-8,"; //for browser download function to work

    let labels = null;
    if (useIdentifiers)
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
        csvContent = csvContent.substring(0, csvContent.length - 1) + "\r\n";

        for (let r = 0; r < muhjson.length; r++)
        {
            for (let i = 0; i < labels.length; i++)
            {
                let e = ""+muhjson[r][labels[i]];
                if (e.includes("'")) e = e.split("'").join(" ");
                if (e.includes(",")) e = e.split(",").join(" ");
                csvContent += e + ",";
            }
            csvContent = csvContent.substring(0, csvContent.length - 1) + "\r\n";
        }
    }
    else
    {
        for (let r = 0; r < muhjson.length; r++)
        {
            let ro = muhjson[r];
            for (let fi = 0; fi < ro.length; fi++)
            {
                let e = ""+ro[fi];
                if (e.includes("'")) e = e.split("'").join(" ");
                if (e.includes(",")) e = e.split(",").join(" ");
                csvContent += e + ",";
            }
            csvContent = csvContent.substring(0, csvContent.length - 1) + "\r\n";
        }
    }

    return csvContent;
}

function exportRowsAsJSON(useIdentifiers, fields, rownum)
{
    if (rownum < 1) return;
    let outobj = [];
    if (useIdentifiers)
    {
        for (let i = 0; i < rownum; i++)
        {
            let rowobj = {};
            for (let fi = 0; fi < fields.length; fi++)
            {
                const _field = fields[fi];
                let _data;
                if (_field.type != "inc_id") _data = generateData(_field.type);
                else _data = i;
                rowobj[_field.identifier] = _data;
            }
            outobj.push(rowobj);
        }
            
    }
    else
    {
        for (let i = 0; i < rownum; i++)
        {
            let rowobj = [];
            for (let fi = 0; fi < fields.length; fi++)
            {
                const _field = fields[fi];
                let _data;
                if (_field.type != "inc_id") _data = generateData(_field.type);
                else _data = i;
                rowobj.push(_data);
            }
            outobj.push(rowobj);
        }
    }
    return outobj;
}

function exportRowsAsSQL(fields, rownum, tableCreationInstruction, sqltablename = null)
{
    let outsql = 'data:text/plain;charset=utf-8,';
    if (rownum < 1) return;

    if ( tableCreationInstruction === true )
    {
        outsql += "CREATE TABLE `" + sqltablename + "` (";
        for (let fi = 0; fi < fields.length; fi++)
        {
            const _field = fields[fi];
            outsql += "`" + _field.identifier + "` " + convertOutDataTypeToSQLtype(_field.type);
            if (fi != fields.length - 1) outsql += ", ";
        }
        outsql += ");\r\n";
    }

    outsql += "INSERT INTO " + sqltablename + " (";
                
    for (let fi = 0; fi < fields.length; fi++)
    {
        const _field = fields[fi];
        outsql += "`" + _field.identifier + "`";
        if (fi != fields.length - 1) outsql += ", ";
    }
    outsql += ") VALUES \r\n";

    for (let i = 0; i < rownum; i++)
    {
        outsql += "(";
        for (let fi = 0; fi < fields.length; fi++)
        {
            const _field = fields[fi];
            let _data;
            if (_field.type != "inc_id") _data = ""+generateData(_field.type);
            else _data = ""+i;
            
            if (_field.type != "boolean")
                outsql += "\"" + _data + "\"";
            else
                outsql += _data;
            if (fi != fields.length - 1) outsql += ", ";
        }

        if (i != rownum - 1)
            outsql += "), \r\n";
        else
            outsql += ");";
    }
    return outsql;   
}

window.addEventListener('load', function(event)
{
    ReactDOM.createRoot(document.querySelector('#reactmain')).render(React.createElement(AppMain));            
});

