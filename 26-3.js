//For
// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }

//while
// let i = 0
// while(i <= 10){
//     console.log(i);
//     i++
// }

//do while
// let i = 1
// do{
//     console.log(i);
//     i++
// } while(i <= 10)

//break
// let i = 1
// do {
//     if (i === 3) {
//         break;
//     }else{
//         console.log(i);
//     }
//     i++
// }while(i <= 10)

//continue
// for(let i = 1; i <= 10; i++){
//     if(i === 3){
//         continue
//     }
//     console.log(i);
// }

//ganjil
// for(let i = 1; i <= 10; i+=2){
//     console.log(i);
// }

//genap
// for(let i = 2; i <= 10; i+=2){
//     console.log(i);
// }

//genap
// for(let i = 1; i <= 10; i++){
//     if(i % 2 == 0){
//         console.log(i);
//     }
// }

//ganjil
// for(let i = 1; i <= 10; i++){
//     if(i % 2 == 1){
//         console.log(i);
//     }
// }

//function
// function bilanganGanjil(){
//     for(let i = 1; i <= 10; i++){
//         if(i % 2 == 1){
//             console.log(i);
//         }
//     }
// }
// bilanganGanjil()

//parameter
// function greetings(name ){
//     console.log(`Hallo ${name}`)
// }
// greetings('Wahid')

//defaut parameter
// function greetings(name = "Wahid"){
//     console.log(`Hallo ${name}`)
// }
// greetings('Wahid')
// greetings()

//function return value
// function luasPersegi(s){
//     return s*s;
// }
// console.log(luasPersegi(5))

//function complexity
// function isAgeOlderThan18(a){
//     if(a > 18) return "Dia lebih tua";
//     else return "Dia Lebih muda";
// }
// console.log(isAgeOlderThan18(18))

// Function in a Variable
// const showMyName = function(){
//     console.log("Selamat datang alpha")
// }
// showMyName()

//arrow function
// const logMessage = (name = beta) => {
//     console.log(`hallo ${name}`);
// }
// logMessage("delta")

// const calculate = () => 1+2
// console.log(calculate())

// const allertMessage = () => console.log("Ini Peringatan")
// allertMessage()

// const bilanganGanjil = () =>{
//     for(let i = 1; i <= 10; i++){
//         if(i % 2 == 1){
//             console.log(i);
//         }
//     }
// }
// bilanganGanjil()

//callback
// function ask(question, yes, no){
//     if(confirm(question)) yes();
//     else no();
// }

// function showOk(){
//     alert("You agreed");
// }

// function showCancel(){
//     alert("You Canceled the execution");
// }

// const isAdmin = (user, yes, no) => {
//     if(user === "Admin") yes()
//     else no()
// }

// const showAdmin = () => {
//     console.log("Selamat datang Admin")
// }

// const notAdmin = () => {
//     console.log("Anda bukan Admin")
// }

// isAdmin("Admi", showAdmin, notAdmin)

// const isAdmin = (user, yes, no) => {
//     if(user === "Admin") yes()
//     else no()
// }

// const showAdmin = () => {
//     console.log("Selamat datang Admin")
// }

// const notAdmin = () => {
//     console.log("Anda bukan Admin")
// }

// isAdmin("Admin", () => {("Selamat datang Admin")}, notAdmin)

// for (var i=1;i<=5;i++){
//     for (var j=1;j<=i;j++){
//         console.log("*");
//     }
//     // console.log("<br>");
// }

// for (let i=1;i<=5;i++){
//     for (let j=1;j<=i;j++){
//         console.log("*");
//     }
//     console.log("<br>");
// }


    // console.log("- Segitiga 1<br>");
    // for (var i=1;i<=5;i++){
    //     for (var j=1;j<=i;j++){
    //         console.log(`*`);
    //     }
    //     // console.log("<br>");
    // }

    // console.log("- Segitiga 2<br>");
    // for (var i=1;i<=5;i++){
    //     for (var j=i;j<=5;j++){
    //         console.log("*");
    //     }
    //     console.log("\n");
    // }
    // let baris, i = 0;
	// 	let nilai_prompt = prompt("Tinggi: ", ""); 
	// 	let tinggi=parseInt(nilai_prompt);
 
	// 	for (baris = 0; baris <= tinggi ; baris++) {
 
	// 	// memBuat sejumlah spasi
	// 	for (i = 1; i <= tinggi - baris; i++) {
	// 	console.log(" "); // Karakter spasi
	// 	 }
 
	// 	// menampilkan bintang
	// 	for (i = 1; i < 2 * baris; i++) {
	// 	console.log("*"); }
 
	// 	// Pindah baris
    // 	console.log("\n"); }
    
//     var row = 5;

// for (var i = 1; i <= row; i++) {
// 	var num = '';

// 	for (var j = i; j <= row; j++) {
// 		console.log("*");
// 	}
// 	console.log(num);
// }


for (let i = 1; i <= 5; i++) {
	let result = '';
	for (let j = 1; j <= i; j++) {
	   result += '*';
	
 	}
	console.log(result);
}

console.log('\n')

for (let i = 1; i <= 5; i++) {
  let result = '';
	for (let j = i; j <= 5; j++) {
		result += '*';
	}
	console.log(result);
}


// let digit = 5
// for (let i = 0; i < digit; i++) {
// 	let baris = '';
	
// 	for (let j = 0; j < digit; j++) {
// 			baris += '*';
// 	}
// 	console.log(baris);
// }

// for (let i=1;i<=5;i++){
//     let baris = '';

//     for (let j=i;j<=5;j++){
//         baris += ' ';
//     }
//     for (let k=1;k<=i;k++){
//         baris += '*';
//     }
//     for (let l=1;l<=i-1;l++){
//         baris += '*';
//     }
//     console.log(baris);
// }

let a = [1,2,3]
let b = [4,5,6]
let ab = [...a, ...b]
console.log(ab);