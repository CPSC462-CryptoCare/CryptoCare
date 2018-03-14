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
crc_list  = ObjCryptoCurrency.cryptocurrencies_list

#Index.html
@app.route("/")
def index():
    #List to store CryptoCurrency data fetched from the server
    cryptocurrencies_data =[]
    
    for currency in crc_list:
        #URL to get current price data
        URL = 'https://min-api.cryptocompare.com/data/histoday?fsym={}&tsym=USD&limit=1&aggregate=3&e=CCCAGG'.format(crc_list[currency])
        response = requests.get(URL)
        
        #Request successful
        if response.status_code == 200:
            json_response = response.json()
            #store data into cryptocurrency_data list
            if json_response['Response'] == 'Success':
                data = json_response['Data'][0]
                cryptocurrencies_data.append(CrCurrency(crc_list[currency], currency, data['time'],data['close'],data['high'],data['low'],data['open'],data['volumefrom'],data['volumeto']))
            else:
                print('Error')
        #Error occurred
        else:
            print('Error')
    
    return render_template('index.html', cryptocurrencies = cryptocurrencies_data)

#CryptoCurrency in details
@app.route("/<cryptocurrency_asset_id>")
def cryptocurrency_in_details(cryptocurrency_asset_id):
    
    pass

if __name__ == "__main__":
    app.run()