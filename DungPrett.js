const DungPrett = (num) => {
    var res = '';
    for(let i = 1; i <= num; i++) {
        if(i % 3 == 0 && i % 5 == 0) res += 'DungPrett'
        else if(i % 3 == 0) res += 'Dung'
        else if(i % 5 == 0) res += 'Prett'
        else res += String(i);
        res += ' ';

    }
    console.log(res)
}

const num = 20;

DungPrett(num);