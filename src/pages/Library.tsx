import { useState } from "react";
import { motion } from "framer-motion";


const PostsView = () => {
  const [books, setBooks] = useState([
    { id: 1, title: "React Basics", author: "John Doe" },
    { id: 2, title: "JavaScript Guide", author: "Jane Smith" },
    { id: 3, title: "TypeScript note", author: "Bob Johnson" },
  ]);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [search, setSearch] = useState("");

  const addBook = () => {
    if (!title.trim() || !author.trim()) return;
    setBooks([...books, { id: Date.now(), title, author }]);
    setTitle("");
    setAuthor("");
  };

  // const deleteBook = (id) => {
  //   setBooks(books.filter((b) => b.id !== id));
  // };

  const filteredBooks = books.filter(
    (b) =>
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.author.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div style={{ padding: 20 }}>
      <h2>📚 e-Library Mini System</h2>

      <input
        placeholder="Book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button onClick={addBook}>Add Book</button>

      <br />
      <br />

      <input
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredBooks.map((book) => (
          <motion.li
            key={book.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {book.title} — {book.author}
            {/* <button onClick={() => deleteBook(book.id)}>❌</button> */}
          </motion.li>
        ))}
      </ul>
      
    </div>
  );
};

export default PostsView;
