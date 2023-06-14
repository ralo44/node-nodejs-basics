import fs from 'fs';
const directory = "./src/fs/files";

const list = async () => {
    if ( fs.existsSync(directory)) {
        fs.readdir(directory, (err, directory) => {
            console.log(directory);
          });
    } else {
        const err = new Error('FS operation failed');
        return console.log(err.message);
    }
};


await list();