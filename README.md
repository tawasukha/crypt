# Crypt

Library for encrypt and decrypt text with zero dependency

## Installation

```sh
pnpm add @tawasukha/crypt
```

## Commands

```typescript
import { crypt } from "@tawasukha/crypt"

const crypto = crypt({
  secret: "www88a8078385d0c", 
  output:"hex"
})
const text = "Hello World"

const encrypted = crypto.encrypt(text)
const decrypted = crypto.decrypt(encrypted)

console.log("encrypted",ecrypted)
console.log("decrypted",decrypted)
```