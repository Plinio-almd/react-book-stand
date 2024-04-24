import { SearchContext } from "../context/searchContext"
import InputSearch from "../components/InputSearch"
import TableOfBooks from "../components/TableOfBooks"
import { useEffect, useState } from "react"
import useStore from "../stores/store"

const HomeLibrary = () => {  
  const [searchTerm, setSearchTerm] = useState("")
  const books = useStore(state => state.books)
  const fetchBooks = useStore(state => state.fetchBooks)
  useEffect(() => {
    fetchBooks()
  },[])

  const filteredBooks = books.filter((book) => {
    return (
      book.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
      book.author.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    )
  })
  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      <InputSearch />
      <TableOfBooks filteredBooks={filteredBooks} />
    </SearchContext.Provider>
  )
}
export default HomeLibrary
  