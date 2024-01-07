import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';



const TransactionForm = () => {
  

  const { t } = useTranslation();
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
    
    <div className="flex flex-col items-center justify-center h-screen">
      <LanguageSwitcher /> {/* Place the LanguageSwitcher component here */}

<h1 className="text-3xl font-extrabold mb-4 text-center text-blue-600">
  {t('header')}
</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-4 p-4 bg-gray-100 rounded-md">
        <label htmlFor="transactionId" className="block text-sm font-medium text-gray-600">
          {t('label1')}
        </label>
        <input
          type="text"
          id="transactionId"
          value={transactionId}
          onChange={(e) => setTransactionId(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
        />

        <label htmlFor="accountNo" className="block mt-2 text-sm font-medium text-gray-600">
        {t('label2')}
        </label>
        <input
          type="text"
          id="accountNo"
          value={accountNo}
          onChange={(e) => setAccountNo(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
        />

        <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded-md">
        {t('button')}
        </button>
      </form>

      <footer className="mt-8 text-center text-gray-600">
        <p>
          {t('madeBy')} Yared{' '}
          <span role="img" aria-label="heart emoji">
            ❤️
          </span>
        </p>
        <a
          href="https://github.com/theHabesa1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
     

          GitHub
        </a>
      </footer>
    </div>
  );
};

export default TransactionForm;
