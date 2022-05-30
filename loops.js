let k = 0;
do{
	if(k === 5){
  	k+=1;
    continue;

  }
  //console.log(k+1);
  k++;
}while(k<=10);

let arr = [2, 3, 4, 5, 6, 7, 8];
arr.forEach(function(element){
  console.log(element);
  //output:
  /*2
3
4
5
6
7
8*/
});
arr.forEach(function(element,index,array){
  console.log(element,index,array);
});
//output: 
/*
2
0
(7) [2, 3, 4, 5, 6, 7, 8]
3
1
(7) [2, 3, 4, 5, 6, 7, 8]
4
2
(7) [2, 3, 4, 5, 6, 7, 8]
5
3
(7) [2, 3, 4, 5, 6, 7, 8]
6
4
(7) [2, 3, 4, 5, 6, 7, 8]
7
5
(7) [2, 3, 4, 5, 6, 7, 8]
8
6
(7) [2, 3, 4, 5, 6, 7, 8]
*/

let obj = {
  name: "Shivani",
  technology: "Angular",
  age: 34,
  os: "Windows"
}

for(let key in obj){
  console.log(obj[key]);
  console.log(`${key} of obj is: ${obj[key]}`);
}
//output: Shivani
/*name of obj is: Shivani
Angular
technology of obj is: Angular
34
age of obj is: 34
Windows
os of obj is: Windows*/
