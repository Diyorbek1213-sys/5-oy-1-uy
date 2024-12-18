// 1. Destructuring Assignment

// Mashq: Quyidagi obyektni name, age, va location maydonlariga ajratib oling va ularni konsolga chiqaring.
alert("1-vazifa")
const user = { name: "Ali", age: 25, location: "Toshkent" }; // ustoz negadir location deb yangi o'zgaruvchi yaratsam browserda oldin yaratilgan deyapti

let { name, age } = user

console.log(name)
console.log(age)
console.log(user.location)

// Mashq: Massivdan destructuring yordamida birinchi va ikkinchi elementlarni ajratib oling va qolgan barcha elementlarni others nomli yangi massivga joylashtiring.
alert("2-vazifa")
const numbers = [10, 20, 30, 40, 50];

let [a, b, ...others] = numbers

console.log(a, b, others)

// Mashq: Funksiya parametrlari sifatida obyekt berilgan. Funksiya ichida destructuring orqali title va price maydonlarini oling va konsolga chiqaring.
alert("3-vazifa")
const product = { title: "Telefon", price: 300, brand: "Samsung" };

function displayProduct({ title, price }) {
    console.log(title)
    console.log(price)
}
displayProduct(product);

// 2. Scope

// Mashq: Quyidagi kodda x qiymatini global, local va block scope’da o‘zgartirib, ularning o‘zgarishlarini kuzating.
alert("4-vazifa")
let x = 10 // global scope
console.log("global scope", x)

function func(x) {
    x = 20
    console.log("local / function scope", x)
}

func()

// for, while, do...while {} va boshqalar bor block scope
if (true) {
    console.log("block scope")
}

// Mashq: Quyidagi kodda qaysi scope`da xatolik yuz berishini aniqlang va tuzating.
alert("5-vazifa")
function calculate() {
    if (true) {
        let result = 10;
        console.log(result); // to'g'ri chunki if ni ichida bo'lsagina chiqadi bu block scope block scopeni function scopeda olmoqchi bo'lingan adashmasam
    }
    // console.log(result); // Xato
}

calculate();

// Mashq: Global scope’dagi o‘zgaruvchini funksiyada va blok ichida o‘zgartirish qanday natija berishini kuzating.
alert("6-vazifa")
let count = 5;

function increment() {
    count++;
    console.log("Function scope:", count);
}

increment();
if (true) {
    count += 2;
    console.log("Block scope:", count);
}

console.log("Global scope:", count);

// 3. Spread/Rest Operator

// Mashq: Quyidagi ikkita massivni spread operator yordamida bitta massivga birlashtiring.
alert("7-vazifa")
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

let concat = [...arr1, ...arr2]

console.log(concat)

// Mashq: Funksiyaga istalgan miqdordagi argumentlarni yuboring va rest operator yordamida ularni bir massiv sifatida qabul qiling. Har bir elementni kvadratga ko‘paytirib qaytaring.
alert("8-vazifa")
function squareNumbers(...numbers) {
    let res = numbers.map(value => {
        return value ** 2
    })
    return res
}

console.log(squareNumbers(2, 3, 4)); // [4, 9, 16]

// Mashq: Quyidagi obyektga yangi maydonlar qo‘shish uchun spread operatoridan foydalaning.
alert("9-vazifa")
const user_2 = { name: "Ali", age: 25 };
const updatedUser = {
    ...user_2
};

console.log(updatedUser);

// 4. Hoisting va TDZ (Temporal Dead Zone)

// Mashq: Quyidagi kodni hoisting qoidasiga asoslanib tahlil qiling va qaysi qatorda xatolik yuz berishini tushuntiring.
alert("10-vazifa")
console.log(z); // hoistingga uchraydi va undefined qaytaradi
var z = 10;



// console.log(zz); // let va const bundaymas bu xatolikga uchraydi TDZ ga
let zz = 20;


// bu to'g'ri tepaga ko'tarilib ketadi
test();
function test() {
    console.log("Test function called");
}

// Mashq: TDZ haqida tushuncha hosil qilish uchun quyidagi kodni to‘ldiring va xatoni tushuntiring.
alert("11-vazifa")

// console.log(xx); // TDZ => Temporal Dead Zone // bu taqiqlangan ekan let va constda undefined qaytarishi lekin varda unaqamasekan
let xx = 5;

// Mashq: Quyidagi kodning ishlash tartibini tushuntiring.
alert("12-vazifa")
var ooo = 10; // global scope

function example() {
    console.log(ooo); // function scope bundan global scopedagilarni olsa boladi lekin tagida yana o'zgartirish kirityapdi function scopeda shunchun ooo = 20 tepaga otib ketyapti tepadagi global scope deyarli ishlaganiyam yoq
    var ooo = 20;
    console.log(ooo); // bu ooo = 20 ni pasida turipti shunchun 20 chiqadi
}

example();

// 5. Modul

// Mashq: Ikkita fayl yarating. Birinchi faylda sum va multiply funksiyalarini yozing va ularni eksport qiling. Ikkinchi faylda ushbu funksiyalarni import qiling va ulardan foydalaning.
alert("13-vazifa")
import { multiply } from './multiply.js'
import { sum } from './sum.js';

multiply()
sum()

// Mashq: Default eksportdan foydalaning. Bir faylda greet funksiyasini default qilib eksport qiling va boshqa faylda uni import qilib ishlating.
alert("14-vazifa") // ?

// Mashq: Modullarda nom o‘zgarishini sinab ko‘ring. Quyidagi funksiyani eksport qiling va import qiling, lekin boshqa nom bilan foydalaning.
alert("15-vazifa")
import { simple } from './simple.js'

