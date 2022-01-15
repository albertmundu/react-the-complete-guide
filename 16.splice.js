// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

const months = ["Jan", "March", "April", "June"];

months.splice(1, 0, "Feb");

console.log(months);

months.splice(4, 1, "May");

console.log(months);

months.splice(0, 4, "Sep");

console.log(months);
