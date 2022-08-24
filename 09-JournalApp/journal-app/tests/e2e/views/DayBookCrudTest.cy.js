/* eslint-disable no-undef */
// import { myUrl } from '../utilities'

describe('DayBook Crud', () => {
  beforeEach(() => {
    cy.visit('/daybook') // "baseUrl" definido en cypress.jsonw
  })

  it('Carga la Página', () => {
    cy.contains('DayBook')
  })

  it('Carga las entradas', () => {
    const entryItem = cy.get('entryitem')
    entryItem.should('have.length', 1)
    const entries = cy.get('[data-testid="entrylist-item"]')
    entries.should('be.visible').should('have.length.greaterThan', 0)
    cy.contains('No hay nada seleccionado')
  })

  it('Crea una entrada pulsando nueva entrada', () => {
    const button = cy.get('[data-testid="entrylist-new"]')
    button.click()
    const input = cy.get('[data-testid="entryview-textinput"]')
    input.should('have.value', '')
  })

  it('Crea una entrada pulsando Fab', () => {
    const button = cy.get('.flex-1 > .btn')
    button.click()
    const input = cy.get('[data-testid="entryview-textinput"]')
    input.should('have.value', '')
  })

  it('Filtra las entradas las entradas', () => {
    const entryItem = cy.get('entryitem')
    entryItem.should('have.length', 1)
    let entries = cy.get('[data-testid="entrylist-item"]')
    entries.should('be.visible').should('have.length.greaterThan', 0)
    const input = cy.get('[data-testid="entrylist-input"]')
    input.should('have.value', '')
    input.type('text')
    entries = cy.get('[data-testid="entrylist-item"]')
    entries.should('not.exist')
    input.clear()
    input.type('lorem')
    entries = cy.get('[data-testid="entrylist-item"]')
    entries.should('exist')
  })

  it('Selecciona una entrada', () => {
    const entryItem = cy.get('entryitem')
    entryItem.should('have.length', 1)
    const entries = cy.get('[data-testid="entrylist-item"]')
    entries.should('be.visible').should('have.length.greaterThan', 0)
    const entry = cy.get('entryitem > :nth-child(1)')
    entry.click()
    // Botón de borrar debe estar visible y el botón de guardar y y debe haber texto en el input
    const area = cy.get('[data-testid="entryview-textinput"]')
    area.should('have.length.greaterThan', 0)
    const delButton = cy.get('[data-testid="entryview-deletebutton"]')
    delButton.should('be.visible')
    const fab = cy.get('[data-testid="entryview-savebutton"]')
    fab.should('be.visible')
  })
  
})
