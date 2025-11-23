

// GETTING JUST OLIVE OIL PRICES

* We know from beforehand that item id is 211408

* Open prices:
use "C:\Users\hi19329\Dropbox\1. Academic\1. PRICES, 2018 UPDATE\active\dta\db_prices.dta"

* Keep olive oil:
keep if item_id==211408
keep if region==2

* keep only shops with a lot:
keep if shop_code>800

* merge in dates:
merge m:1 quote_date using "C:\Users\hi19329\Dropbox\1. Academic\1. PRICES, 2018 UPDATE\active\dta\db_date.dta", keepusing(date2 date3 date4 date)

* egen simpler store variable:
egen store = group(shop_code)

* line chart:
line price date2, by(store)

* export to store:
// export delimited using "C:\Users\hi19329\OneDrive - University of Bristol\Documents\GitHub\RDeconomist.github.io\data\oliveOil_London.csv"
export delimited using "C:\Users\hi19329\OneDrive - University of Bristol\Documents\GitHubHomePC\RDeconomist.github.io\data\oliveOil_London.csv"
