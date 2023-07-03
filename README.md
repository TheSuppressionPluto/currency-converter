# Currency Converter

Welcome to the Currency Converter project! This project provides a currency conversion feature using a React component called `CurrencyConverter`. It utilizes the [exchangerate-api.com](https://www.exchangerate-api.com/) API to fetch the latest exchange rates and perform conversions.

## Features

- **Real-time Exchange Rates:** The currency converter fetches the latest exchange rates from the [exchangerate-api.com](https://www.exchangerate-api.com/) API to ensure accurate and up-to-date conversions.
- **Multiple Currency Support:** You can convert between a wide range of currencies supported by the API.
- **User-Friendly Interface:** The CurrencyConverter component provides a simple and intuitive interface, allowing users to select the input currency, output currency, and enter the amount for conversion.
- **Conversion Result:** The component displays the converted amount based on the selected currencies and input amount.

## Requirements

To use the Currency Converter component, you need to have the following dependencies installed in your Next.js project:

- React (version 16.8 or above)
- axios (can be installed via `npm install axios` or `yarn add axios`)

## Installation

To install and use the Currency Converter component in your Next.js project, follow these steps:

1. Install the dependencies by running the following command:

   ```bash
   npm install axios
   ```

   or

   ```bash
   yarn add axios
   ```

2. Copy the `CurrencyConverter` component code into your project's component directory.

3. Import the `CurrencyConverter` component into your project as shown in the example below:

   ```jsx
   import React from 'react';
   import CurrencyConverter from './CurrencyConverter';

   const Page = () => {
     return (
       <div>
         <CurrencyConverter />
       </div>
     );
   };

   export default Page;
   ```

4. Style the component by adding CSS rules to the `styles.css` file in your Next.js project. You can modify the existing CSS or add new styles to customize the appearance of the currency converter.

5. Ensure that your Next.js project is set up to handle CSS imports. You can refer to the [Next.js documentation](https://nextjs.org/docs/basic-features/built-in-css-support) for more information on setting up CSS support.

## Usage

Once you have the `CurrencyConverter` component imported into your Next.js project and the styles applied, you can use it by including it in your pages:

```jsx
import React from 'react';
import CurrencyConverter from '../components/CurrencyConverter';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <CurrencyConverter />
    </div>
  );
};

export default HomePage;
```

Make sure to adjust the import path based on the location of the `CurrencyConverter` component in your project.

## Customization

The `CurrencyConverter` component provides basic styling and functionality. If you want to customize the appearance or behavior of the currency converter, you can modify the CSS rules in the `styles.css` file to fit your project's design.

You can also extend the functionality of the component by adding additional options to the `<select>` elements for base and target currencies. Update the options within the `<select>` elements in the `CurrencyConverter` component to include the desired currency options.

## Contributing

If you'd like to contribute to the Currency Converter project, you're more than welcome! You can contribute by:

- Submitting bug reports or feature requests through the [GitHub issue tracker](https://github.com/TheSuppressionPluto/currency-converter/issues).
- Contributing code improvements or new features by creating a [pull request](https://github.com

/TheSuppressionPluto/currency-converter/pulls).

Please make sure to follow the project's code style and guidelines when contributing.

## License

The Currency Converter project is licensed under the [MIT License](https://github.com/TheSuppressionPluto/currency-converter/blob/main/LICENSE). Feel free to use, modify, and distribute the code as permitted by the license.

## Contact

If you have any questions, suggestions, or feedback regarding the Currency Converter project, feel free to contact the project maintainer at `youremail@example.com`. We appreciate your input and will get back to you as soon as possible.

Thank you for using the Currency Converter! We hope it proves to be a helpful tool for your currency conversion needs.
