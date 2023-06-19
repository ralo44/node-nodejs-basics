import {Transform} from 'node:stream'
import process from 'process';
const transform = async () => {
    const text = new Transform({
        transform(chunk, encoding, callback) {
          callback(null, chunk.toString().split("").reverse().join(""));
        },
      });
      process.stdin.pipe(text).pipe(process.stdout);
    
};

await transform();