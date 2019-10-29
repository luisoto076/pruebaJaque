ejercicio1
Es un ejercicio que ya he realizado muchas veces. La idea es ir agregando los elementos al inicio de la nueva cadena
de modo que el elemento que estaba en la posición i, queda en la n-i
La complejidad en memoria es lineal, pues se hace una copia de la cadena

ejercicio2
primero hice algunos ejemplos a mano y traté de identificar en que momentos se rompía la secuencia y 
como podía saber que era o no la mas grande. Entonces noté que cuando el elemento i es mayor que el elemento i+1, se rompe
una secuencia y la longitud de esta es desde la última vez que se rompió una secuencia(o 0 si nunca a pasado) hasta i. Solo restaba
tener un registro de la mejor secuencia y actualizar cuando fuera necesario
El arreglo solo se recorre una vez, y se van actualizando contadores así que toma tiempo lineal
En memoria también es de complejidad lineal, pues en el peor de los casos el arreglo está ordenado de menor a mayor y todos sus 
elementos son parte de la secuencia

ejercicio3
como los elementos están ordenados, los duplicados serán consecutivos, por lo que basta con llegar a un número nuevo, agregar este
al resultado e ignorar todas las repeticiones.
Dado que el arreglo solo se recorre una vez, saltando o no algunos elementos, toma tiempo lineal con respecto a la entrada
La moría es constante pues no depende de la entrada

ejercicio4
En este ejercicio me auxilie de una fórmula con la que también he trabajado bastante.
La suma de los primeros n números puede expresarse como s(n)=(n*n+1)/2. Entonces si se quiere obtener la suma de un intervalo [x,y]
es posible calcular la suma hasta y, y restar la suma hasta x que es lo que "sobra" o lo que no nos interesa sumar.
Al no depender del tamaño de la entrada y dado que solo hace operaciones aritméticas,  toma tiempo constante.

ejercicio5
Este costó algo de trabajado sobre todo al entender que es lo que se quería. Una ves que pude ver el objetivo, comencé a diseñar las
funciones desde lo general a lo particular. Primero consideré que si se quieren obtener las citas para todo el mes, es más fácil si me 
preocupo primero por encontrar la solución para un diá en particular. Para conocer el resultado para un día, se deben "quitar" o dejar
de considerar los horarios que tienen una cita programada, y después quitar también las horas que no puedan ser cubiertas por algún 
trabajador. Para marcar los horarios "indispuestos" usé un objeto auxiliar que permite tarar las horas; para marcar las horas uso el día 
del mes para el que se está haciendo el proceso, es decir, si cuando se buscan horarios disponibles para el día 10, la hora tiene un 10
en el atributo marca, este se considera indispuesto, en cualquier otro caso se considera disponible.

Ya que los horarios están marcados, solo resta recorrerlo para saber cual de ellos no está marcado y por tanto se puede mostrar como un horario disponible.

Básicamente hice una función para cada uno de los procesos que describí antes.

La complejidad de la función está dada por quitarApartadas, pues el revisar que horas están marcadas solo implica recorrer todas.
En quitarApartadas, se marcan todas horas que tienen cita. En el peor caso todas las horas tienen cita, si r es la cantidad de horarios posibles, y puesto que el proceso de marcar la hora toma tiempo logarítmico ya que se utiliza búsqueda binaria para encontrar la hora que se desea marcar,  hasta este punto, la complejidad es O(r log n). Sin embargo, al marcar los horarios que no pueden ser cubiertos, se recorre la lista de empleados tantas veces como horarios disponibles, por lo que si m es es numero de empleados, esto toma tiempo O(m*r). Por otro lado r no puede ser mayor a 48(en un caso extremo en que el horario de atención sea de 24 horas), por lo que r es constante y
se puede omitir del anulosos. Entonces quitarApartadas toma tiempo O(m);
Como se dijo antes, recorrer la lista de todas las posibles horas toma tiempo constante, por lo que calcular los horarios para un solo día
toma tiempo lineal. Este proceso se realiza 30 veces, una por día, por lo que también se puede considerar constante y por lo tanto la 
función citasDisponibles toma tiempo O(n).

 

 
