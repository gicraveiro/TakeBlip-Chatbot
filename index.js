import express, { json } from 'express'

const app = express();
let port = process.env.PORT;

// Ordering array by date of creation
function compare(a,b) {
    if (a.created_at > b.created_at) {
        return 1;
    }
    else {
        return -1;
    }
}
// Solicitação GET.
// Integração com a API do github 
async function get_data(url){
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

// Integração com a API do github 
    
const github_url = 'https://api.github.com/users/takenet';
const take_data = await get_data(github_url);
var json_data = []

take_data.forEach(function(value){
    var full_name  = {
        full_name: value.full_name,
        description: value.description,
        avatar_url: value.owner.avatar_url
    }
    json_data.push(full_name)
});

if (port == null || port == "") {
  port = 8000;
}

app.listen(port);

// Defining get request at '/' route
app.get('/', function(req, res) {
    res.json(json_data);
  });
