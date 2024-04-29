const loginForm = document.getElementById('loginForm');
  const messageDiv = document.getElementById('message');

  loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => {
                const user = users.find(user => user.username === username);
                
                if (user) {
                    if (password === "qwertyuiop") {
                        window.location.href = "post.html";
                        console.log('user found')
                    } else {
                        alert("Incorrect password!");
                    }
                } else { 
                    alert("User not found!");
                }
            })
            .catch(error => alert("Error fetching users", error));
    });
