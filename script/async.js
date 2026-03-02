const data = async() => {
    url = 'https://jsonplaceholder.typicode.com/posts/1';
    const res = await fetch(url);
    const json = await res.json();
    console.log("hello");
    console.log(json);
    console.log(true);

}

data()