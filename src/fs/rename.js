import fs from 'fs';
const wrongName = "./src/fs/files/wrongFilename.txt";
const properName = "./src/fs/files/properFilename.md";

const rename = async () => {
    if ( fs.existsSync(wrongName) && !fs.existsSync(properName)) {
        fs.rename(wrongName, properName, () => {
            console.log("proper Name!");
          });
    } else {
        const err = new Error('FS operation failed');
        return console.log(err.message);
    }
};

await rename();