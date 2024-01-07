import React, { useState } from 'react';

const TransactionForm = () => {
  const [transactionId, setTransactionId] = useState('');
  const [accountNo, setAccountNo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Combine transactionId and last 8 digits of accountNo
    const combinedId = transactionId + accountNo.slice(-8);

    // Open the URL in a new tab
    window.open(`https://apps.cbe.com.et:100/?id=${combinedId}`, '_blank');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-4 p-4 bg-gray-100 rounded-md">
        <label htmlFor="transactionId" className="block text-sm font-medium text-gray-600">
          Transaction ID:
        </label>
        <input
          type="text"
          id="transactionId"
          value={transactionId}
          onChange={(e) => setTransactionId(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
        />

        <label htmlFor="accountNo" className="block mt-2 text-sm font-medium text-gray-600">
         Recipient Account No :
        </label>
        <input
          type="text"
          id="accountNo"
          value={accountNo}
          onChange={(e) => setAccountNo(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
        />

        <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded-md">
          Check
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;
