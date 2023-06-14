import fs from 'fs';
const file = "./src/fs/files/fileToRemove.txt";

const remove = async () => {
    if ( fs.existsSync(file)) {
        fs.unlink(file, () => {
            console.log("File delete");
          });
    } else {
        const err = new Error('FS operation failed');
        return console.log(err.message);
    }};

await remove();