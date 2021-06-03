let numbers = [1,2,3,1,4,5,1]

const counter = (number, array) => {
    let count = 0;
    for(let num of array) {
        if(num === number) {
            count++;
        }
    }

    return count;
}

console.log(counter(3,[1,2,3,1,4,5,1,2]))
