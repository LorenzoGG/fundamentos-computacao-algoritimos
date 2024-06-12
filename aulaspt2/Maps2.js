const myMap = new Map();
myMap.set(0,'zero')
myMap.set(1, 'one')

for (const [key, value] of myMap){
    console.log(key + ' = ' + value)
}

// usando as chaves armazenadas abaixo
for (const key of myMap.keys()){
    console.log(key)
}

// acessando os values

for (const value of myMap.values()){
    console.log(value)
}

// outra forma

for (const [key, value] of myMap.entries()){
    console.log(key + ' = ' + value)}