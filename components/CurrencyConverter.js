import { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

const CurrencyConverter = () => {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(() => {
    fetch('https://api.exchangerate-api.com/v4/latest/USD')
      .then(response => response.json())
      .then(data => {
        setCurrencies(Object.keys(data.rates));
      })
      .catch(error => {
        console.error('Error fetching currencies:', error);
      });
  }, []);

  const convertCurrency = () => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
      .then(response => response.json())
      .then(data => {
        const conversionRate = data.rates[toCurrency];
        const convertedAmount = amount * conversionRate;
        setConvertedAmount(convertedAmount.toFixed(2));
      })
      .catch(error => {
        console.error('Error converting currency:', error);
      });
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Currency Converter
      </Typography>
      <TextField
        label="From Currency"
        select
        fullWidth
        value={fromCurrency}
        onChange={event => setFromCurrency(event.target.value)}
        SelectProps={{ native: true }}
        variant="outlined"
        margin="normal"
      >
        <option value="">Select</option>
        {currencies.map(currency => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </TextField>
      <TextField
        label="To Currency"
        select
        fullWidth
        value={toCurrency}
        onChange={event => setToCurrency(event.target.value)}
        SelectProps={{ native: true }}
        variant="outlined"
        margin="normal"
      >
        <option value="">Select</option>
        {currencies.map(currency => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </TextField>
      <TextField
        label="Amount"
        type="number"
        fullWidth
        value={amount}
        onChange={event => setAmount(event.target.value)}
        variant="outlined"
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={convertCurrency}>
        Convert
      </Button>
      {convertedAmount > 0 && (
        <Typography variant="h6" align="center" gutterBottom>
          Converted Amount: {convertedAmount} {toCurrency}
        </Typography>
      )}
    </Container>
  );
};

export default CurrencyConverter;
