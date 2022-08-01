import BlipSdk from 'blip-sdk'; //import * as BlipSdk from 'blip-sdk';
import WebSocketTransport from 'lime-transport-websocket' //import * as WebSocketTransport from 'lime-transport-websocket'
import {IDENTIFIER, ACCESS_KEY, msg_endpoint, command_endpoint, notifications_endpoint, contract_id} from './access_keys.js'

// Put your identifier and access key here
function setConnectedState() {
    client.connect()
        .then(function () {
            console.log('Application started. Press Ctrl + c to stop.')
        })
        .catch(function (err) {
            //Connection failed
        });
}

// Integração com a API do github 
function compare(a,b) {
    if (a.created_at > b.created_at) {
        return 1;
    }
    else {
        return -1;
    }
}
// Solicitação GET.
async function get_data(url){
    //const response = await fetch(url).catch(err => console.log('Erro de solicitação', err)); // lidar com os erros por catch;
    const repos_response = await fetch(url+'/repos?per_page=100&page=1').catch(err => console.log('Erro de solicitação', err));
    var repos_data = await repos_response.json()
    const repos_response2 = await fetch(url+'/repos?per_page=100&page=2').catch(err => console.log('Erro de solicitação', err));
    var repos_data2 = await repos_response2.json()
    
    repos_data.push(...repos_data2)
    var c_sharp_repos = repos_data.filter(function(item) { return item.language == 'C#'})
    c_sharp_repos.sort(compare);
    const selected_repos = c_sharp_repos.slice(0, 5)
    return selected_repos
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

// Integração com a API do github 
    
const github_url = 'https://api.github.com/users/takenet';
const take_data = await get_data(github_url);

take_data.forEach(function(value){
    console.log(value.full_name, value.description, value.owner.avatar_url)
    //generateJsonCarousel(from, value.full_name, value.owner.avatar_url);
});
