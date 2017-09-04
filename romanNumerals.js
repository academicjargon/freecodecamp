function convertToRoman(num) {
var arr1 = [1, 4, 5, 9 ,10, 40, 50, 90, 100, 400, 500, 900, 1000].reverse();
var arr2 = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"].reverse();
var roman = [];
print(arr1);
print(arr2);
for(var i=0;i<=arr1.length;i++){
while (arr1[i]<=num) {
print(arr1[i]);
print(arr2[i]);
roman.push(arr2[i]);
num-=arr1[i];
}
}
return roman.join('');
}
print(convertToRoman(16));
