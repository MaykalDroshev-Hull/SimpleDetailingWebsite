# Background
This repository comprises the entire code base of the 'Gentry's Auto Detailing' website. This is a brief overview of the details of the website. I designed this website for two reasons: 
  1. To allow my sister another way to gain exposure and receive appointment requests from facets other than offering her business card and promoting on facebook
  2. To gain more experience in actually developing a website. This include developing simple APIs, using node packages, and to pull and post data to a database
You can find a link to the active website [here](https://gentry-auto-detailing.vercel.app/)
  
# The Website Design
The website design is simple, comprising 5 total pages. The pages are:
  1. Home: The home page of the website
  2. About: An about page that accompanies details about my sister
  3. Services: Services offered by her small business
  4. Reviews: A page that allows user to submit reviews about their experience
  5. Contact: A page with a form that allows the user the submit an appointment request from my sister
  
The 'About' and 'Services' are static pages and do not allow for any user interaction, however the other 3 pages are different.
  - On the 'Home' page, there is a sliding image carousel. It is on an automatic timer so it will slide to the next image regardless of user interaction. However, the user can interact with it and stop the slider, or swipe to both the previous and next image manually. There is also a button with 'Book Appointment' on it that will open a modal dialog form that allows the user to submit an appointment request. This form has less requirements to succesfully submit a form. On form submission an email is sent to my sister that contains the details of the submitted form. 
  - On the 'Reviews' page are reviews that are stored in a planetscale database. The page automatically pulls the reviews from the database and displays them on the webpage. Addittionally, there is a button with 'Submit a Review!' on it. This button opens a modal dialog form that allows the user to write a review about their experience using my sister's business. All three inputs are required for the form to submit. On succesful submission, the data inside the form is sent to the planetscale database where the data is stored. The reviews page then automatically updates, showing the user's new review on the reviews page. 
  - On the 'Contact' page, there is a form. This form has more inputs and requires the user to provide more information about their appointment request. All of the inputs besides 'Additional Details' is required to be filled out, or the form will not submit. On form submission an email is sent to my sister that contains the details of the submitted form.

# Additional Details
  - Both form submissions, as well as pishing and pulling data from the database utilize APIs
  - The website has been optimized for mobile use
