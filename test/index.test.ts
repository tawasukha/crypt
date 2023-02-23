import { crypt } from "../src/index"
import { CryptOption } from "../src/util/type"

const option: CryptOption = { secret: "www88a8078385d0c", output: "base64url" }
const text = "Hello World"
const encrypted = "fGqEyJwHXDtPhUmrCbu4BA"
const crypto = crypt(option)

describe('crypt', () => {
    it('Register Option', () => {
        expect(crypto.option).toEqual(option);
    });
    it('Encrypt', () => {
        expect(crypto.encrypt(text)).toEqual(encrypted);
    });
    it('Decrypt', () => {
        expect(crypto.decrypt(encrypted)).toEqual(text);
    });
});
