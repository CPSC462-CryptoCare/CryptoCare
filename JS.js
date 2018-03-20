// USD - United States Dollar
function bitTypeUsd() {
    // indicate that the code should be executed in "strict mode" so no undeclared variables are being used
    "use strict";
    // Declares variables and maintains a fixed 8 digit decimal place
    var bitcoin = 1;
    var currency = 1320.39;
    var usd = document.getElementById('usdInput').value;
    var usdDollar = usd * (bitcoin * currency);
    var amount = document.getElementById('usdValue');
    amount.innerHTML = "&#x24;" + usdDollar.toFixed(2);
    /* Formated numbers to currency with commas */
    amount.innerHTML = usdDollar.toLocaleString(undefined, {style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2});
    // Checks if value is entered. If so, change currency to reflect price of one bitcoin in current currency
    if (usd) {
        document.getElementById('monetaryUsd').innerHTML = "&#x24;" + "1,320.39";
    } else if (!usd) {
        document.getElementById('monetaryUsd').innerHTML = "USD - United States Dollar";
    }
    // Adds error message, border to cells, prevents currency changes when error is displayed, and maintains border around amount cell
    if (usd === '.') {
        document.getElementById('usdValue').innerHTML = "&#x24;" + "0.00";
    } else if (isNaN(usd)) {
        document.getElementById('usdInput').style.border = "thick solid #FF0000";
        document.getElementById('usdValue').style.border = "thick solid #FF0000";
        document.getElementById('usdValue').innerHTML = "&#x24;" + "0.00";
        document.getElementById('monetaryUsd').innerHTML = "USD - United States Dollar";
        document.getElementById('bitTitle').innerHTML = "Numeric and Decimals Only!";
    } else if (usd === "") {
        document.getElementById('usdInput').style.border = "#000000";
        document.getElementById('usdValue').removeAttribute('style');
        document.getElementById('bitTitle').innerHTML = "";
    }
}

// GBP - British Pound Sterling
function bitTypeGbp() {
    // indicate that the code should be executed in "strict mode" so no undeclared variables are being used
    "use strict";
    // Declares variables and maintains a fixed 8 digit decimal place
    var bitcoin = 1;
    var currency = 1020.19;
    var gbp = document.getElementById('gbpInput').value;
    var gbpDollar = gbp * (bitcoin * currency);
    var amount = document.getElementById('gbpValue');
    amount.innerHTML = "&#xa3;" + gbpDollar.toFixed(2);
    /* Formated numbers to currency with commas */
    amount.innerHTML = gbpDollar.toLocaleString(undefined, {style: 'currency', currency: 'GBP', minimumFractionDigits: 2, maximumFractionDigits: 2 });
    // Checks if value is entered. If so, change currency to reflect price of one bitcoin in current currency
    if (gbp) {
        document.getElementById('monetaryGbp').innerHTML = "&#xa3;" + "1,020.19";
    } else if (!gbp) {
        document.getElementById('monetaryGbp').innerHTML = "GBP - British Pound Sterling";
    }
    // Adds error message, border to cells, prevents currency changes when error is displayed, and maintains border around amount cell
    if (gbp === ".") {
        document.getElementById('gbpValue').innerHTML = "&#xa3;" + "0.00";
    } else if (isNaN(gbp)) {
        document.getElementById('gbpInput').style.border = "thick solid #FF0000";
        document.getElementById('gbpValue').style.border = "thick solid #FF0000";
        document.getElementById('gbpValue').innerHTML = "&#xa3;" + "0.00";
        document.getElementById('monetaryGbp').innerHTML = "GBP - British Pound Sterling";
        document.getElementById('bitTitle').innerHTML = "Numeric and Decimals Only!";
    } else if (gbp === "") {
        document.getElementById('gbpInput').style.border = "#000000";
        document.getElementById('gbpValue').removeAttribute('style');
        document.getElementById('bitTitle').innerHTML = "";
    }
}

// EUR - Euro
function bitTypeEur() {
    // indicate that the code should be executed in "strict mode" so no undeclared variables are being used
    "use strict";
    // Declares variables and maintains a fixed 8 digit decimal place
    var bitcoin = 1;
    var currency = 1020.19;
    var eur = document.getElementById('eurInput').value;
    var eurDollar = eur * (bitcoin * currency);
    var amount = document.getElementById('eurValue');
    amount.innerHTML = "&#x20ac;" + eurDollar.toFixed(2);
    /* Formated numbers to currency with commas */
    amount.innerHTML = eurDollar.toLocaleString(undefined, {style: 'currency', currency: 'EUR', minimumFractionDigits: 2, maximumFractionDigits: 2 });
    // Checks if value is entered. If so, change currency to reflect price of one bitcoin in current currency
    if (eur) {
        document.getElementById('monetaryEur').innerHTML = "&#x20ac;" + "1,020.19";
    } else if (!eur) {
        document.getElementById('monetaryEur').innerHTML = "EUR - Euro";
    }
    // Adds error message, border to cells, prevents currency changes when error is displayed, and maintains border around amount cell
    if (eur === ".") {
        document.getElementById('eurValue').innerHTML = "&#x20ac;" + "0.00";
    } else if (isNaN(eur)) {
        document.getElementById('eurInput').style.border = "thick solid #FF0000";
        document.getElementById('eurValue').style.border = "thick solid #FF0000";
        document.getElementById('eurValue').innerHTML = "&#8364;" + "0.00";
        document.getElementById('monetaryEur').innerHTML = "EUR - Euro";
        document.getElementById('bitTitle').innerHTML = "Numeric and Decimals Only!";
    } else if (eur === "") {
        document.getElementById('eurInput').style.border = "#000000";
        document.getElementById('eurValue').removeAttribute('style');
        document.getElementById('bitTitle').innerHTML = "";
    }
}

