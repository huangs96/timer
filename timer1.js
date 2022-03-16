let processes = process.argv;
let timer = processes.splice(2);



const input = function(process) {
  for (const time of process) {
    if (time === []) {
      continue;
    }

    if (isNaN(time)) {
      continue;
    }

    if (time < 0) {
      continue;
    }

    setTimeout(() => {
      console.log('..');
    }, 1000 * time) //1000 milliseconds * time input by commandline
  }
};

input(timer);

//error code whenn using process.stdout.write in line 21: TypeError: Cannot read property 'write' of undefined