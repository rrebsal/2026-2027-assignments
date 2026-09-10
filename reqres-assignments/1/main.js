const options = {
  headers: {
    'x-api-key': 'reqres-free-v1',
  },
};

async function getUser() {
  const resp = await fetch('https://reqres.in/api/users/1', options);
  const data = await resp.json();
  console.log(data);
}

document.getElementById('fetchBtn').addEventListener('click', getUser);

getUser();
