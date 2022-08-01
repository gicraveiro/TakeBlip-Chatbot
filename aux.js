import BlipSdk from 'blip-sdk'; //import * as BlipSdk from 'blip-sdk';
import WebSocketTransport from 'lime-transport-websocket' //import * as WebSocketTransport from 'lime-transport-websocket'
import {IDENTIFIER, ACCESS_KEY, msg_endpoint, command_endpoint, notifications_endpoint, contract_id} from './access_keys.js'

// Functions


function setConnectedState() {
    client.connect()
        .then(function () {
            console.log('Application started. Press Ctrl + c to stop.')
        })
        .catch(function (err) {
            //Connection failed
        });
}


/*
function generateJsonCarousel(from, Name, description, Uri){
    messageCarousel[from].content.items.push({ 
        header: { 
            type: "application/vnd.lime.media-link+json", 
            value: { 
                title: Name,  
                subtitle: description,
                type: "image/jpeg", 
                uri: Uri 
            }
        }/*,
        options: [
            {
                label: {
                    type: "application/vnd.lime.web-link+json",
                    value: {
                        title: "Procurar no Workplace",
                        uri: "https://take.facebook.com/search/top/?q=" + Name
                    }
                }
            }
        ]*//*
    });
    return messageCarousel[from];
}*/

// Create a client instance passing the identifier and accessKey of your chatbot
let client = new BlipSdk.ClientBuilder()
    .withIdentifier(IDENTIFIER)
    .withAccessKey(ACCESS_KEY)
    .withTransportFactory(() => new WebSocketTransport())
    .build();

client.addMessageReceiver(true, function (message) {
    //utils.logLimeMessage(message, 'Message received');
});

// Connect with server asynchronously
// Connection will occurr via websocket on 8081 port.
/*
client.connect() // This method return a 'promise'.
    .then(function(session) {
        // Connection success. Now is possible send and receive envelopes from server. *//*
        console.log('Application started. Press Ctrl + c to stop.')

        // Sending a message
        var msg = { 
            type: 'text/plain', 
            content: 'Hello, world', 
            to: message.from//'553199990000@0mn.io' 
        };
        client.sendMessage(msg);
    })
    .catch(function(err) {*/ /* Connection failed. *//* });
*/


/*
client.addNotificationReceiver(null, function (notification) {
    if ($notificationShow.checked) {
        utils.logLimeNotification(notification, 'Notification received');
    }
});
*/
//connect
setConnectedState();

// disconnect
client.close();

    //generateJsonCarousel(from, value.full_name, value.owner.avatar_url);

// Add this line to package.json to establish connection with SDK!!
//"type": "module",

