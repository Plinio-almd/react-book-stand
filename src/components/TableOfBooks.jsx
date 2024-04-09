
import Book from "./Book"
const TableOfBooks = ({filteredBooks}) => {  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Título</th>
          <th>Autor</th>
          <th>Quantidade</th>
          <th>Informações Adicionais</th>
        </tr>
      </thead>
      <tbody>
        {filteredBooks.map((book) => (
          <Book
            book={book}
            key={book.id}
          />
        ))}
      </tbody>
    </table>
  )
}
export default TableOfBooks
