import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

// Import the icons
import AlertIcon from "../assets/icons/exclamation.png";
import RoundedIcon from "../assets/icons/alert.png";

import "../components/CSS/Springmodal.css";

const ExampleWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="px-4 py-64 bg-slate-900 grid place-content-center">
      <button
        onClick={() => setIsOpen(true)}
        className="send"
      >
        Send Message
      </button>
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

const SpringModal = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <div className="icon-side">
              <img src={RoundedIcon} alt="Alert Icon" className="imgdeg" />
            </div>
           
            <div className="relative z-10 padding-bottom">
              <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto">
                <div className="icon-container">
                  <img src={AlertIcon} alt="Alert Icon" className="img" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-center mb-2">
                Everything entered correctly?
              </h3>
              <p className="text-center mb-6">
                If you´re not sure, please go back and check it again. <br />
                Or contact me via phone or mail.
              </p>
              <div className="info">
                <p>
                  Phone: <br /> +49 - 173 3044745{" "}
                </p>
                <p>
                  Email: <br /> lukaslamberz96@gmail.com
                </p>
              </div>
              <div className="flex gap-2 transparent">
                <button
                  onClick={() => setIsOpen(false)}
                  className="purplebutton"
                >
                  Wait, I forgot something
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="whitebutton"
                >
                  Ready to send!
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExampleWrapper;
