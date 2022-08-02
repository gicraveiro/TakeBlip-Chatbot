# TakeBlip-Chatbot
A repository created during a technical test as part of a selective process to the vacancy of Chatbot Developer at the company TakeBlip. 

The chatbot was built with the platform Blip, using the Builder (lowcode) and was exported to the folder Flow. 
Apart from greetings, it displays information about TakeBlip's 6 values and Takeblip's oldest C# repositories in Github. 

In this project, there is also the API that retrieves data from TakeBlip's Github user, returning a json file containing full name and description of their 5 oldest C# repositories by ascending order, among with the url of Takeblip's avatar in Github. 

The API is available online at https://calm-caverns-99785.herokuapp.com/

# Installing
This project has one node module that must be installed in order to run properly. Go to the terminal and run the following command:

npm install express

# Running

node index.js

# Accessing the API

To execute locally, clone the github repository and run the project:

git clone https://github.com/gicraveiro/TakeBlip-Chatbot.git
node index.js

Then go to the browser and access the API at port 8000

http://localhost:8000/

To access the published API, open the following link in the browser:

https://calm-caverns-99785.herokuapp.com/

