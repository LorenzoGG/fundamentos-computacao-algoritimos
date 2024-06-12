// nodos são conectados (ecadeados) por links
// normalmente estes nodos tem dois atributos
// element: Representando o elemento armazenado no nodo
// next: representando o próximo nodo no encadeamento da lista
//next: (contem referencia para um objeto da mesma classe)
// o problema te diz o que tu precisa de informação que vai ser inserido

class  Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.count=0
        this.header=null  //para incluir no inicio da fila
        this.tail=null    // para incluir elementos no final da fila
    }
    add(element){
        if(this.count==0)
            this.header=this.tail=element
        else
            this.tail.next=element
            this.tail=element // apontar apra o novo elemento da lista
        this.count++
    }
    print(){
        var aux= this.header //aux elemento que funciona como uma referencia para o header
        while(aux!=null){
            console.log(aux.element)
            aux=aux.next
        }
    }
}

var myLL = new LinkedList();

myLL.add(new Node(1))
myLL.print()

myLL.add(new Node(2))
myLL.print()

myLL.add(new Node(4))
myLL.print()

myLL.add(new Node(3))
myLL.print()