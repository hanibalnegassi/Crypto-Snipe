import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import Confetti from 'react-confetti';
export const SuccessMessage = ({ show, countdown }: { show: boolean; countdown: number}) => {
    return (
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 flex items-center justify-center bg-black/50 z-10 backdrop-blur-sm"
          >
            <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={200}
          gravity={0.3}
          className='z-[9999px] inset-0 fixed'
        />
            <motion.div
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              className="bg-gray-800 p-8 rounded-2xl shadow-2xl border border-emerald-500/20 max-w-md w-full mx-4"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                >
                  <CheckCircle2 className="w-16 h-16 text-emerald-400" />
                </motion.div>
                <h2 className="text-2xl font-bold text-gray-100">Success!</h2>
                <p className="text-gray-300">Crypto Snipe Bot Has Been Sent To Your Email.</p>
                <div className="w-full bg-gray-700 rounded-full h-2 mt-4">
                  <motion.div
                    initial={{ width: "100%" }}
                    animate={{ width: "0%" }}
                    transition={{ duration: 4, ease: "linear" }}
                    className="bg-emerald-400 h-2 rounded-full"
                  />
                </div>
                <p className="text-gray-400 text-sm">
                  Redirecting in {countdown} seconds...
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };
  