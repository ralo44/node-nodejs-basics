const parseEnv = () => {
    const prefix = "RSS_";
    let array = [];
    for (let i in process.env) {
      if (i.includes(prefix)) {
        array.push(`${i}=${process.env[i]};`);
      }
    }
    console.log(array);
};

parseEnv();