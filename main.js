// Get current month and find(winter, fall, summer)

let currentMonth= new Date();
let a=currentMonth.getMonth()+1;
console.log(a)

if (a >=3 && a <=5){
    document.write("It's currently Spring");
}
else if(a >=6 && a<=8){
    document.write("It's currently Summer");
} 
else if (a >=9 && a<=11){
    document.write("It's currently Autumn");
}
else if (a>=12 && a < 3){
    document.write("It's currently Winter");
}

