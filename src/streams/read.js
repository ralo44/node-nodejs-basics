import {createReadStream} from 'node:fs';

const read = async () => {
    const streamFile = createReadStream("./src/streams/files/fileToRead.txt");
    streamFile.pipe(process.stdout);
};

await read();