import fs from 'fs';
import  zlib  from 'node:zlib';
import { pipeline } from 'stream';

const decompress = async () => {
  const unzip = zlib.createUnzip();
  const input = fs.createReadStream("archive.gz");
  const output = fs.createWriteStream("./src/zip/files/fileToCompress.txt", {
    encoding: "binary",
  });
  pipeline(input, unzip, output, (error) => {
    console.log('File decompressed.');
    if (error) console.log(error);
  });
};

await decompress();