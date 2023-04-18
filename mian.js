// Fetch the post
async function getSinglePost() {
    let data = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    return await data.json();
}

// Render the post
async function renderDataInDOM() {
    let post = await getSinglePost();
    document.querySelector('#data').innerHTML = JSON.stringify(post);
}