function avaliatempo(intervalo){
    for(i=0;i<intervalo; i++);
}

var entrySize=1000

for(let size=0; size<entrySize; size+=100){
var initialMomement = perfomance.now()
avaliatempo(size)
var finalMoment = performance.now()

console.log(size+ ';'+Math.trunc((finalMoment-initialMoment)*1000))
 //console.log(size+","+finalMomenent-finalMoment)
}