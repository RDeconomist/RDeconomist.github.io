
***RICHARD DAVIES
***DATA SCIENCE 2021
***REMOVING TIME TREND FROM DATA:

//Open data
import delimited "C:\Users\hi19329\Documents\GitHub\RDeconomist.github.io\data\fourCountriesGDP.csv", encoding(ISO-8859-9) 

//For each country: regress, predict, calc errors
foreach i in uk kenya japan congo_dr{
regress `i' year
predict `i'_pred
gen `i'_error = `i'-`i'_pred
}

//Export the data:
export delimited using "C:\Users\hi19329\Documents\GitHub\RDeconomist.github.io\data\fourCountriesGDP_trends.csv", replace
