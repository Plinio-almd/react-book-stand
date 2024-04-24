import {create} from 'zustand'
import data from "../../data.json"
import axios from 'axios'

// const fromJson = data.books
const useStore = create((set, get) => ({
  books: [],
  user: null,
  isLoading: false,
  isAuthenticated: false,

  fetchBooks: async () => {
    set( state => ({isLoading:true}))
    try {
      const res = await fetch('http://localhost:5555/api/books')
      if (!res.ok) {
        throw new Error('Failed to fetch books')
      }
      const books = await res.json()
      set(state => ({books: books, isLoading: false}))
    } catch(error) {
      console.log(error);
      set(state => ({isLoading: false}))
    }
  },
  //Add, update and delete books methods here
  addBook: async (newBook) => {
    const res = await fetch('/api/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBook)
    })
    return
  },
  //...
  login: async (credentials) => {
    //implement user authentication logic here
    //..
    set( state => ({isAuthenticated: true, user: credentials.user}))
  },
  logout: () => {
    set(() => ({isAuthenticated: false, user: null}))
  }
}))

export default useStore;