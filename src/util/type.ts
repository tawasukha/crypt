export type CryptOption = {
    secret: string
    output: "base64" | "base64url" | "hex"
}

export type Argument = Omit<CryptOption, "secret"> & {
    algorithm: string
    secret: Buffer
}