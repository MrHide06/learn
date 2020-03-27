// let digit = 5
// for (let i = 0; i < digit; i++) {
// 	let baris = '';
	
// 	for (let j = 0; j < digit; j++) {
// 			baris += '*';
// 	}
// 	console.log(baris);
// }

for (let i=1;i<=5;i++){
    let baris = '';

    for (let j=i;j<=5;j++){
        baris += ' ';
    }
    for (let k=1;k<=i;k++){
        baris += '*';
    }
    for (let l=1;l<=i-1;l++){
        baris += '*';
    }
    console.log(baris);
}
// let a = [1,2,3]
// let b = [4,5,6]
// let ab = [...a, ...b]
// console.log(ab);