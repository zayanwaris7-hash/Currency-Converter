# 💱 Currency Converter

A modern, responsive currency converter built with React that fetches real-time exchange rates from a public API. The application demonstrates clean component architecture, reusable UI components, and custom hooks for data fetching.

---

## 🚀 Overview

This project is a lightweight currency conversion tool designed to showcase best practices in React development, including:

- Functional components with hooks
- Custom hooks for data abstraction
- Reusable component design
- Clean state management
- Separation of concerns

---

## ✨ Features

- 🌍 Real-time currency conversion
- 🔄 Swap currencies instantly
- ⚡ Fast and responsive UI
- 🧩 Custom hook for API integration
- 🎯 Controlled form inputs
- 📱 Mobile-friendly design

---

## 🛠️ Tech Stack

| Technology    | Description                        |
|--------------|------------------------------------|
| React        | UI library (Functional Components) |
| Vite         | Build tool                         |
| Tailwind CSS | Utility-first styling              |
| Fetch API    | Data fetching                      |

---

## 📂 Project Structure


src/
│
├── component/
│ ├── InputBox.jsx # Reusable input component
│ └── useCurrencyData.jsx # Custom hook for fetching currency rates
│
├── App.jsx # Main application logic
├── main.jsx # Application entry point
├── index.css # Global styles (Tailwind CSS)


---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/currency-converter.git
cd currency-converter
2. Install dependencies
npm install
3. Run the development server
npm run dev

Open your browser at:

http://localhost:5173
## 🧠 Application Architecture
1. State Management

The application uses React's built-in state management:

amount → User input value

from → Source currency

to → Target currency

convertedAmount → Result of conversion

## 2. Custom Hook: useCurrencyData

Encapsulates API logic and provides exchange rate data based on the selected currency.

const currencyInfo = useCurrencyData(from);
Responsibilities

Fetch exchange rates from external API

Update data when base currency changes

Return parsed currency object

## 3. Reusable Component: InputBox

A flexible input component that handles:

Amount input

Currency selection dropdown

Disabled states

Props
Prop	Description
label	Currency label
amount	Numeric value
onAmountChange	Amount change handler
onCurrencyChange	Currency change handler
currencyOptions	List of currencies
selectCurrency	Selected currency
amountDisable	Disable amount input
currencyDisable	Disable dropdown
## 4. Conversion Logic
const convert = () => {
  setConvertedAmount(amount * currencyInfo[to]);
};

Uses fetched exchange rates

Performs simple multiplication

Triggered on form submit

## 5. Swap Logic
const swap = () => {
  setFrom(to);
  setTo(from);
  setConvertedAmount(amount);
  setAmount(convertedAmount);
};

Swaps source and target currencies

Exchanges input and output values

## 🌐 API Reference

This project uses a free currency API:

https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api

Example endpoint:

/latest/v1/currencies/usd.json
## 🎨 UI & Styling

Built with Tailwind CSS

Gradient background

Glassmorphism card effect

Smooth hover animations

## ⚠️ Limitations

No error handling for API failures

No loading state implemented

No caching of API responses

## 🔮 Future Improvements

Add loading spinner

Add error handling and fallback UI

Add currency search/filter

Persist last selected currencies

Add unit tests

Support historical exchange rates

## 📄 License

This project is open-source and available under the MIT License.

## 👨‍💻 Author

Developed by Zayan Waris
