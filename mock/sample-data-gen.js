function SDG()
{
    var allowedSpecialCharIndecies = [33, 35, 36, 37, 38, 42, 43, 45, 61, 63, 64, 95];

    this.digit = function()
    {
        return Math.floor(Math.random() * 10);   
    };

    this.digits = function(amount)
    {
        let out = "";
        for (let index = 0; index < amount; index++) {
            out = out + "" + this.digit();
        }
        return out;
    };

    this.decimal = function(min,max,decimal_places)
    {
        return faker.finance.amount(min,max,decimal_places);
    };

    this.fraction = function()
    {
        return Math.random();
    };

    this.number = function(_min, _max)
    {
        return faker.random.number({min:_min, max:_max});
    };

    this.unixtime = function()
    {
        return faker.random.number({min:100, max:1566788129});
    };

    this.numbers = function(_min, _max, _amount)
    {
        let ro = "";
        for (let index = 0; index < _amount; index++) {
            ro = ro + "" + faker.random.number({min:_min, max:_max});
        }
        return ro;
    };

    this.boolean = function()
    {
        return faker.random.boolean();
    };

    this.isp = function()
    {
        let list = ["AT&T", "Comcast", "Time Warner Cable", "Verizon", "SoftBank", "NTT Docomo", 
        "Telekom", "Virgin Media", "Vodafone", "BT", "Sky", "UnityMedia", "TPG", "Belong", "Optus", "SpinTel"];
        return list[this.number(0, list.length-1)];
    };

    this.browser = function()
    {
        let list = ["chrome", "edge", "firefox", "ie", "opera", "safari"];
        return list[this.number(0, list.length-1)];
    };

    this.screenSize = function()
    {
        let list = ["640x480", "1280x720", "1024×768", "1366×768", "1280×800", "1920x1080", 
        "2560x1440", "1680x1050", "1680x1050", "1024x600", "800x480", "1080x1920", "750x1334", "720x1280", "1440x2960", 
        "1440x2560", "540x960", "640x1136", "720x1440"];
        return list[this.number(0, list.length-1)];
    };

    this.operatingSystem = function()
    {
        let ros = "none";
        let r = 0;
        r = this.number(1,6);
        if (r == 1)      ros = "android";
        else if (r == 2) ros = "ipad";
        else if (r == 3) ros = "iphone";
        else if (r == 4) ros = "linux";
        else if (r == 5) ros = "mac";
        else if (r == 6) ros = "windows";
        return ros;
    };

    this.charAny = function()
    {
        let r = 0;
        let stop = false
        while (!stop)
        {
            r = this.number(48,122);
            if ( (r >= 48 && r <= 57) || // numbers
                (r >= 65 && r <= 90)  || // upper letters
                (r >= 97 && r <= 122) || // lower letters
                (allowedSpecialCharIndecies.includes(r)) )   //special chars
            {
                stop = true;
            }
        }
        return String.fromCharCode(r);
    };

    this.charAnyMulti = function(_amount)
    {
        let ro = "";
        for (let i = 0; i < _amount; i++) {
            ro = ro + "" + this.charAny();
        }
        return ro;
    };

    this.charUpper = function()
    {
        return String.fromCharCode(this.number(65,90));
    };

    this.charUpperMulti = function(_amount)
    {
        let ro = "";
        for (let i = 0; i < _amount; i++) {
            ro = ro + "" + this.charUpper();
        }
        return ro;
    };

    this.charLower = function()
    {
        return String.fromCharCode(this.number(97,122));
    };

    this.charLowerMulti = function(_amount)
    {
        let ro = "";
        for (let i = 0; i < _amount; i++) {
            ro = ro + "" + this.charLower();
        }
        return ro;
    };

    this.charLowerNumber = function()
    {
        let r = 0;
        let stop = false
        while (!stop)
        {
            r = this.number(48,122);
            if ( (r >= 48 && r <= 57) || // numbers
                (r >= 97 && r <= 122) ) // lower letters
            {
                stop = true;
            }
        }
        return String.fromCharCode(r);
    };

    this.charLowerNumberMulti = function(_amount)
    {
        let ro = "";
        for (let i = 0; i < _amount; i++) {
            ro = ro + "" + this.charLowerNumber();
        }
        return ro;
    };

    this.charLowerNumberSpecial = function()
    {
        let r = 0;
        let stop = false
        while (!stop)
        {
            r = this.number(48,122);
            if ( (r >= 48 && r <= 57) || // numbers
                (r >= 97 && r <= 122) || // lower letters
                (allowedSpecialCharIndecies.includes(r)) )   //special
            {
                stop = true;
            }
        }
        return String.fromCharCode(r);
    };

    this.charLowerNumberSpecialMulti = function(_amount)
    {
        let ro = "";
        for (let i = 0; i < _amount; i++) {
            ro = ro + "" + this.charLowerNumberSpecial();
        }
        return ro;
    };

    this.charUpperLowerNumber = function()
    {
        let r = 0;
        let stop = false
        while (!stop)
        {
            r = this.number(48,122);
            if ( (r >= 48 && r <= 57) || // numbers
                (r >= 65 && r <= 90)  || // upper letters
                (r >= 97 && r <= 122) ) // lower letters
            {
                stop = true;
            }
        }
        return String.fromCharCode(r);
    };

    this.charUpperLowerNumberMulti = function(_amount)
    {
        let ro = "";
        for (let i = 0; i < _amount; i++) {
            ro = ro + "" + this.charUpperLowerNumber();
        }
        return ro;
    };

    this.charUpperNumber = function()
    {
        let r = 0;
        let stop = false
        while (!stop)
        {
            r = this.number(48,122);
            if ( (r >= 48 && r <= 57) || // numbers
                (r >= 65 && r <= 90)  ) // upper letters
            {
                stop = true;
            }
        }
        return String.fromCharCode(r);
    };

    this.charUpperNumberMulti = function(_amount)
    {
        let ro = "";
        for (let i = 0; i < _amount; i++) {
            ro = ro + "" + this.charUpperNumber();
        }
        return ro;
    };

    this.charUpperNumberSpecial = function()
    {
        let r = 0;
        let stop = false
        while (!stop)
        {
            r = this.number(48,122);
            if ( (r >= 48 && r <= 57) || // numbers
                (r >= 65 && r <= 90) || // upper letters
                (allowedSpecialCharIndecies.includes(r)) )   //special
            {
                stop = true;
            }
        }
        return String.fromCharCode(r);
    };

    this.charUpperNumberSpecialMulti = function(_amount)
    {
        let ro = "";
        for (let i = 0; i < _amount; i++) {
            ro = ro + "" + this.charUpperNumberSpecial();
        }
        return ro;
    };

    this.placeholderTextParagraph = function()
    {
        return faker.lorem.paragraph();
    };

    this.placeholderTextSentence = function()
    {
        return faker.lorem.sentence();
    };

    this.lastName = function () {
        return faker.name.lastName();
    };

    this.firstName = function () {
        return faker.name.firstName();
    };

    this.fullName = function () {
        return faker.name.findName();
    };

    this.job = function () {
        return faker.name.jobType();
    };

    this.honorific = function() {
        return faker.name.prefix();
    };

    this.title = function() {
        let titles = ["Dr.", "Prof.", "Sir"]
        return titles[this.number(0, title.length-1)];
    };

    this.email = function() {
        return faker.internet.email();
    }

    this.nickName = function() {
        return faker.internet.userName();
    }

    this.url = function() {
        return faker.internet.url();
    }

    this.ipv4 = function() {
        return faker.internet.ip();
    }

    this.userAgent = function() {
        return faker.internet.userAgent();
    }

    this.hexColor = function() {
        return faker.internet.color();
    }

    this.macAddress = function() {
        return faker.internet.mac();
    }

    this.uuid = function() {
        return faker.random.uuid();
    }

    this.phoneNumber = function() {
        return faker.phone.phoneNumberFormat(0);
    }

    this.moneyAmount = function() {
        return faker.finance.amount();
    }

    this.currencySymbol = function() {
        return faker.finance.currencySymbol();
    }

    this.currencyCode = function() {
        return faker.finance.currencyCode();
    }

    this.currencyName = function() {
        return faker.finance.currencyName();
    }

    this.color = function() {
        return faker.commerce.color();
    }

    this.city = function() {
        return faker.address.city();
    }

    this.country = function() {
        return faker.address.country();
    }

    this.countryCode = function() {
        return faker.address.countryCode();
    }

    this.longitude = function() {
        return faker.address.longitude();
    }

    this.latitude = function() {
        return faker.address.latitude();
    }

    this.address = function() {
        return faker.address.streetAddress();
    }

    this.detailedAddress = function() {
        return faker.address.streetAddress() + " " + faker.address.secondaryAddress()
    }

    this.month = function() {
        return faker.date.month();
    }

    this.weekdayName = function() {
        return faker.date.weekday();
    }

}

//numbers and SMALL ONLY characters
//faker.random.alphaNumeric(4);

$(document).ready(function ()
{
    window.SDG = new SDG();

    $("#debug").html("");

    //document.write(String.fromCharCode(65));

    for (let index = 0; index < 33; index++) {
        //console.log(faker.address.streetAddress() + " " + faker.address.secondaryAddress());
        //console.log(SDG.currencyCode());
        // console.log(faker.finance.currencyName());
    }

});

