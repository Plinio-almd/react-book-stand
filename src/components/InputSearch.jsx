import { useContext } from "react"
import { SearchContext } from "../context/searchContext"

const InputSearch = () => {
  const {searchTerm, setSearchTerm } = useContext(SearchContext)
  return (
      <input
        type="text"
        id="search"
        placeholder="Pesquise por título ou autor"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
  )
}
export default InputSearch
