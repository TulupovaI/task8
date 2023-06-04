//№1
let str = ' ';

for ( i = 20; i <= 30; i = i + 0.5) {
	str = str + i +' ' ;
}

console.log(str);

//№2
let arr = [];

for (i = 10; i <= 100; i = i + 10) {
  arr.push(i*40)    
};

console.log(arr);  


// цю задачу можна розв'язати ще так.
for (i = 10; i <= 100; i = i + 10) {
  console.log(i*40);    
};


//№3
let n = prompt('Введіть натуральне число', "10");
for (i = 1; i <= 100; i++ ){
  if(i ** 2 <= n ) {
    console.log(i);
  }
 };

 //№4

let arr1 = [];
let num = prompt('Введіть натуральне число', '10');
 for (i = 1; i <= num; i++) {
   if (num % i == 0){
    arr1.push(i)
   }       
 };
console.log(arr1);

if (arr1.length == 2) {
  console.log(`Число ${num} є простим`);
 } else{
  console.log(`Число ${num} НЕ є простим`);
 }
 
 //№5

let num1 = prompt('Введіть натуральне число', '9');
while (num1 % 3 == 0) {
  num1 = num1 / 3;
} 
console.log(((num1 == 1)? "Число можна отримати " : "Число НЕможна отримати"));