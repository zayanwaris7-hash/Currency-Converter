import { useState } from 'react'
import { useCurrencyData } from './component/useCurrencyData';
import InputBox from './component/inputBox';

function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyData(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4"
    >
      <div className="w-full max-w-md">
        
        {/* Card */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl p-6">

          {/* Title */}
          <h1 className="text-2xl font-semibold text-white text-center mb-6 tracking-wide">
            Currency Converter
          </h1>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
            className="space-y-4"
          >
            {/* From */}
            <div className="bg-white/5 p-3 rounded-xl border border-white/10">
              <InputBox
                label={from}
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>

            {/* Swap Button */}
            <div className="flex justify-center">
              <button
                type="button"
                onClick={swap}
                className="bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 text-white px-4 py-1 rounded-full shadow-md hover:scale-105"
              >
                ⇅ Swap
              </button>
            </div>

            {/* To */}
            <div className="bg-white/5 p-3 rounded-xl border border-white/10">
              <InputBox
                label={to}
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-medium tracking-wide transition-all duration-300 shadow-lg hover:shadow-indigo-500/40 hover:scale-[1.02]"
            >
              Convert {from.toUpperCase()} → {to.toUpperCase()}
            </button>

          </form>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-400 text-sm mt-4">
          Real-time currency converter
        </p>

      </div>
    </div>
  )
}

export default App