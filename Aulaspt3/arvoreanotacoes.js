//• Características
//• Estruturas de dados não lineares
//• Permitem a implementação de vários algoritmos mais rápidos do que no uso
// de estruturas de dados lineares como as listas

//Fornecem uma forma natural de organizar os dados
//• Sistemas de arquivos
//• Bancos de dados
///• Sites da Web

//Outra propriedade de uma árvore T:
//• Cada nodo v de T diferente da raiz tem um único nodo pai, w
//• Todo nodo com pai w é filho de w

//Pela definição
//• Uma árvore pode ser vazia, isto é, não possui nodos
//• Esta convenção permite que se defina uma árvore recursivamente
//• Uma árvore T ou está vazia, ou consiste de um nodo r, chamado de raiz de T, e
//um conjunto de árvores cujas raízes são filhas de r

//Outros relacionamentos entre nodos
//• Dois nodos que são filhos de um mesmo pai são irmãos
//• Um nodo v é externo se v não tem filhos
//• Um nodo v é interno se tem um ou mais filhos

//Nodo interno também é conhecido como galho
//• Nodo externo também é conhecido como folha

// A raiz de uma árvore é chamada de pai de suas sub-árvores
// As raízes das sub-árvores de um nodo são chamadas deirmãos, que, por sua
//vez, são filhos deseu nodo pai

// Uma árvore deve disponibilizar métodos de acesso que retornam e aceitam
// posições:
// • root(): retorna a raiz da árvore;
// • parent(v): retorna o nodo pai de v, ocorrendo um erro se for a raiz;
// • children(v): retorna os filhos do nodo v

// • Métodos esperados
// • Métodos de consulta:
// • isInternal(v): testa se um nodo v é interno e retorna true ou false;
// • isExternal(v): testa se um nodo v é externo e retorna true ou false;
// • isRoot(v): testa se um nodo v é raiz e retorna true ou false;

// Árvores
// • Métodos esperados
// • Métodos “genéricos” (não estão necessariamente relacionados com sua
// estrutura):
// • size(): retorna o número de nodos na árvore;
// • isEmpty(): testa se a árvore tem ou não tem algum nodo;
// • positions(): retorna uma coleção com todos os nodos da árvore;
// • replaceElement(v,e): retorna o elemento armazenado em v e o substitui
// por e;

//• Uma árvore binária é uma árvore ordenada com as seguintes propriedades:
// • Todos os nodos tem no máximo dois filhos
// • Cada nodo filho é rotulado como sendo um filho da esquerda ou um filho da
// direita
// • O filho da esquerda precede o filho da direita na ordenação dos filhos de um
// nodo


