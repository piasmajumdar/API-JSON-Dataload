const loadPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            // console.log(data);
            loadData(data);
        })
}


// {
//     "userId": 10,
//     "id": 96,
//     "title": "quaerat velit veniam amet cupiditate aut numquam ut sequi",
//     "body": "in non odio excepturi sint eum\nlabore voluptates vitae quia qui et\ninventore itaque rerum\nveniam non exercitationem delectus aut"
// }

//               array of objects
const loadData = (posts) => {
    // 1. get the container and empty it
    const postContainer = document.getElementById('post-container');
    postContainer.innerHTML = '';

    posts.forEach(post => {
        console.log(post);
        // 2. create div element
        const postCard = document.createElement('div');
        postCard.innerHTML = `
        <div class="post-card">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            </div>
        `

        // 3. append the card to parent
        postContainer.appendChild(postCard);


    })

}

loadPost();