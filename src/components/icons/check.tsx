import { AnimatePresence, motion } from "framer-motion";

export const CheckIcon = ({ initial = true, isVisible = true }) => {
  return (
    <AnimatePresence initial={initial}>
      {isVisible && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="block overflow-visible"
          viewBox="0 0 24 24"
        >
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.3 }}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
          >
            <motion.circle
              className="success-circle-outline"
              cx="12"
              cy="12"
              r="11.5"
              fill="none"
              stroke="#81c038"
              strokeWidth="1"
              strokeDasharray="72px, 72px"
              initial={{ strokeDashoffset: 72 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 0.3, delay: 0.8 }}
            />
            <motion.circle
              className="success-circle-fill"
              cx="12"
              cy="12"
              r="11.5"
              fill="#81c038"
              stroke="none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 1.1 }}
            />
            <motion.polyline
              className="success-tick"
              points="17,8.5 9.5,15.5 7,13"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1"
              strokeDasharray="15px, 15px"
              initial={{ strokeDashoffset: -14, opacity: 0 }}
              animate={{ strokeDashoffset: 31, opacity: 1 }}
              transition={{ duration: 0.45, delay: 1.4 }}
            />
          </motion.g>
        </svg>
      )}
    </AnimatePresence>
  );
};
