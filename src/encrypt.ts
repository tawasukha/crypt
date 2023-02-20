import { Argument } from "./util/type";
import crypto from "crypto"

export function encrypt(this: Argument, text: string) {
    const cipher = crypto.createCipheriv(this.algorithm, this.secret, null)
    return Buffer.concat([cipher.update(text), cipher.final()]).toString(this.output)
}