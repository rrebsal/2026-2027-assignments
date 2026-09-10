const baseOptions = {
  headers: {
    'x-api-key': 'reqres-free-v1',
  },
};

const unkUrl = 'https://reqres.in/api/unknown/23';

async function getUnk() {
  try {
    const resp = await fetch(unkUrl, baseOptions);

    if (!resp.ok) {
      throw new Error(`GET Response didn't work sry ${resp.status}`);
    }

    const data = await resp.json();
    console.log('GET success:', data);
  } catch (error) {
    console.error('GET error:', error.message);
  }
}

async function postUnk() {
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'reqres-free-v1',
      },
      body: JSON.stringify({ name: 'Test' }),
    };

    const resp = await fetch(unkUrl, options);

    if (!resp.ok) {
      throw new Error(`POST request failed with status ${resp.status}`);
    }

    const data = await resp.json();
    console.log('POST success:', data);
  } catch (error) {
    console.error('POST error:', error.message);
  }
}

async function putUnk() {
  try {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'reqres-free-v1',
      },
      body: JSON.stringify({ name: 'Updated' }),
    };

    const resp = await fetch(unkUrl, options);

    if (!resp.ok) {
      throw new Error(`PUT Request failed sry ${resp.status}`);
    }

    const data = await resp.json();
    console.log('PUT success:', data);
  } catch (error) {
    console.error('PUT error:', error.message);
  }
}

async function deleteUnk() {
  try {
    const options = {
      method: 'DELETE',
      headers: {
        'x-api-key': 'reqres-free-v1',
      },
    };

    const resp = await fetch(unkUrl, options);

    if (!resp.ok) {
      throw new Error(`DELETE request failed sry.. ${resp.status}`);
    }

    console.log('DELETE worked!!', resp.status);
  } catch (error) {
    console.error('DELETE error:', error.message);
  }
}

async function runAll() {
  await getUnk();
  await postUnk();
  await putUnk();
  await deleteUnk();
}

document.getElementById('runBtn').addEventListener('click', runAll);

runAll();
