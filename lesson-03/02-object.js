const myInfo = {
    name: "Phong",
    favoriteNumber: 25,
    address: "Ha Noi",
    "my address2": "Ha Tay",
    isLoveCoding: true,
    codingClass: {
        name: "Playwright",
        level: "Beginer to Junior"
    }
};

console.log(myInfo);
console.log(myInfo.name); //= console.log(myInfo["name"]);
console.log(myInfo.codingClass.name); //= console.log(myInfo["codingClass"]["name"]);
console.log(myInfo["name"]);
console.log(myInfo["codingClass"]["name"]);
