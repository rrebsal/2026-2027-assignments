async function createUser() {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'reqres-free-v1',
    },
    body: JSON.stringify({
      name: 'Jaana Doe',
      job: 'Worker',
    }),
  };

  const resp = await fetch('https://reqres.in/api/users', options);
  const data = await resp.json();
  console.log(data);
}

document.getElementById('createBtn').addEventListener('click', createUser);

createUser();
