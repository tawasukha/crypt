import { Argument } from "./util/type";
import crypto from "crypto"

export function decrypt(this: Argument, text: string) {
    const decipher = crypto.createDecipheriv(this.algorithm, this.secret, null)
    return Buffer.concat([decipher.update(Buffer.from(text, this.output)), decipher.final()]).toString("utf8");;
}