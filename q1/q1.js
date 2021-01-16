//read text file
var fs = require('fs');

fs.readFile('./input.txt', 'utf8', (err,data) =>{

    data = data.split('\r\n').map((element) =>{
        return parseInt(element);
    });

    //check element i and +1
    for(let i=(0); i < data.length; i++) {

        for(let j = i+1; j < data.length; j++) //adding two values together j=i+1
            for(let k = j+1; k < data.length; k++) //adding 3 values together k=i+j+k
            if(data[i] + data[j] + data [k] == 2020)

            console.log(data[i] * data[j] * data[k]); //multiplying answer 3 times ixjxk
    }
})
