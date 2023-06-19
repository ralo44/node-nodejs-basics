import {createWriteStream} from 'node:fs';


const write = async () => {
    const filePath = createWriteStream("./src/streams/files/fileToWrite.txt");
    process.stdin.pipe(filePath);
};

await write();