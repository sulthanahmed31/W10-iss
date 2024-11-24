const crypto = require('crypto');

// MD5 hash target
const targetHash = "5531a5834816222280f20d1ef9e95f69";

// Function to count hash MD5
function generateMD5(input) {
    return crypto.createHash('md5').update(input).digest('hex');
}

// function to do brute force
function bruteForcePIN() {
    for (let pin = 0; pin <= 9999; pin++) {
        // Format PIN menjadi 4 digit
        const pinString = pin.toString().padStart(4, '0');

        // Hashkan PIN
        const hash = generateMD5(pinString);

        // Periksa apakah hash cocok
        if (hash === targetHash) {
            console.log(`PIN ditemukan: ${pinString}`);
            return pinString; // Kembalikan PIN
        }
    }
    console.log("PIN tidak ditemukan.");
    return null;
}

// brute force
bruteForcePIN();