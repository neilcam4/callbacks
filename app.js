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

