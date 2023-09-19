console.log('Hello')

function funcA(){
    console.log('A....')
}

function funcB(x,y){
    console.log(x)
    console.log(y)
}
funcA()
funcB(10, 20)

function funcC( ){
    console.log('c....')
    return'H1....'
}

function funcD(x, y){
    return x+ y
}
console.log(funcC())
let wow = funcD(100, 200)
//..............................
function funcE(a, b, c = 100 ){
console.log(a + b + c)
} 
function funcF(x= 'H1',y, z = 'wow wow wow'){
    return x+ y+z
}
funcE(10, 20)
funcE(10, 20, 30)
console.log(funcF())
console.log( funcF(`hello`) )

console.log(10 + `10`)
console.log(10 + 10)
let info1 = 100
let info2 = 200

console.log(info1 + '+' + info2 + '+' + (info1+info2) )

console.log(`${info1} + ${info2} = ${info1+info2} `)

console.log(10 > 200 ? 'Hi...': 'Hey...')
let x = 'Bangna'
let y = 'Banhpoo'
z =x > y ? 'wow...' : 'Woo...'
console.log(z)