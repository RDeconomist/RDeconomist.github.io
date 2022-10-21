

/// RICHARD DAVIES
/// UK DEBT ANALYSIS
/// DMO DATA

/// PURPOSE: CLEANING UP DMO DATA, DEMONSTRATION OF STRING FUNCTIONS FOR STUDENTS:



//////////////////////////////////////////////////////////////////////
//1. IMPORTING AND CLEANING THE DATA:

/// Import the data:
clear
import delimited "https://raw.githubusercontent.com/RDeconomist/RDeconomist.github.io/main/data/GiltsInIssueRaw.csv"

/// Get rid of Meta data at top of file:
gen id = _n
order id
drop if id<13


/// Add back in variable names:
rename v1 type
rename v2 code
rename v3 redemptionDate
rename v4 issueDate
rename v5 divDates
rename v6 divNextDate
rename v7 issueAmount
rename v8 baseRPI
rename v9 amountINCinfUplift


/// Drop some data:
drop if type==""
drop if code == "ISIN Code"
drop if code==""
drop if redemptionDate==""
drop id


////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////
//2. USING STRING FUNCTIONS TO CLEAN THE DATA:


// Destring:
destring issueAmount baseRPI amountINCinfUplift, ignore("," ) replace


// Problem variable: looks like this:
// "0 5/8% Treasury Gilt 2025"
// We want to ge the type, and the coupon.


/// String split, based on a character:
split type, parse("T") generate(type2)
order type*

/// String concatenate:
** This adds back the missing "T".
gen T = "T"
replace type22 = T+type22
drop T

/// Genearting a substring, based on the kown position of a chatacter:
replace type22 = substr(type22, 1, strpos(type22, "2") - 1)

/// Trimming the leading and trailing spaces from around a variable:
replace type22 = strrtrim(type22)

/// A manual step:
replace type22 = "Green Gilt" if type22==""
rename type22 giltType

replace giltType = "Index Linked" if baseRPI!=.



/// Splitting again, based on know characters:
split type21, parse("%") generate(type3)
order type*
split type31, parse(" ") generate(type4)
order type*

/// Now generate a coupon variable to fill:
*** Use the if condition here:
gen coupon = ""
order type* coupon
replace coupon = type42
replace coupon = type41 if coupon==""
rename type rawType
drop type*


/// Calculate issue date:
gen issueYear = substr(issueDate, 9, 4)
destring issueYear, replace

/// Sort and gen cumlative:
sort issueYear
gen totalCumulative = sum(issueAmount)

/// Give each bond a number:
gen id = _n


export delimited using "C:\Users\hi19329\OneDrive - University of Bristol\Documents\GitHub\RDeconomist.github.io\data\GiltsInIssueClean.csv", replace

////////////////////////////////////////////////////////////////////////////////////
