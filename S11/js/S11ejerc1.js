function startProcess() {
  console.log("Start Phase 1. Wait one second...");
  setTimeout(function () {
    console.log("Phase 1 completed. Wait two seconds...");
    setTimeout(function () {
      console.log("Phase 2 completed. Wait three seconds...");
      setTimeout(function () {
        console.log("Phase 3 completed. Wait four seconds...");
        setTimeout(function () {
          console.log("Phase 4 completed.");
          // More asynchronous calls...
        }, 4000);
        console.log('Estoy en 4');
      }, 3000);
      console.log('Estoy en 3');
    }, 2000);
    console.log('Estoy en 2');
  }, 1000);
  console.log('Estoy en 1');
}

startProcess();