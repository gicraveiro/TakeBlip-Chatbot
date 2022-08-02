// This file contains useful functions to retrieve and process takenet's github repositories data
// It exports the json_data array, containing only the relevant information extracted

// Ordering array by date of creation
function compare(a,b) {
    if (a.created_at > b.created_at) {
        return 1;
    }
    else {
        return -1;
    }
}

// Github's API Integration - GET
async function get_data(url){
    // There are 107 repositories, and github only allows retrieving 100 repositories at a time, so 2 GET calls are needed
    const repos_response = await fetch(url+'/repos?per_page=100&page=1').catch(err => console.log('Erro de solicitação', err));
    var repos_data = await repos_response.json()
    const repos_response2 = await fetch(url+'/repos?per_page=100&page=2').catch(err => console.log('Erro de solicitação', err));
    var repos_data2 = await repos_response2.json()
    
    repos_data.push(...repos_data2)
    var c_sharp_repos = repos_data.filter(function(item) { return item.language == 'C#'}) // filtering repos by language
    c_sharp_repos.sort(compare); // ordering

    // Debug Print: Confirming values are correctly retrieved and the array is correctly sorted in ascending order by date of creation
    /*c_sharp_repos.forEach(function(value){
        console.log(value.full_name,"\n",value.description,"\n",value.owner.avatar_url,"\n",value.created_at,"\n\n")
    })*/
    
    const selected_repos = c_sharp_repos.slice(0, 5) // keeping only 5 oldest
    return selected_repos
    }

// MAIN

// Getting data
const github_url = 'https://api.github.com/users/takenet';
const take_data = await get_data(github_url);

// Creating response json
export var json_data = {"avatar_url": take_data[0].owner.avatar_url, "repositories": []}
take_data.forEach(function(value){
    var full_name  = {
        full_name: value.full_name,
        description: value.description,
    }
    json_data.repositories.push(full_name)
});