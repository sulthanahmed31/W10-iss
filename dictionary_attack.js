const fs = require('fs');
const crypto = require('crypto');

// MD5 hash target
const targetHash = "578ed5a4eecf5a15803abdc49f6152d6";

// Fungsi untuk menghitung hash MD5
function generateMD5(input) {
    return crypto.createHash('md5').update(input).digest('hex');
}

// Fungsi untuk melakukan dictionary attack
function dictionaryAttack(dictionaryFile) {
    // Baca file kamus
    const words = fs.readFileSync(dictionaryFile, 'utf8').split('\n');

    // Iterasi setiap kata dalam kamus
    for (const word of words) {
        const trimmedWord = word.trim(); // Hilangkan spasi atau karakter baru
        const hash = generateMD5(trimmedWord);

        if (hash === targetHash) {
            console.log(`Password ditemukan: ${trimmedWord}`);
            return trimmedWord;
        }
    }

    console.log("Password tidak ditemukan dalam kamus.");
    return null;
}

// Jalankan dictionary attack
dictionaryAttack('500-worst-passwords.txt');