// https://pinia.vuejs.org/cookbook/testing.html#unit-testing-a-store

import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, test } from 'vitest'

import JournalStore from '@/modules/daybook/stores/journal'
import entries from '../../../mocks/entries.mocks'

describe('Journal Store Tests', () => {
  let journalStore

  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia())
    // creamos la store
    journalStore = JournalStore()
    // le metemos unas entradas
    journalStore.entries = entries
  })

  test('El estado inicial debe ser con estradas a vacío y loading a false', () => {
    expect(journalStore.isLoading).toBe(false)
    expect(journalStore.entries).toEqual(entries)
    expect(journalStore.entries.length).toBe(entries.length)
  })

  // Getters
  test('El getter by term devuleve una entrada', () => {
    const entry = journalStore.getEntriesByTerm('sit voluptatem accusantium doloremque laudantium')
    expect(entry.length).toBe(1)
    expect(entry[0]).toEqual(entries[1])
  })

  test('El getter by term devuleve todas las entradas', () => {
    const entry = journalStore.getEntriesByTerm('')
    expect(entry.length).toBe(3)
    expect(entry).toEqual(entries)
  })

  test('El getter by id devuelve la entrada', () => {
    const entry = journalStore.getEntryById('1')
    expect(entry).toEqual(entries[0])
  })

  test('El getter by id no devuelve la entrada', () => {
    const entry = journalStore.getEntryById('caca-test-que-hago')
    expect(entry).toEqual(undefined)
  })
})
