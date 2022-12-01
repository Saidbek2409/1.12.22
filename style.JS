
// 3 //
let max_name = ['Alex', 'George', 'Michail']
let count = []
for (let item of max_name) {
    count.push(item.length)
    for (let itemTwo of count) {
        Math.max(count)
    }
  max_name.filter(  item =>{
    if(item.length === Math.max(...count)) {
        console.log(item)
    }
  })
}

// 4 //
var step;
for (step = 0; step < 5; step++) {
    console.log('Идём 1 шаг на восток');
}





