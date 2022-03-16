const DungPrett = (num) => {
    for(let i = 1; i <= num; i++) {
        if(i % 3 == 0 && i % 5 == 0) console.log('DungPrett')
        else if(i % 3 == 0) console.log('Dung') 
        else if(i % 5 == 0) console.log('Prett') 
        else console.log(i)

    }
}

const num = 20;

DungPrett(num);