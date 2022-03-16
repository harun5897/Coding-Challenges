const SubstringSearching = (str, substr) => {
    var check = '';
    for(let i = 0; i < substr.length; i++) {
        for(let j = 0; j < str.length; j++) {
            if (substr[i] == str[j]) check += str[j];
        }
    }
    
    if(substr == check) return console.log('YES')
    else return console.log('NO')
}  

var str = 'science';
var substr = 'cenci';

SubstringSearching(str, substr)