# TakeBlip-Chatbot
A repository created during a technical test as part of a selective process to the vacancy of Chatbot Developer at the company TakeBlip. 

The chatbot was built with the platform Blip, using the Builder (lowcode) and was exported to the folder Flow. 
Apart from greetings, it displays information about TakeBlip's 6 values and Takeblip's oldest C# repositories in Github. 

In this project, there is also the API that retrieves data from TakeBlip's Github user, returning a json file containing full name and description of their 5 oldest C# repositories by ascending order, among with the url of Takeblip's avatar in Github. 

The API is available online at https://calm-caverns-99785.herokuapp.com/

# Prerequisites

- Nodejs (https://nodejs.org/en/download/)
- Having a Blip account (https://account.blip.ai/register?returnUrl=%2Faccount)

Note: It's possible that different versions of nodejs and npm cause different results than expected. To find out which version you have installed, go to the terminal and run command:

node --version

npm --version


This project was created using versions:

Nodejs v18.1.0

npm 8.15.1


# Installing
Note: I created the project using linux(ubuntu) and visual studio code, different distros and development interfaces might use different commands

This project has one node module that must be installed in order to run properly. Go to the terminal and run the following command:

npm install express


# Running
To run the project, go to the terminal, enter the project folder,  and run command:

node index.js


# Accessing the API
To execute locally, clone the github repository and run the project:


git clone https://github.com/gicraveiro/TakeBlip-Chatbot.git

cd TakeBlip-Chatbot

node index.js



Once the project is running in your machine, you can access the API at port 8000 in a browser

http://localhost:8000/


To access the published API, open the following link in the browser:

https://calm-caverns-99785.herokuapp.com/

# Testing the chatbot
Download the file flow.json from this repository (it's inside the folder "Flow")

Enter the "Blip Portal" (https://portal.blip.ai/)

Create a chatbot from zero then look for the following options

Builder -> Configuration (on the left side of the screen) -> Versions -> Import Flow -> Choose the "flow.json" file -> Publish flow-> Test published chatbot






