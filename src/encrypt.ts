import { fromBase64 } from "./util/base64url";
import { Argument } from "./util/type";
import crypto from "crypto"

export function encrypt(this: Argument, text: string) {
    const cipher = crypto.createCipheriv(this.algorithm, this.secret, null)
    const output = this.output === "base64url" ? "base64" : this.output
    const result = Buffer.concat([cipher.update(text), cipher.final()]).toString(output)

    return (output === this.output) ? result : fromBase64(result)

}