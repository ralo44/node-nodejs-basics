import fs from 'fs';
const files = "./src/fs/files";
const filesCopy = "./src/fs/files-copy";

const copy = async () => {
    if ( !fs.existsSync(filesCopy) && fs.existsSync(files)) {
        await fs.promises.mkdir(filesCopy, { recursive: true })
        fs.readdir(files, (err, file) => {
            file.forEach((file) => {
                fs.copyFile(`./src/fs/files/${file}`, `./src/fs/files-copy/${file}`, (err) => {
                    if (err) return err;
                  });
            })
            console.log("Files copied");
        })
    } else {
        const err = new Error('FS operation failed');
        return console.log(err.message);
    }
};

await copy();
