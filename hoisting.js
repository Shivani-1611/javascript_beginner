//Hoisting: The function declaration  can be accessed before it is defined. So you can call it even before it is defined.
greetWorld();

function greetWorld(){
  console.log("Hello, World!");
}

function getReminder(){
    console.log('Water the plants.');
  }
  getReminder();
  function greetInSpanish(){
    console.log('Buenas Tardes.');
  }
  greetInSpanish();