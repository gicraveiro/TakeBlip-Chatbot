# TakeBlip-Chatbot
A repository created during a technical test as part of a selective process to the vacancy of Chatbot Developer at the company TakeBlip. 

The chatbot was built with the platform Blip, using the Builder (lowcode) and was exported to the folder Flow. 
Apart from greetings, it displays information about TakeBlip's 6 values and Takeblip's oldest C# repositories in Github. 

In this project, there is also the API that retrieves data from TakeBlip's Github user, returning a json file containing full name and description of their 5 oldest C# repositories by ascending order, among with the url of Takeblip's avatar in Github. 

The API is available online at https://calm-caverns-99785.herokuapp.com/

# Prerequisites

- Nodejs (https://nodejs.org/en/download/)
- Having a Blip account (https://account.blip.ai/register?returnUrl=%2Faccount)


This project was created using versions:

Nodejs v18.1.0

npm 8.15.1


# Installing
This project has one node module that must be installed in order to run properly. Go to the terminal and run the following command:

npm install express


# Running
To run the project, go to the terminal, enter the project folder,  and run command:

npm start


Note: Press Ctrl+C to quit running

# Accessing the API
To execute locally, clone the github repository and run the project:


git clone https://github.com/gicraveiro/TakeBlip-Chatbot.git

cd TakeBlip-Chatbot

npm start


Once the project is running in your machine, you can access the API at port 8000 in a browser

http://localhost:8000/


To access the published API, open the following link in the browser:

https://calm-caverns-99785.herokuapp.com/

# Testing the chatbot
Download the file flow.json from this repository (it's inside the folder "Flow")

Enter the "Blip Portal" (https://portal.blip.ai/)

Create a chatbot from zero then look for the following options

Builder -> Configuration (on the left side of the screen) -> Versions -> Import Flow -> Choose the "flow.json" file -> Publish flow-> Test published chatbot

# Notes

- I created the project using linux(ubuntu) and visual studio code, different distros and development interfaces might use different commands


- The API was published by Heroku with a free account. It has one dyno, which sleeps whenever the API is not called for more than 30 minutes. Therefore, the first call to this API (by the chatbot by clicking in the option "Desafio" or "Fazer Desafio", or by the API itself) might have a short delay. Please be patient while waiting for the chatbot to respond to the option "Desafio" :)


- The images used at the values' carroussel were downloaded from the file containing the conversational flow given by TakeBlip, and made available online by an account at imgur.

- It's possible that different versions of nodejs and npm cause different results than expected. To find out which version you have installed, go to the terminal and run commands:

node --version

npm --version
