import crypto from 'crypto';
import fs from 'fs';
const text = fs.readFileSync("./src/hash/files/fileToCalculateHashFor.txt");

const calculateHash = async () => {
    const hashNode = (value) =>
    new Promise((resolve) =>
      setTimeout(
        () => 
        resolve(crypto.createHash("sha256").update(value).digest("hex")),
        1
      )
    );

  hashNode(text).then(console.log);
};

await calculateHash();