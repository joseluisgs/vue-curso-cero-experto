# Introducción al test unitario y de integración

Veremos cómo crear nuestros primeros [test](https://vuejs.org/guide/scaling-up/testing.html) con [Vitest](https://vitest.dev/).

- [Introducción al test unitario y de integración](#introducción-al-test-unitario-y-de-integración)
  - [Vitest](#vitest)
  - [Estructura de un test](#estructura-de-un-test)
  - [Montando componentes](#montando-componentes)
  - [Assercciones o Marchers](#assercciones-o-marchers)
    - [Igualdad](#igualdad)
    - [Numéricos](#numéricos)
    - [Boolean, Nulos y Undefined](#boolean-nulos-y-undefined)
    - [Arrays y contenido](#arrays-y-contenido)
    - [Strings](#strings)
  - [Snapshot](#snapshot)
  - [Buscar elementos](#buscar-elementos)
  - [Simular eventos](#simular-eventos)
  - [Propiedades](#propiedades)

## Vitest
Vitest es una suite de test que se monta sobre Vite que tiene amplia compatibilidad con [Jest](https://jestjs.io/), Mocha, Jasmine, etc. De hecho podemos usarla como alternativa a la misma.

## Estructura de un test
Te recomiendo que mires [este tutorial mío para saber cómo testear](https://github.com/joseluisgs/vue-weather-testing) y [este](https://github.com/joseluisgs/testing-js-jest). Todo lo que se dice para jest, sirve para vitest.

## Montando componentes
- shallowMount: Nos permite cargar un componente de manera individual para testearlo, creando un wrapper pero sin componentes hijos.
- mount: Carga el componente y sus componentes hijos.
  
shallowMount() es mejor para probar un componente individual de forma aislada, ya que los componentes secundarios (hijos) se eliminan. Es ideal para las pruebas unitarias. Además, el uso de shallowMount() para probar un componente con muchos componentes secundarios (hijos) puede mejorar el tiempo de ejecución de la prueba unitaria, ya que no hay ningún costo (en términos de tiempo) para renderizar o usar los componentes secundarios (hijos).

mount() es útil cuando desea incluir la prueba del comportamiento de los componentes secundarios (hijos) en el test (integración).

El objeto wrapper nos permite probar todos los aspectos del HTML generado por el componente Vue y todas las propiedades (como los datos o métodos) del componente Vue.

## Assercciones o Marchers
 Los [Matchers](https://jestjs.io/docs/es-ES/using-matchers) nos permiten comparar de diferente manera valores esperados con los obtenidos. Podemos hacerlo de la siguiente manera, aunque hay [más](https://jestjs.io/docs/es-ES/expect):

### Igualdad
  - .toBe: Usado para comparar valores primitivos
  - .toEqual: Usado para comparar recursívamente todas las propiedades de un objetos, también conocido como igualdad profunda.

### Numéricos
  - .toBeLessThan: El valor es menor que.
  - .toBeLessThanOrEqual: El valor es menor o igual que.
  - .toBeGreaterThanOrEqual: El valor es mayor o igual que.
  - .toBeGreaterThan: El valor es mayor que.

### Boolean, Nulos y Undefined
  - .toBeTruthy: El valor es verdadero.
  - .toBeFalsy: El valor es falso.
  - .toBeUndefined: El valor es ‘undefined’
  - .toBeNull: El valor es ‘null’

### Arrays y contenido
  - .toContain: Contiene el elemento dentro del array
  - .toHaveLength: El array tiene la longitud

### Strings
  - .toMatch: Comprueba que un texto coincide con una expresión regular
  - .toHaveLength: Comprueba la longitud.
  - Podemos usar otros anteriores

## Snapshot
Snapshot es una herramienta que nos permite guardar una versión del HTML generado por un componente Vue y comprobar que no se ha modificado.

## Buscar elementos
Podemos acceder a cada elemento del componente usando la función find y usando el selectores de CSS:
- tag selectors (div, foo, bar)
- class selectors (.foo, .bar)
- attribute selectors ([foo], [foo="bar"])
- id selectors (#foo, #bar)
- pseudo selectors (div:first-of-type)

En nuestro caso usaremos la propiedad de vue [:data-testid](https://kentcdodds.com/blog/making-your-ui-tests-resilient-to-change) para nombrar inequícamente los elementos que queramos/usaremos para testear y referenciarlos con el selector CSS (wrapper.find('[data-testid="xxx"]').

FinAll devuelve todos los elementos que coincidan con el selector.

## Simular eventos
Podemos simular eventos con la función trigger. Cuidado que debes testearlo con async/await.

## Propiedades
Podemos acceder a las propiedades de un componente usando la función props. También podemos pasarles prop al componente al montarlo con el wrapper en el objeto props.
