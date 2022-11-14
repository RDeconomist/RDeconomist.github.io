

***Richard Davies
***Bristol University
***Wave Scraper
***February 2021

***Description: Access and clean the data needed for Richard's wave alert page.


***************************************************************************
*************************PYTHON********************************************
***************************************************************************

python
# /// Import tools that we will need:
# // Packages for data manipulation
import numpy as np
import pandas as pd
# // Web scraping: 
import requests
from bs4 import BeautifulSoup
# // OS. Sometimes need this for finding working directory:
import os


# /// Pick the URLs that we want to scrape:
URLs = [
"https://magicseaweed.com/Porthcawl-Rest-Bay-Surf-Report/1449/",
"https://magicseaweed.com/Croyde-Beach-Surf-Report/7/",
"https://magicseaweed.com/Minehead-Surf-Report/8086/",
"https://magicseaweed.com/Llangennith-Surf-Report/32/",
"https://magicseaweed.com/Kimmeridge-Surf-Report/11/",
"https://magicseaweed.com/Sennen-Surf-Report/4/", 
"https://magicseaweed.com/Brighton-West-Pier-Surf-Report/15/", 
"https://magicseaweed.com/Freshwater-East-Surf-Report/8022/",
"https://magicseaweed.com/Freshwater-West-Surf-Report/34/",
"https://magicseaweed.com/Marloes-Sands-Surf-Report/5544/",
"https://magicseaweed.com/Westdale-Surf-Report/5545/"
]

# //Short names of the places
Names = [
"Rest Bay",
"Croyde",
"Minehead",
"Llangennith",
"Kimmeridge",
"Sennen", 
"Brighton",
"Freshwater East",
"Freshwater West",
"Marloes",
"Westdale"]


# //Do the URL requests
# pageSurf = requests.get(URLs)

# //Set up a blank DataFrame to fill up:
df = pd.DataFrame()

for t in URLs:
   # // Return the index number of the thing we are working with:
   s = URLs.index(t)
   # // Request the html from the URL
   html = requests.get(t)
   # // Get the soup of this page
   soup = BeautifulSoup(html.content, 'html.parser')
   # // Get specific results we need:
   results = soup.find_all("span", class_="h3 font-sans-serif heavy nomargin text-white")
   # // Find the length of this thing:
   length = len(results)
   y = length-1
   # // Create empty array of the correct length:
   strArr = np.empty(length, dtype='S7')
   # // Loop to fill this:
   for i in range(0,length):
      strArr[i] = results[i].text
   # // convert array into dataframe:
   # // This one is _t since it will change with each ticker:
   df_t = pd.DataFrame(strArr)
   # // Name the single column.
   # // I want this column to update, named to be the name of the ticker i.e. 1, 2, 3.
   df_t.columns = ['Data']
   # // Turn this data from byte into string:
   df_t['Data'] = df_t['Data'].str.decode("utf-8")
   # // Add this to the master dataframe:
   df[s] = df_t['Data']

# // Now add the names as the names of the columns:   
df.columns = Names
df

# // save the dataframe as a csv file 
df.to_csv("waveHeights2.csv")

# // to find working directory
# os.getcwd()

# // Close Python
end 

***************************************************************************
*************************PYTHON********************************************
***************************************************************************



***************************************************************************
*************************STATA*********************************************
***************************************************************************
// Import the data to Stata:
capture cd "C:\Users\richa\Documents"
capture cd "C:\Users\hi19329\Documents"
capture cd "C:\\Users\\hi19329\\OneDrive - University of Bristol\\Documents"
clear
import delimited "waveHeights2.csv", encoding(Big5) varnames(1)
rename v1 number

// Trimming the back of the string:
foreach v in restbay croyde minehead llangennith kimmeridge sennen brighton freshwatereast freshwaterwest marloes westdale{
replace `v' = substr(`v', 1, length(`v')-2)

// Now splitting the string, and destring
split `v', parse("-")
rename `v'1 `v'_low
rename `v'2 `v'_high
destring `v'*, replace
}

// Rebasing the 'time' varible to start at 1.  Creating a days variable:
replace number = _n
gen days = number/8



//Simple line of the data:
*line low high number 

//Nicer area chart of the data:
*twoway area high low number, color(midblue white) legend(off) graphregion(color(white))

***************************************************************************
*************************STATA*********************************************
***************************************************************************


***************************************************************************
***********************GIT and GITHUB**************************************
***************************************************************************
// Now we usr GitHub to push this data directly.
// This allows our web-site to run from it.

//Change dirctory to the relevant GitHub folder:
capture cd "C:\Users\richa\Documents\GitHub\teaching"
capture cd "C:\\Users\\hi19329\\OneDrive - University of Bristol\\Documents\GitHub\rapidcharts\waves"

//Setting up Git to link to the right account:
! git config --global user.email “richard.davies.mobile@gmail.com”
! git cd "C:\Users\hi19329\OneDrive - University of Bristol\Documents\GitHub\rapidcharts\waves"

// Now ask Stata to save the file, locally, to our local GitHub folder:
*export delimited using "waveHeights2.csv", replace



/// Data and file management:

// We will find it useful to have two types of file.
// One changes name each day, so that we can trace historical data
// Another that has a set name, so that our web site can run from this "current" file


// Ask Stata to save this, locally, with a new file name each day:

// First, create a local variable of the date:
local suffix: display %tdCCYY-NN-DD =daily("`c(current_date)'", "DMY")

// Add a date variable to the file:
// This will help when appending all the files.
gen date = c(current_date)

// Export this, adding the date to the file:
export delimited using "waveHeights_`suffix'.csv", replace

// And we want one that we will over-write, so that we can always run from this:
export delimited using "waveHeights_today.csv", replace



/// Add, commit and push:
// Git Add. (This takes our new file in working directory, placing it in a staging area)
! git add -A

// Git Commit. (Takes everything in the staging area, making a permanent snapshot of the repository, associated with a unique identifier.)
! git commit -m "Adding today's waves"

// Git Push. (This sends the commit to our remote repository, i.e. our GitHub server account. This means it is now live and our site can run from it.)
! git push

***************************************************************************
***********************END: GIT and GITHUB*********************************
***************************************************************************

clear
exit
***END***
