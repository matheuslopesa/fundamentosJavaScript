<h1>Curso de fundamentos sobre javascript</h1>

<h3>Variáveis e a resposta de tudo</h3>
<p>
Uma pessoa criou 3 variáveis diferentes para armazenar dados numéricos importantes. Para a primeira variável, utilizou a declaração var, deu o nome de respostaDeTudo e atribuiu o valor 42. Na segunda variável, utilizou a declaração let, deu o nome de idade e atribuiu o valor 29. Já na terceira variável, utilizou a declaração const, deu o nome de pi e atribuiu o valor 3.14, como mostra o código abaixo:
</p>

~~~javascript
var respostaDeTudo = 42
let idade = 29
const pi = 3.14
~~~
<p>
Para testar seus conhecimentos em JavaScript, criou um bloco trocando o valor das variáveis entre elas e incluiu um console.log dentro e outro fora do bloco:
</p>

~~~javascript
var respostaDeTudo = 42
let idade = 29
const pi = 3.14
{
    var respostaDeTudo = 3.14
    let idade = 42
    const pi = 29
    console.log(respostaDeTudo, idade, pi)

}
console.log(respostaDeTudo, idade, pi)
~~~
O código irá retornar
**3.14 42 29 e 3.14 29 3.14**
>Variáveis declaradas com **var** ou **let** podem ser reatribuídas. Porém, uma variável declarada com **let** só pode ser usada no mesmo escopo em que está definida. No caso da declaração **const**, significa que a variável sempre terá uma referência ao mesmo objeto ou valor primitivo, porque essa referência não pode ser alterada. A referência em si é imutável, mas o valor mantido pela variável não se torna imutável.

<h3>ERROS</h3>
<p>Enquanto trabalhamos com programação, passamos uma boa parte do tempo lidando com os erros que aparecem em nosso código. Isso é totalmente normal, pois eles nos ajudam a resolver problemas. Já imaginou como seria muito mais difícil programar sem um recurso para dizer onde estamos errando e como corrigir?</p>

<p>Como vimos, as pessoas que desenvolvem os programas e linguagens são as responsáveis pelo chamado “tratamento de erros”, ou seja, permitir a comunicação de quais foram os problemas, e nem sempre isso acontece da melhor forma - embora já tenha melhorado muito nas últimas décadas.</p>

<p>Cada linguagem de programação tem sua própria forma de lidar com erros. O JavaScript começa dividindo cada tipo de erro possível em algumas categorias:</p>

>**RangeError:** Quando o código recebe um dado do tipo certo, porém não dentro do formato aceitável. Por exemplo, um processamento que só pode ser feito com números inteiros maiores ou iguais a zero, mas recebe -1.

>**ReferenceError:** Normalmente ocorre quando o código tenta acessar algo que não existe, como uma variável que não foi definida; muitas vezes é causado por erros de digitação ou confusão nos nomes utilizados, mas também pode indicar um erro no programa.

>**SyntaxError:** Na maior parte dos casos ocorre quando há erros no programa e o JavaScript não consegue executá-lo. Os erros podem ser métodos ou propriedades escritos ou utilizados de forma incorreta, por exemplo, operadores ou sinais gráficos com elementos a menos, como esquecer de fechar chaves ou colchetes.

>**TypeError:** Indica que o código esperava receber um dado de um determinado tipo, tal qual uma string de texto, mas recebeu outro, como um número, booleano ou null.
