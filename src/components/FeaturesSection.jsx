import { CheckCircle, Zap, Bell } from "lucide-react";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  return (
    <section
      id="feature"
      className="w-full py-20 px-4 text-white flex flex-col items-center gap-14 overflow-hidden"
    >
      {/* Heading */}
      <div className="text-center max-w-3xl">
        <h2 className="text-4xl font-bold tracking-tight">Smart Features</h2>
        <p className="text-gray-400 mt-3">
          Advanced Trading Guidance Tailored For Options & Futures Traders
        </p>
      </div>

      {/* Featured Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl bg-gradient-to-br from-[#161616] to-[#0d0d0d] border border-white/10 rounded-3xl p-10 shadow-2xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs text-gray-400 mb-2">FEATURED</p>
            <h3 className="text-3xl font-semibold mb-4">
              Precision Options & Futures Signals
            </h3>
            <p className="text-gray-400 mb-6">
              Clear, actionable entries and exits based on real market
              structure & institutional activity.
            </p>

            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-3">
                <CheckCircle size={18} className="text-white" /> 80%+ historically measured accuracy
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle size={18} className="text-white" /> NIFTY & BANKNIFTY Options + Futures
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle size={18} className="text-white" /> Clear stoploss + target + exit signals
              </li>
            </ul>
          </div>

         {/* 🔹 Real Chart Image with perfect responsive fit */}
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  viewport={{ once: true }}
  className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-xl overflow-hidden border border-white/10 shadow-lg bg-black/40"
>
  <img
    src="/chart-strategy.png"
    alt="Trading Chart Strategy"
    className="absolute inset-0 w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-700 ease-out"
  />
</motion.div>

        </div>
      </motion.div>

      {/* Lower Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-br from-[#161616] to-[#0d0d0d] border border-white/10 rounded-2xl p-8 text-center shadow-xl transition-transform duration-300"
        >
          <Zap className="text-white mx-auto mb-4" size={32} />
          <h4 className="text-xl font-semibold mb-2">Real-Time Market Signals</h4>
          <p className="text-gray-400">
            Instant actionable trade calls when the market shifts.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-br from-[#161616] to-[#0d0d0d] border border-white/10 rounded-2xl p-8 text-center shadow-xl transition-transform duration-300"
        >
          <Bell className="text-white mx-auto mb-4" size={32} />
          <h4 className="text-xl font-semibold mb-2">Entry + Exit Alerts</h4>
          <p className="text-gray-400">
            Exact levels, risk control, and execution adjustments.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
