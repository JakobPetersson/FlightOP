# FlightOP
FlightOP is a tool for visualizing boarding card data.

## Usage
Just scan a boarding card using any suitable scanner and copy the data into the data input field.

### On iPhone?
I have found that the following application will allow you to scan QR-codes and use the data as url parameter:
```
https://itunes.apple.com/se/app/qr-reader-for-iphone/id368494609
```
It allows you to scan a boarding card, and then automatically open FlightOP with the scanned boarding card data.

In `Settings/Barcode Settings/Send barcode to web server`, configure the app to point to your copy of FlightOP or the following website URL:
```
https://jakobpetersson.github.io/FlightOP-web/?data=[data]
```

## Building
```
npm install
npm run webpack
```