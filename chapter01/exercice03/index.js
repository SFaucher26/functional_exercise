export function reverseString(str) {
    return str.toString().split('').reverse().join('')
}

export function isPalindrome(str) {
    let str2 = str.toString().split('').reverse().join('')
    if(str == str2){
        return true 
    }else{
        return false
    }
}

export function countVowels(str) {
    return str.match(/[aeiouy]+/gi).length;
}
