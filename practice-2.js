let raceNumber = Math.floor(Math.random() * 1000);
let registered=false;
let runnerAge=18;
if(runnerAge>18 && registered){
  raceNumber+=1000;
}
if(runnerAge>18 && registered){
  console.log(`You will race at 9:30am for ${raceNumber}`);
}
else if(runnerAge>18 && !registered){
  console.log(`You will race at 11:00am for ${raceNumber}`);
}
else if(runnerAge===18){
  console.log('Check registration desk');
}
else{
  console.log(`Youth registrants run at 12:30 pm ${raceNumber}`);
}