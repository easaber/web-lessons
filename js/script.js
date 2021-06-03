
let trainers = [
    {
        name: 'Thomas'
    },
    {
        name: 'Salami'
    },
    {
        name: 'Amo'
    },
    {
        name: 'King'
    }
]



let salami = trainers.find((trainer,index,trainers) => {
    return trainer.name === 'Salami'
});

console.log(salami)