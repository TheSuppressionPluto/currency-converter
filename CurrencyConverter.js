import { useState, useEffect } from 'react';
import axios from 'axios';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('EUR');
  const [exchangeRate, setExchangeRate] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.exchangerate-api.com/v4/latest/${baseCurrency}`
        );
        const data = response.data;
        setExchangeRate(data.rates[targetCurrency]);
      } catch (error) {
        console.error('Error fetching exchange rate:', error);
      }
      setLoading(false);
    };

    fetchExchangeRate();
  }, [baseCurrency, targetCurrency]);

  useEffect(() => {
    setConvertedAmount(amount * exchangeRate);
  }, [amount, exchangeRate]);

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleBaseCurrencyChange = (event) => {
    setBaseCurrency(event.target.value);
  };

  const handleTargetCurrencyChange = (event) => {
    setTargetCurrency(event.target.value);
  };

  return (
    <div className="container">
      <h1 className="title">Currency Converter</h1>
      <div className="form-control">
        <label>Amount</label>
        <input
          type="number"
          value={amount}
          onChange={handleAmountChange}
        />
      </div>
      <div className="form-control">
        <label>From</label>
        <select
          value={baseCurrency}
          onChange={handleBaseCurrencyChange}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          {/* Add more currency options as needed */}
        </select>
      </div>
      <div className="form-control">
        <label>To</label>
        <select
          value={targetCurrency}
          onChange={handleTargetCurrencyChange}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          {/* Add more currency options as needed */}
        </select>
      </div>
      <div className="converted-amount">
        {loading ? (
          <div className="loader">Loading...</div>
        ) : (
          <p>Converted Amount: {convertedAmount.toFixed(2)}</p>
        )}
      </div>
      <div className="button-container">
        <button
          className="button"
          disabled={loading}
          onClick={fetchExchangeRate}
        >
          Convert
        </button>
      </div>
    </div>
  );
};

export default CurrencyConverter;
