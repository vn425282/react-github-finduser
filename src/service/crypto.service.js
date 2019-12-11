import cryptoJS from 'crypto-js';

const secretKey = 'vn425282';
class CryptoService {
    encrypt (token) {
        return cryptoJS.AES.encrypt(token, secretKey).toString();
    }

    decrypt (hash) {
        const bytes  = cryptoJS.AES.decrypt(hash, secretKey);
        return bytes.toString(cryptoJS.enc.Utf8);
    }
}

export default new CryptoService();