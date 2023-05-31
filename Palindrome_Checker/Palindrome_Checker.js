//Palindrome Checker
function Palindrome_checker(str){
    str=str.toLowerCase().replace(/[^A-Za-z0-9]/g);
    const rev_str=str.split('').reverse().join('');
    return str===rev_str;
}
console.log(Palindrome_checker("RACECAR"));
