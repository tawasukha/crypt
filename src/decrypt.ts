import { toBase64 } from "./util/base64url";
import { Argument } from "./util/type";
import crypto from "crypto"

export function decrypt(this: Argument, text: string) {
    const decipher = crypto.createDecipheriv(this.algorithm, this.secret, null)
    const output = this.output === "base64url" ? "base64" : this.output
    text = (output === this.output) ? text : toBase64(text)
    return Buffer.concat([decipher.update(Buffer.from(text, output)), decipher.final()]).toString("utf8");;
}