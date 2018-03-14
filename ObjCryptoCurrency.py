# -*- coding: utf-8 -*-
# -*- File: app.py -*-
# -*- Author: aB9 -*-
# -*- Date: 03/12 -*-

#Cryptocurrency Class
class CryptoCurrency:
    def __init__(self, asset_id, name, time, cr_close, cr_high, cr_low, cr_open, cr_volume_from, cr_volume_to):
        self.asset_id = asset_id
        self.name = name
        self.cr_close = cr_close
        self.cr_high = cr_high
        self.cr_low = cr_low
        self.cr_open = cr_open
        self.cr_volume_from = cr_volume_from
        self.cr_volume_to = cr_volume_to
        ####End of __init__ ####
####End of Class Cryptocurrency#####

#List of supported cryptocurrencies
cryptocurrencies_list = {'Bitcoin':'BTC', 
                         'Ripple':'XRP',
                         'Iota':'IOT',
                         'Ethereum': 'ETH',
                         'Litecoin':'LTC',
                         'Nem':'XEM',
                         'Neo':'NEO',
                         'Dashcoin':'DSH',
                         'Numerai':'NMR',
                         'OmiseGo':'OMG',
                         'QTUM':'QTUM',
                         'Stratis':'STRAT',
                         'Waves':'WAVES'}