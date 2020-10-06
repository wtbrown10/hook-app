import React from 'react';
import Navbar from './Components/Navbar';
import BookContextProvider from './contexts/BookContext';
import BookList from './Components/BookList';
import NewBookForm from './Components/NewBookForm';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <NewBookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;