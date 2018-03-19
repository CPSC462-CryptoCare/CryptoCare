# -*- coding: utf-8 -*-
# -*- File: app.py -*-
# -*- Author: aB9 -*-
# -*- Date: 03/12 -*-

from flask import Flask, render_template
import requests
import ObjCryptoCurrency

app = Flask(__name__)

   

#From CryptoCurrency Object
CrCurrency = ObjCryptoCurrency.CryptoCurrency
CrCurrencyDetails = ObjCryptoCurrency.CryptoCurrencyDetails
crc_list  = ObjCryptoCurrency.cryptocurrencies_list

news_list = ObjCryptoCurrency.NewsArticle

#List to store CryptoCurrency data fetched from the server
cryptocurrencies_data =[]
news_data = []


#Index.html page
@app.route("/")
def index():
    
    cryptocurrencies_data= []
    for currency in crc_list:
        #URL to get current price data
        URL = 'https://min-api.cryptocompare.com/data/histominute?fsym={}&tsym=USD&limit=1&aggregate=3&e=CCCAGG'.format(crc_list[currency])
        response = requests.get(URL)
        
        #Request successful
      
        if response.status_code == 200:
            json_response = response.json()
            #store data into cryptocurrency_data list
            if json_response['Response'] == 'Success':
                data = json_response['Data'][0]
                cryptocurrencies_data.append(CrCurrency(crc_list[currency], currency, data['time'],data['close'],data['high'],data['low'],data['open'],data['volumefrom'],data['volumeto']))
            else:
                return render_template('error_page.html')
        #Error occurred
        else:
            return render_template('error_page.html')
    
    return render_template('index.html', cryptocurrencies = cryptocurrencies_data)

#CryptoCurrency_in_details.html page
@app.route("/<cryptocurrency_asset_id>")
def cryptocurrency_in_details(cryptocurrency_asset_id):
    currency = CrCurrency()
    currency_details = CrCurrencyDetails()
    news_details = news_list()
    currency_name = ""
    for c_name, c_id in crc_list.items():
        if c_id== cryptocurrency_asset_id:
            currency_name  = c_name
    #3fabdc3fed8d481c92f7c2deeb0147e9 news api key https://newsapi.org/        
    #flag is button clicked        
    if flag == "hHour":
    #URL to get cryptocurrency data in detail
       URL = 'https://min-api.cryptocompare.com/data/{}?fsym={}&tsym=USD&limit=1&aggregate=3&e=CCCAGG'.format(histohour,cryptocurrency_asset_id)
       response = requests.get(URL)
    elif flag== "hDaily":
    #URL to get cryptocurrency data in detail
       URL = 'https://min-api.cryptocompare.com/data/{}?fsym={}&tsym=USD&limit=1&aggregate=3&e=CCCAGG'.format(histoday,cryptocurrency_asset_id)
       response = requests.get(URL)
      
    else:
      #URL to get cryptocurrency data in detail
       URL = 'https://min-api.cryptocompare.com/data/{}?fsym={}&tsym=USD&limit=1&aggregate=3&e=CCCAGG'.format(histominute,cryptocurrency_asset_id)
       response = requests.get(URL)
   
        
    #Request successful
    if response.status_code == 200:
        json_response = response.json()
        #store data into cryptocurrency_data list
        if json_response['Response'] == 'Success':
            data = json_response['Data'][0]
            currency = CrCurrency(cryptocurrency_asset_id, currency_name, data['time'],data['close'],data['high'],data['low'],data['open'],data['volumefrom'],data['volumeto'])
            
        else:
            return render_template('error_page.html')
    #Error occurred
    else:
        return render_template('error_page.html')
         
   
   #URL to get news related to cryptocurrency
    URL = 'https://newsapi.org/v2/everything?q={}&sortBy=publishedAt&apiKey=3fabdc3fed8d481c92f7c2deeb0147e9'.format(currency_name)
    response = requests.get(URL)
        
    #Request successful
    if response.status_code == 200:
        json_response = response.json()
        if json_response['Response'] == 'Success':
           data = json_response['Data'][0]
           news_data.append(news_list(crc_list[currency], currency, data['author'], data['title'], data['description'], data['url'], data['urlToImage'], data['publishedAt']))
           
        
        #news_details= news_list(values_dict,display_values_dict)
        
    #Error occurred
    else:
        return render_template('error_page.html')
    
    return render_template('cryptocurrency_in_details.html',currency = currency,currency_details = currency_details)


if __name__ == "__main__":
    app.run()
