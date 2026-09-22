function tunggu(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function ambilData() {
    console.log("Mengambil Data User...");
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );

    const data = await response.json();

    console.log("Data User 1:");
    console.log(data[0]);

    await tunggu(3000);

    console.log("Data User 2:");
    console.log(data[1]);

    await tunggu(3000);

    console.log("Data User 3:");
    console.log(data[2]);
}

ambilData();