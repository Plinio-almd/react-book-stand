const Book = ({book}) => {
  const {id, title, author, qt, info} = book
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{author}</td>
      <td>{qt}</td>
      <td>{info}</td>
    </tr>
  )
}
export default Book