// $(document).ready(function(){
//     document.querySelectorAll('#button1').addEventListener('click', getWeather)
// })


const players = [
    {name: "Christiano Ronaldo", team:"Juventus"},
    {name: "Lionel Messi", team: "Barcelona"}
]

function createPlayer(player, callback){
    players.push(player)
    callback()
}


function getPlayers(){
let output = ''
players.forEach(function(player){
    output += `<li>${player.name}</li>\n<li>${player.team}</li>\n`
})
document.getElementById("footballers").innerHTML = output
}

createPlayer({name:"Harry Kane", team:"Spurs"}, getPlayers)

function getMessage(){
    let url = "https://chitter-backend-api.herokuapp.com/peeps"
    fetch(url)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        console.log(data[0].body)
    })
}
getMessage()


// function getWeather(){
//     let url = "https://chitter-backend-api.herokuapp.com/peeps"
//     fetch(url)
//     .then(function(res){
//         console.log(res)
//         return res.json()
//     })
//     .then(function(data){
//         console.log(data[0].body)
//         return data
      
//     })
// }
// getWeather()






// console.log("Hello there")

// const posts = [
// {title: "post 1", body:"hello"},
// {title: "post 2", body: "goodbye"}
// ]

// function createPost(post, callback){
// setTimeout(function(){
//     posts.push(post);
//     callback();
// },2000)

// }

// function getPost(){
//     setTimeout(function(){
//         let output = '';
//         posts.forEach(function(post){
//             output += `<li>${post.title}</li>\n<li>${post.body}</li>\n`
//         })
//         document.getElementById("posts").innerHTML = output
//     }, 1000)
// }

// createPost({title: "Post 3", body:"how are you?"}, getPost)

