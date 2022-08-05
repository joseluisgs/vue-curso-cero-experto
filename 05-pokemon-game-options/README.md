# Juego de adivina Pokemon
Proyecto de juego adivina Pokemon con Options API

- [Juego de adivina Pokemon](#juego-de-adivina-pokemon)
  - [Resumen](#resumen)
  - [Comunicación entre componentes](#comunicación-entre-componentes)
  - [Pinia](#pinia)

## Resumen
Este juego resume todo lo visto usando la Options API de Vue.js.

## Comunicación entre componentes
- Padre a hijo: Usa propiedades
- Hijo a padre: Usa eventos
- Si la cosa se complica o hay muchos saltos, usa una store Pinia.

## Pinia
[Pinia](https://pinia.vuejs.org/core-concepts/state.html#usage-with-the-options-api) es el store oficial de Vue. En este caso solo hemos usado un estado global para mejorar la estadísticas. Estas podrían ser fácilmente compartidas por cada componente importando la store y su estado.