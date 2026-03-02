const loadUser = () => {
    url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
        .then((res) => res.json())
        .then((data) => displayUser(data));

}


// {
//     "id": 10,
//     "name": "Clementina DuBuque",
//     "username": "Moriah.Stanton",
//     "email": "Rey.Padberg@karina.biz",
//     "address": {
//         "street": "Kattie Turnpike",
//         "suite": "Suite 198",
//         "city": "Lebsackbury",
//         "zipcode": "31428-2261",
//         "geo": {
//             "lat": "-38.2386",
//             "lng": "57.2232"
//         }
//     },
//     "phone": "024-648-3804",
//     "website": "ambrose.net",
//     "company": {
//         "name": "Hoeger LLC",
//         "catchPhrase": "Centralized empowering task-force",
//         "bs": "target end-to-end models"
//     }
// }

const displayUser = (users) => {
    const postContainer = document.getElementById('post-container');
    postContainer.innerHTML = '';
    const userContainer = document.getElementById("user-container");
    userContainer.innerHTML = '';

    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.innerHTML = `
        <div class = "user-card">
            <h2>${user.name}</h2>
            <h4>${user.username}</h4>
            <h4>${user.email}</h4>
            <p>Address: </p>
            <p> ${user.address.street}, ${user.address.suit}, ${user.address.city}, ${user.address.zipcode}</p>
            <p>Phone Number: ${user.phone}</p>
            <p>Website: ${user.website}</p>
            <h3>${user.company.name}</h3>
            <h4>${user.company.catchPhrase}</h4>
            <p>${user.company.bs}</p>
        </div>

        `
        userContainer.appendChild(userCard);
    })
}