simple()

// Massiv va obyektlar namunasi:
alert("16-vazifa")
const users_3 = [
    { id: 1, name: "Ali", age: 25, isActive: true },
    { id: 2, name: "Laylo", age: 30, isActive: false },
    { id: 3, name: "Sardor", age: 22, isActive: true },
    { id: 4, name: "Madina", age: 28, isActive: false },
];

const products = [
    { id: 1, name: "Telefon", price: 1200, category: "electronics" },
    { id: 2, name: "Noutbuk", price: 2000, category: "electronics" },
    { id: 3, name: "Stol", price: 150, category: "furniture" },
    { id: 4, name: "Kitob", price: 50, category: "books" },
];

// 1-5. Foydalanuvchilarga oid masalalar
// 1. Faol foydalanuvchilarni topish:Funksiya massiv ichidagi isActive: true qiymatiga ega foydalanuvchilarni qaytarishi kerak.

alert("1")
function func_2() {
    let res_2 = users_3.filter(value => {
        return value.isActive === true
    })
    return res_2
}

console.log(func_2())

alert("2")
// Yoshi bo‘yicha saralash:Funksiya foydalanuvchilarni age qiymatiga qarab o‘sish tartibida saralashi kerak.
function func_3() { // sort ishlamadi
    users_3.sort((a, b) => a - b).filter(value => {
        return value.age
    })
}

console.log(func_3())

// Ism bo‘yicha qidiruv:
//  Funksiya ismni qabul qilib, massivdan shu ismga ega foydalanuvchini topishi kerak.

alert("3")
let request = prompt("Ism kiriting")
function func_4() {
    let res_3 = users_3.find(value => {
        if (value.name === request) {
            console.log(value)
        }
    })
    return res_3
}

func_4()

// Yosh o‘rtachasini hisoblash:
//  Funksiya foydalanuvchilarning yoshlarining o‘rtacha qiymatini qaytarishi kerak.
alert("4")

// ustoz yoshlarining yigindisini o'rtacha qiymatini topolishim mumkin ediku lekin buni o'rtacha qiymatini topolmadim


// Foydalanuvchilarni yosh oralig‘ida qidirish:
// Funksiya minimal va maksimal yoshni qabul qilib, shu yosh oralig‘idagi foydalanuvchilarni qaytarishi kerak.
alert("5")
let request_2 = +prompt("maximal yosh kiriting")
let request_3 = +prompt("minimal yosh kiriting")
function func_5() {
    let res_4 = users_3.find(value => {
        if (value.age < request_2 && value.age > request_3) {
            console.log(value)
        } else {
            console.log("bunday yosh oralig'ida hechkim yo'q yoki maximal yoshni minimal yoshdan kichik qilib yozgansiz")
        }
    })
    return res_4
}

func_5()

// 6-10. Mahsulotlarga oid masalalar

// Kategoriya bo‘yicha qidiruv:
// Funksiya kategoriya nomini qabul qilib, shu kategoriyaga tegishli mahsulotlarni qaytarishi kerak.
alert("6")
let request_4 = prompt("Mahsulot kiriting")
function func_6() {
    let res_5 = products.find(value => {
        if (value.category === request_4) {
            console.log(value)
        }
    })
    return res_5
}

func_6()

// Narxi eng yuqori mahsulot:
//Funksiya massivdagi eng qimmat mahsulotni qaytarishi kerak.
alert("7") // ustoz qo'lbola topsam ham qilolmadim mathmax da qilgandim oxshamadi

// Narxlar yig‘indisi:
// Funksiya barcha mahsulotlarning narxlari yig‘indisini qaytarishi kerak.
alert("8") // negadir ishlamadi functionda return bilan qiymat qaytadi lekin qaysini qaytarish kerak filterdayam qilib kordim return bilan lekin haliyam 0
let yigindi = 0

function func_7() {
    products.forEach(value => {
        value.price += yigindi
    })
}

console.log(yigindi)
func_7()

// Narxi pasaytirilgan mahsulotlar:
// Funksiya mahsulotlarning narxini 10% ga kamaytirib, yangi massivni qaytarishi kerak.
alert("9")
function func_8() {
    let res_6 = products.map(value => {
        return value.price -= value.price / 10
    })
    return res_6
}

console.log(func_8())

// Muayyan narxdan yuqori mahsulotlar:
//  Funksiya ma'lum bir minimal narxni qabul qilib, shu narxdan yuqori bo‘lgan mahsulotlarni qaytarishi kerak.
alert("10")
let request_5 = +prompt("minimal narxni kiriting")
function func_9() {
    let res_7 = products.filter(value => {
        if (value.price > request_5) {
            console.log(value.price)
        }
    })
    return res_7
}

func_9()

// 11-15. Murakkab kombinatsiyalar // ustoz murakkab kombinatsiyalarni birortasiniyam ishlolmadim ustoz bunaqa misollar biror martta tushmagan ekan oldin kormagan ekanman

// Foydalanuvchi va mahsulotlarni bog‘lash:
// Foydalanuvchilar va mahsulotlarni ulovchi funksiya yozing: har bir foydalanuvchiga tasodifiy mahsulot biriktiriladi va natija qaytariladi.
alert("11") //ustoz math random da qilinsa kerak lekin qanday ulashni bilmadim

// Eng ko‘p foydalaniladigan kategoriya:
// Funksiya mahsulotlar ichida qaysi kategoriya eng ko‘p ishlatilganligini aniqlashi kerak.
alert("12") //ustoz bu narsalarni qanday qilishni bilmayman menimcha bu qiyin bolsa kerakku bu narsaga yetib kelganimiz yoqku ?