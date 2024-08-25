import { AnimatePresence, motion } from "framer-motion";

// Import the icons
import RoundedIcon from "../assets/icons/alert.png";

import "../components/CSS/Springmodal.css";

const ExampleWrapper = ({ isOpen, setIsOpen, sendStatus }) => {
  return (
    <SpringModal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      sendStatus={sendStatus}
    />
  );
};

const SpringModal = ({ isOpen, setIsOpen, sendStatus }) => {
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

            <div className="relative z-10 padding-bottom margin">
              <h3 className="text-3xl font-bold text-center mb-2">
                {sendStatus === "success"
                  ? "Message sent successfully!"
                  : sendStatus === "error"
                  ? "Failed to send message."
                  : "Sending message..."}
              </h3>
              <p className="text-center mb-6">
                {sendStatus === "success"
                  ? "Your message has been sent. We will get back to you soon."
                  : sendStatus === "error"
                  ? "Please try again or contact us via phone or email."
                  : "Please wait while we send your message..."}
              </p>
              <div className="info">
                <p>
                  Phone: <br /> +49 - 173 3044745
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
                  Close
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
