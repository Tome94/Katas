const checkAir = function (samples,threshold){
  let dirtyAir = 0;
  let totalAir = samples.length;
  for (const sample of samples){
    if (sample === "dirty"){
      dirtyAir += 1;
    }
  }
  if (dirtyAir/totalAir > threshold){
    console.log ("polluted");
  }
  else {
    console.log ("clean");
  }
};

checkAir (['clean', 'dirty', 'clean', 'clean', 'dirty'], 0.3);