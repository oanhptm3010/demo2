//const dai = 5;
//const rong = 10;
//const dienTich = dai * rong;
//console.log(`Dient tick hinh chu nhat (${dai}* ${rong} = ${dienTich})`);

function tinhDienTich(dai, rong) {
    const dienTich = dai * rong;
    //console.log(`Dien tich: ${dienTich}`);
    return dienTich
}

console.log(tinhDienTich(5, 10));
//tinhDienTich(5, 10);
//tinhDienTich(2, 22);
//tinhDienTich(20, 5);

/*===Kiem tra chan- le ===*/
function kiemTraChanLe(number) {
    if (number % 2 === 0) {
        return "chan";
    }
    if (number % 2 !== 0) {
        return "le";
    }
}
console.log(kiemTraChanLe(10));
console.log(kiemTraChanLe(11));
console.log(kiemTraChanLe(12));

/*===Kiem tra chan- le ===*/
function xinChaoBaLan(){
    console.log("Xin chao1");
    console.log("Xin chao2");
    console.log("Xin chao3");
}
xinChaoBaLan();
xinChaoBaLan();