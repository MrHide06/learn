// const student = {
//     name: "Alpha",
//     age: 25,
//     isAdmin: false,
//     courses: ["html", "css", "js"],
//     wife: null
//   };

//   const json = JSON.stringify(student);

//   json
//   console.log(typeof json)

//json.stringfy  

// const jsonObject = JSON.parse(json);
// jsonObject
//json.parse

let digit = 5
for (let i = 0; i < digit; i++) {
	let baris = '';
	
	for (let j = 0; j < digit; j++) {
			baris += '*';
	}
	console.log(baris);
}