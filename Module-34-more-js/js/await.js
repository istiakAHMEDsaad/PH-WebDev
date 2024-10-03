const myLoader = () => {
  return new Promise((resolve, reject) => {
    const success = Math.random();
    if (success <= 0.5) {
      resolve(success);
    } else {
      reject(success);
    }
  });
};

myLoader().then((resolve) => console.log(`resolve data ${resolve}`));

// !-----------------------------------All Method---------------------------------------! //

fetch('#')
  .then((resolve) => resolve.json())
  .then((json) => console.log(json))
  .catch((error) => console.log(error));

async function loadData() {
  const ressolve = await fetch('#');
  const json = await ressolve.json();
  console.log(json);
}

const myData = async () => {
  const response = await fetch('#');
  const json = await response.json();
  console.log(json);
};

const myVault = async () => {
  try {
    const response = await fetch('#');
    const json = await ressolve.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};
