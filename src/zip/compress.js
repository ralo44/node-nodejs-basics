import {createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'node:zlib'

const compress = async () => {
    const compressFile = (pathFile) => {
        const handleStream = createReadStream(pathFile);
        handleStream.pipe(createGzip())
          .pipe(createWriteStream("archive.gz"))
          .on("finish", () => {
            console.log("Compression finished.");
          });
      };
      compressFile("./src/zip/files/fileToCompress.txt");
};

await compress();