// CNY - Chinese Yuan
function bitTypeCny() {
    // indicate that the code should be executed in "strict mode" so no undeclared variables are being used
    "use strict";
    // Declares variables and maintains a fixed 8 digit decimal place
    var bitcoin = 1;
    var currency = 7792.80;
    var cny = document.getElementById('cnyInput').value;
    var cnyDollar = cny * (bitcoin * currency);
    var amount = document.getElementById('cnyValue');
    amount.innerHTML = "&#xa5;" + cnyDollar.toFixed(2);
    /* Formated numbers to currency with commas */
   amount.innerHTML = cnyDollar.toLocaleString(undefined, {style: 'currency', currency: 'CNY', minimumFractionDigits: 2, maximumFractionDigits: 2 });
    // Checks if value is entered. If so, change currency to reflect price of one bitcoin in current currency
    if (cny) {
        document.getElementById('monetaryCny').innerHTML = "&#xa5;" + "7,792.80";
    } else if (!cny) {
        document.getElementById('monetaryCny').innerHTML = "CNY - Chinese Yuan";
    }
    // Adds error message, border to cells, prevents currency changes when error is displayed, and maintains border around amount cell
    if (cny === ".") {
        document.getElementById('cnyValue').innerHTML = "&#xa5;" + "0.00";
    } else if (isNaN(cny)) {
        document.getElementById('cnyInput').style.border = "thick solid #FF0000";
        document.getElementById('cnyValue').style.border = "thick solid #FF0000";
        document.getElementById('cnyValue').innerHTML = "&#xa5;" + "0.00";
        document.getElementById('monetaryCny').innerHTML = "CNY - Chinese Yuan";
        document.getElementById('bitTitle').innerHTML = "Numeric and Decimals Only!";
    } else if (cny === "") {
        document.getElementById('cnyInput').style.border = "#000000";
        document.getElementById('cnyValue').removeAttribute('style');
        document.getElementById('bitTitle').innerHTML = "";
    }
}

// AUD - Australian Dollar
function bitTypeAud() {
    // indicate that the code should be executed in "strict mode" so no undeclared variables are being used
    "use strict"; 
    // Declares variables and maintains a fixed 8 digit decimal place
    var bitcoin = 1;
    var currency = 1756.27;
    var aud = document.getElementById('audInput').value;
    var audDollar = aud * (bitcoin * currency);
    var amount = document.getElementById('audValue');
    amount.innerHTML = "&#x41;&#x24;" + audDollar.toFixed(2);
    /* Formated numbers to currency with commas */
    amount.innerHTML = audDollar.toLocaleString(undefined, {style: 'currency', currency: 'AUD', minimumFractionDigits: 2, maximumFractionDigits: 2 });
    // Checks if value is entered. If so, change currency to reflect price of one bitcoin in current currency
    if (aud) {
        document.getElementById('monetaryAud').innerHTML = "&#x41;&#x24;" + "1,756.27";
    } else if (!aud) {
        document.getElementById('monetaryAud').innerHTML = "AUD - Australian Dollar";
    }
    // Adds error message, border to cells, prevents currency changes when error is displayed, and maintains border around amount cell
    if (aud === ".") {
        document.getElementById('audValue').innerHTML = "&#x41;&#x24;" + "0.00";
    } else if (isNaN(aud)) {
        document.getElementById('audInput').style.border = "thick solid #FF0000";
        document.getElementById('audValue').style.border = "thick solid #FF0000";
        document.getElementById('audValue').innerHTML = "&#x41;&#x24;" + "0.00";
        document.getElementById('monetaryAud').innerHTML = "AUD - Australian Dollar";
        document.getElementById('bitTitle').innerHTML = "Numeric and Decimals Only!";
    } else if (aud === "") {
        document.getElementById('audInput').style.border = "#000000";
        document.getElementById('audValue').removeAttribute('style');
        document.getElementById('bitTitle').innerHTML = "";
    }
}