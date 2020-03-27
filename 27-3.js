//Tugas Selama Impact Byte

//Tugas Print Data
// const biodata = {
//     name: "Thoriq Nur Faizal",
//     age: 20,
//     collage: "Impact Byte Coding Bootcamp",
//     hobbies: ["swimming", "running", ["hiking", ["shopping", "traveling"]], "sleeping"],
//     address: {
//       street: "Kemang Raya",
//       province: "Jakarta Selatan",
//       country: "Indonesia"
//     },
//    contact: {
//      email: "Thoriq@impactbyte.com",
//      phone: {
//        countryCode: 021,
//        number: [13123,7968]
//      }
//    },
//    skills: {
//      language: ["English", "French", "Indonesia"],
//      programming: [{language: "JavaScript", framework: "React.js"}, "Java", "Python"]
//    }
//   }
  
//   // Code below here
//   console.log(`Hai, my name is ${biodata.name}, I studied in ${biodata.collage}.`);
//   console.log(`My programming skills are ${biodata.skills.programming[0].language} including using its framework ${biodata.skills.programming[0].framework} ${biodata.skills.programming[1]} and ${biodata.skills.programming[2]}.`);
//   console.log(`During school, I compete in many sport including ${biodata.hobbies[2][0]} and ${biodata.hobbies[1]}`);
//   console.log(`My hobbies are ${biodata.hobbies[3]} also ${biodata.hobbies[2][1][0]}`);
//   console.log(`Right now I live at ${biodata.address.street}, ${biodata.address.province} - ${biodata.address.country}. `);
//   console.log(`You can reach me on my email ${biodata.contact.email} or my phone number ${biodata.contact.phone.countryCode} - ${biodata.contact.phone.number[0]}${biodata.contact.phone.number[1]}`);
//   console.log(`Thank you and have a nice day.`);



//Tugas Operator Unery
// let a = 20
// let b = a

// // write your code below
// --a;
// ++b;

// console.log(`a = ${a}`);
// console.log(`b = ${b}`);



//Operator Binary
// let dollar = 14019.55 //rupiah
// let poundsterling = 18137.08 //rupiah
// let bitcoin = 128447883.20 // rupiah

// // write your code below
// d = 5*dollar;
// p = 4*poundsterling;
// b = 2*bitcoin;

// console.log(`5 dollar = Rp ${d} `);
// console.log(`4 poundsterling = Rp ${p} `);
// console.log(`2 bitcoin = Rp ${b} `);



//Operator Ternary
// let nilai = 90
// let kkm = 70

// // write your code below
// let hasil = 60

// let result = nilai > kkm ? "Nilai anda 90, Selamat anda lulus..!!" : "maaf anda tidak lulus..!!";

// let r = hasil > kkm ? "Nilai anda 90, Selamat anda lulus..!!" : "maaf anda tidak lulus..!!";

// console.log(result);

// console.log(r);



//Score Report APP
// let a = 90

// if(a < 60){
//   console.log("Don't give up");
// }
// else if(a<=80){
//   console.log("Good Job");
// }
// else{
//   console.log("Excellent");
// }



//BMI Operator
// let bodyWeight = 70;
// let bodyHeight = 170;

// // write your code below, do not change the code above!
// let a = bodyWeight / (1.70 * 1.70)

// switch(true) {
//   case (a < 18.5):
//     console.log("Berat badan anda kurang");
//     break;
//   case (a <= 24.9):
//     console.log("Berat badan anda ideal");
//     break;
//   case (a <= 29.29):
//     console.log("Berat badan anda berlebih");
//     break;
//   case (a <= 39.39):
//     console.log("Berat badan anda sangat berlebih");
//     break;
//   default:
//     console.log("Anda obesitas");
// }



//Loop Star
// for (let i = 1; i <= 5; i++) {
// 	let result = '';
// 	for (let j = 1; j <= i; j++) {
// 	   result += '*';
	
//  	}
// 	console.log(result);
// }

// console.log('\n')

// for (let i = 1; i <= 5; i++) {
//   let result = '';
// 	for (let j = i; j <= 5; j++) {
// 		result += '*';
// 	}
// 	console.log(result);
// }



//Nilai terbesar ketiga
// let numbers = [2, 100, 40, 6, 80, 5, 10]

// // Write your code down below! You can change the values inside above array

// numbers.sort((kecil, besar) => besar - kecil)

// console.log(numbers[2]);



//Print Square Star
// let digit = 5
// let digit2 = 7

// // Write your code down below! You can change the value of digit
// for (let i = 0; i < digit; i++) {
// 	let baris = '';
	
// 	for (let j = 0; j < digit; j++) {
// 			baris += '*';
// 	}
// 	console.log(baris);
// }

// console.log(`\n`);

// for (let i = 0; i < digit2; i++) {
// 	let baris2 = '';
	
// 	for (let j = 0; j < digit2; j++) {
// 			baris2 += '*';
// 	}
// 	console.log(baris2);
// }



//Hapus Spasi
// let input = "saya mau makan"

// // write your code below, do not change the code above!
// output=input.split(' ').join('');

// console.log(`Input: "${input}"`);
// console.log(`Output: "${output}"`);



//Carikan angka terbesar
// let a = [1,4,5,8,10,20,50]
// let b = [1,3,57,38,10,74,90]

// let fusion = [...a,...b]

// console.log(Math.max(...fusion));

// let c = [8,58,70,30,80,120,40]
// let d = [5,60,70,89,100,102]

// let fusion2 = [...c,...d]

// console.log(Math.max(...fusion2));



//Piramida Star
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


const num = ['2','3','4','5']
const numStr = num.join(';');
console.log(numStr);

const buah = ['apple','orange','grape']
buah.forEach((item,index,array)=>{
    console.log(`ini isi item ${item}`);
    console.log(`ini isi index ${index}`);
    console.log(`ini isi array ${array}`);
})

const totalBuah = buah.map(item => item.length)

console.log(totalBuah);