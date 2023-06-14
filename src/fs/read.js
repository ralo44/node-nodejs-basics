import fs from 'fs';
const file = "./src/fs/files/fileToRead.txt";
const read = async () => {
    if ( fs.existsSync(file)) {
        const file = fs.createReadStream("./src/fs/files/fileToRead.txt", "utf-8");
        file.on("data", (chunk) => console.log(chunk));
    } else {
        const err = new Error('FS operation failed');
        return console.log(err.message);
    }};

await read();