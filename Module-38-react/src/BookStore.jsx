import './index.css'
import Books from './Book'
export default function BookStore ({books}) {
    return(
        <div>
            <h3>Books number: {books.length}</h3>
            {
                books.map(book => <Books book={book}></Books>)
            }
        </div>
    )
}
