// const { fork } = require("child_process");
import {fork} from 'child_process';

const spawnChildProcess = async (args) => {
    const child = fork("./src/cp/files/script.js", [...args]);
    child.on("message", (msg) => {console.log(msg);});  
    child.on("close", function (code) {
      console.log("child process exited with code " + code);
    });
};
spawnChildProcess(  ['a', 'b', 'c']);
