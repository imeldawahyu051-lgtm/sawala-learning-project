function tunggu(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function ambilData() {
  console.log("Mengambil Data User...");

  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    {
      method: "GET"
    }
  );

  const data = await response.json();

  console.log("Data User 1:");
  console.log(data[0]);
}

ambilData();