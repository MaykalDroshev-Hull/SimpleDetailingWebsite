# Background
This repository comprises the entire code base of the 'Asea-M' website. 
This repository was started from [gentry-auto-detailing](https://github.com/loftongentry/gentry-auto-detailing) but with features and color theme mathcing the customer's needs.

The website is build with NodeJS and it contains all the general pages listed below

# The Website Design
The website design is simple, comprising 4 total pages. The pages are:
  1. Home: The home page of the website
  2. About: An about page that accompanies details about my sister
  3. Services: Services offered by her small business
  4. Contact: A page with a form that allows the user the submit an appointment request from my sister
  
# Additional Details
  - The website has been optimized for mobile use


# Useful instructions
1. How to test the website on the local network (within the same router)
   1. Check ipconfig on the command prompt
   2. Use this command on your laptop in Visual Studio Code Terminal (Ctrl + '):<br>
      npx next dev -H 0.0.0.0 -p 3000
   3. On your phone, type out the IPv4 Address followed by the port (3000)
2. How to test the website from anywhere
     1. Download [ngrog]([url](https://download.ngrok.com/windows))
     2. Open the app (it should open in console)
     3. Use this command on your laptop in Visual Studio Code Terminal (Ctrl + '):<br>
        npx next dev -H 0.0.0.0 -p 3000
     4. Generate your key and apply it in the app<br>
        ngrok config add-authtoken $YOUR_AUTHTOKEN
     5. Run the following command<br>
         ngrok.exe http 3000
