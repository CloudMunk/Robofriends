// ASYNC AWAIT

movePlayer(100, 'Left')
  .then(() => movePlayer(400, 'Left'))
  .then(() => movePlayer(10, 'Right'))
  .then(() => movePlayer(330, 'Left'))




// With async await
  async function playerStart() {
  	const firstMove = await movePlayer(100, 'Left'); //pause
  	await movePlayer(400, 'Left'); //pause
  	await movePlayer(10, 'Right'); //pause
  	await movePlayer(330, 'Left'); //pause

  }

  // More with Fetch

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(console.log)

    // Now with async

  async function fetchUsers() {
  	const resp = await fetch('https://jsonplaceholder.typicode.com/users')
	const data = await resp.json();
	console.log(data);
  }  

// New example

  const urls = [
   'https://jsonplaceholder.typicode.com/users',
   'https://jsonplaceholder.typicode.com/posts',
   'https://jsonplaceholder.typicode.com/albums'
]



























