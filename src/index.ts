import { Argument, type CryptOption } from "./util/type"
import { encrypt as rawEncrypt } from "./encrypt"
import { decrypt as rawDecrypt } from "./decrypt"
import { Buffer } from "buffer"

export const crypt = function (option: CryptOption) {
    if (option.secret.length !== 16) {
        throw new Error("Secret must be 16 characters")
    }

    const secret = Buffer.from(option.secret, "utf8")
    const arg: Argument = {
        algorithm: "AES-128-ECB",
        output: option.output,
        secret,
    }

    const encrypt = rawEncrypt.bind(arg)
    const decrypt = rawDecrypt.bind(arg)

    return {
        option,
        encrypt,
        decrypt,
    }
} 