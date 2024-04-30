const postDetails = document.getElementById('postDetails');
const postId = localStorage.getItem('postId');
const apiUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const postDiv = document.createElement('div');
        postDiv.innerHTML = `
            <h2>${data.title}</h2>
            <p>${data.body}</p>
        `;
        postDetails.appendChild(postDiv);
    })
    .catch(error => {
        console.error('Error:', error);
    });

    function goBack() {
        window.history.back();
    }
