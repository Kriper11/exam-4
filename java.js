//nomer-1
// let firstName = "Yusuf"
// let age = "23"
// let isStudent = true
// console.log(firstName, age, isStudent);

//nomer-2
// let text = 'JavaScript'
// let number = 25
// let boolin = true
// let und = undefined
// console.log(typeof text);
// console.log(typeof number);
// console.log(typeof boolin);
// console.log(typeof und);

//nomer-3
// let number1 = +prompt("Birinchi songni kiriting")
// let number2 = +prompt("Ikkinchi songni kiriting")
// alert(number1 + number2)

//nomer-4
// let number = +prompt("songni kiriting")
// console.log(Math.floor(number));
// console.log(Math.round(number));
// console.log(Math.ceil(number));

//nomer-5
// let name = prompt("Ismingizni kiriting")
// alert('sizning ismingiz ' + name.length + ' sondan iborat bolgan')

//nomer - 6
// let city = prompt("Shahar nomini kiriting")
// console.log(city.toUpperCase());
// console.log(city.toLowerCase());

//nomer-7
// let age = +prompt("Yoshingizni kiriting");
// if (age >= 18) {
//     alert("Ruxsat berildi");
// } else {
//     alert("Hali mumkin emas");
// }

//nomer-8
// let number = +prompt('Song kiriting')
// if (number % 2 === 0) {
//     console.log('bu juft son');
// } else {
//     console.log('bu tog son');
// }

//nomer-9
// let student = {
//     name: "Ali",
//     age: 16,
//     course: 1
// };

// console.log(student.name);
// console.log(student.age);
// console.log(student.course);

//nomer-10
// let password = prompt("Parol kiriting");

// if (password.length >= 8) {
//     alert("Parol uzunligi yetarli");
// } else {
//     alert("Parol juda qisqa");
// }

//nomer-11
// let name = prompt("Ismingizni kiriting");

// name = name.toLowerCase();

// if (name === "ali") {
//     alert("Salom, Ali!");
// } else {
//     alert("Sis bilan tanishganimdan xursandman!");
// }

//nomer-12
// let email = prompt("Email kkiriting");
// if (email.includes("@")) {
//     alert("Email formati dastlabki tekshiruvdan o‘tdi");
// } else {
//     alert("Emailda @ belgisi yo‘q");
// }

//nomer-13
// let number1 = +prompt("Первое число");
// let number2 = +prompt("Второе число");
// let amal = prompt("+, -, * yoki / Kiriting");

// if (amal === "+") {
//     alert(number1 + number2);
// } else if (amal === "-") {
//     alert(number1 - number2);
// } else if (amal === "*") {
//     alert(number1 * number2);
// } else if (amal === "/") {
//     if (b === 0) {
//         alert("Nolga bilish mumkun emas");
//     } else {
//         alert(number1 / b);
//     }
// } else {
//     alert("Eror");
// }

//nomer-14
// let price = +prompt("Mahsulot narhini kiritig");
// if (price >= 500000) {
//     price = price * 0.9;
// }
// alert(Math.round(price));

//nomer-15
// let user = {
//     name: "Ali",
//     age: 20,
//     email: "ali@gmail.com",
//     isActive: true
// };
// if (user.isActive === true) {
//     alert("Kirish mumkin");
// } else {
//     alert("Kirish mumkin emas");
// }

//nomer-16
// let text = prompt("so‘zni kiriting").toLowerCase();
// let word = prompt("Kaysi sozni izlaymiz").toLowerCase();

// if (text.includes(word)) {
//     alert("Soz topildi");
// } else {
//     alert("Soz topilmadi");
// }

//nomer-17
//  let ball = +prompt("Ballni kiriting");
// if (ball < 0 || ball > 100 || isNaN(ball)) {
//     alert("Notogro ball");
// } else if (ball >= 90) {
//     alert("A");
// } else if (ball >= 80) {
//     alert("B");
// } else if (ball >= 70) {
//     alert("C");
// } else if (ball >= 60) {
//     alert("D");
// } else {
//     alert("F");
// }

//nomer-18
// let random = Math.floor(Math.random() * 10) + 1;
// let guess = +prompt("1 dan 10 gacha raqamni toping");
// if (guess === random) {
//     alert("Togri!");
// } else {
//     alert("No togri! Son:" + random);
// }

//nomer-19
// let name = prompt("Ismingizni kiriting").toLowerCase();
// let surname = prompt("Familiyangizni kiriting").toLowerCase();

// if (
//     name.length > 0 &&
//     surname.length > 0 &&
//     !name.includes(" ") &&
//     !surname.includes(" ")
// ) {
//     let username = name + "." + surname;
//     alert(username);
// } else {
//     alert("Notogri malumot");
// }

//nomer-20
// let price = +prompt("Buyurtma summasin kiriting");
// let isMember = prompt("A`zomisiz? Ha/Yok");
// if (price >= 200000 || isMember === "Ha") {
//     alert("Yetkazib berish bepul. Jami: " + price);
// } else {
//     alert("Jami: " + (price + 20000));
// }