function menuMasakan(menu) {
    return new Promise((resolve, reject) => {
        console.log("Masakan sedang dicari...");

        setTimeout(() => {
            if (menu === 'Nasi Goreng' || menu === 'Mie Goreng') {
                resolve("Siap diSajikan")
            } else {
                reject("Tidak Tersedia")
            }
        }, 3000);
    })
}

async function proses(menu) {
    try {
        const hasil = await menuMasakan(menu);
        console.log(`Masakan Anda ${menu}`);
        console.log(hasil);
    } catch (error) {
        console.log('Error ', error);
    }
    finally {
        console.log("Terima Kasih ")
    }
}

await proses('Mie Goreng');
