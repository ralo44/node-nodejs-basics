import fs from 'fs';

const create = async () => {
    const file = new URL("./files/fresh.txt", import.meta.url)
    if (fs.existsSync(file)) {
        const error = new Error('FS operation failed');
        return console.log(error.message);
    } else {
        fs.writeFile(file, 'I am fresh and young', err => {
            if(err){
                console.error(err)
            }
        })
    } 

};

create();