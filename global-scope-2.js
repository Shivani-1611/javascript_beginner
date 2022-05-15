let num=50;
const logNum = () =>{
  let num= 100;
  console.log(num);
};
logNum();
console.log(num);

const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
 stars = 'Sirius';
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars);
