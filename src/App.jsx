// App.js
import React from 'react';
import TransactionForm from './TransactionForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 className="text-3xl font-extrabold mb-4 text-center text-blue-600">
        CBE Transaction Checker
      </h1>
        <TransactionForm />
      </header>
    </div>
  );
}

export default App;
