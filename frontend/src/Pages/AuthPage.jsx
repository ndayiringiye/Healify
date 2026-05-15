import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebookF, FaGoogle, FaInstagram } from "react-icons/fa6";
import PaintStrokeEdge from "../Components/Auth/PaintStrokeEdge";
import logo from "../../public/images/logo.png";

const inputClass =
  "w-full px-6 py-4 rounded-full border border-slate-200 bg-white text-healify-navy placeholder:text-slate-400 text-[15px] focus:outline-none focus:ring-2 focus:ring-auth-orange/40 focus:border-auth-orange transition-shadow";

function LoginForm() {
  return (
    <form className="w-full max-w-[400px] space-y-5" onSubmit={(e) => e.preventDefault()}>
      <input type="email" placeholder="Email Address" className={inputClass} required />
      <input type="password" placeholder="Password" className={inputClass} required />
      <div className="flex items-center justify-between text-sm px-1">
        <label className="flex items-center gap-2 text-slate-500 cursor-pointer">
          <input type="checkbox" className="rounded border-slate-300 text-auth-orange focus:ring-auth-orange" />
          Remember me
        </label>
        <a href="#" className="text-slate-400 hover:text-auth-blue transition-colors">
          Forgot Password
        </a>
      </div>
      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-4 rounded-full bg-auth-orange text-white font-bold text-[15px] tracking-wide shadow-lg shadow-auth-orange/30 hover:bg-[#e67a35] transition-colors"
      >
        Login
      </motion.button>
    </form>
  );
}

function SignupForm() {
  return (
    <form className="w-full max-w-[400px] space-y-5" onSubmit={(e) => e.preventDefault()}>
      <input type="text" placeholder="Full Name" className={inputClass} required />
      <input type="email" placeholder="Email Address" className={inputClass} required />
      <input type="password" placeholder="Password" className={inputClass} required />
      <input type="password" placeholder="Confirm Password" className={inputClass} required />
      <label className="flex items-start gap-2 text-sm text-slate-500 px-1 cursor-pointer">
        <input type="checkbox" className="mt-1 rounded border-slate-300 text-auth-orange focus:ring-auth-orange" required />
        <span>I agree to the Terms of Service and Privacy Policy</span>
      </label>
      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-4 rounded-full bg-auth-orange text-white font-bold text-[15px] tracking-wide shadow-lg shadow-auth-orange/30 hover:bg-[#e67a35] transition-colors"
      >
        Create Account
      </motion.button>
    </form>
  );
}

function SocialButtons({ className = "" }) {
  const socials = [
    { icon: FaFacebookF, label: "Facebook", hover: "hover:bg-[#1877F2]" },
    { icon: FaGoogle, label: "Google", hover: "hover:bg-[#DB4437]" },
    { icon: FaInstagram, label: "Instagram", hover: "hover:bg-[#E1306C]" },
  ];

  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      {socials.map(({ icon: Icon, label, hover }) => (
        <motion.button
          key={label}
          type="button"
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.95 }}
          aria-label={`Continue with ${label}`}
          className={`w-11 h-11 rounded-lg bg-white/95 text-auth-blue flex items-center justify-center shadow-md transition-all duration-300 ${hover} hover:text-white`}
        >
          <Icon size={18} />
        </motion.button>
      ))}
    </div>
  );
}

function ModeToggle({ isLogin, onLogin, onRegister, className = "" }) {
  return (
    <div className={`inline-flex rounded-md overflow-hidden shadow-lg ${className}`}>
      <button
        type="button"
        onClick={onLogin}
        className={`px-6 py-2.5 text-sm font-bold transition-colors ${
          isLogin ? "bg-auth-orange text-white" : "bg-white text-auth-blue"
        }`}
      >
        Login
      </button>
      <button
        type="button"
        onClick={onRegister}
        className={`px-6 py-2.5 text-sm font-bold transition-colors ${
          !isLogin ? "bg-auth-orange text-white" : "bg-white text-auth-blue"
        }`}
      >
        Register
      </button>
    </div>
  );
}

export default function AuthPage() {
  const [mode, setMode] = useState("login");
  const isLogin = mode === "login";

  return (
    <div className="min-h-screen flex font-poppins overflow-hidden">
      <div className="w-full lg:w-[48%] min-h-screen bg-[#f4f6f8] flex flex-col items-center justify-center px-6 py-12 pb-44 lg:pb-12 relative z-20">
        <Link to="/" className="mb-10">
          <img src={logo} alt="Healify" className="h-12 w-auto object-contain" />
        </Link>

        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.35 }}
            className="w-full flex flex-col items-center"
          >
            <h1 className="text-2xl md:text-[1.65rem] font-bold text-healify-navy mb-8 text-center">
              {isLogin ? "Sign Into Your Account" : "Create Your Account"}
            </h1>

            {isLogin ? <LoginForm /> : <SignupForm />}

            <p className="mt-8 text-sm text-slate-500 text-center">
              {isLogin ? (
                <>
                  Don&apos;t have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setMode("register")}
                    className="text-auth-blue font-semibold hover:underline"
                  >
                    Register here
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setMode("login")}
                    className="text-auth-blue font-semibold hover:underline"
                  >
                    Sign in here
                  </button>
                </>
              )}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="hidden lg:flex flex-1 relative bg-auth-blue min-h-screen items-center justify-center overflow-hidden">
        <PaintStrokeEdge />

        <div className="relative z-20 max-w-md px-12 xl:px-16 text-center text-white">
          <ModeToggle
            isLogin={isLogin}
            onLogin={() => setMode("login")}
            onRegister={() => setMode("register")}
            className="mb-10"
          />

          <h2 className="text-3xl xl:text-4xl font-bold tracking-wide leading-tight">
            WELCOME TO <span className="text-auth-orange">HEALIFY</span>
          </h2>

          <p className="mt-6 text-white/85 text-[15px] leading-relaxed">
            Your trusted partner in health and wellness. Access appointments, medical records,
            and expert care — all in one secure place designed around you.
          </p>

          <p className="mt-6 text-sm text-white/70 uppercase tracking-wider font-medium">
            Or continue with
          </p>

          <SocialButtons className="mt-4" />

          <p className="mt-10 text-xs text-white/50">
            <Link to="/" className="hover:text-white transition-colors">
              ← Back to home
            </Link>
          </p>
        </div>

        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[35%] w-44 h-44 rounded-full bg-auth-blue border-[6px] border-white/20 flex items-center justify-center pointer-events-none"
          aria-hidden
        >
          <div className="relative w-28 h-20">
            <div className="absolute top-2 left-3 w-7 h-9 bg-white rounded-full" />
            <div className="absolute top-2 right-3 w-7 h-9 bg-white rounded-full" />
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-16 h-8 border-b-[5px] border-white rounded-b-full" />
          </div>
        </div>
      </div>

      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-auth-blue px-6 py-5 z-30 rounded-t-3xl shadow-[0_-8px_30px_rgba(0,0,0,0.12)]">
        <ModeToggle
          isLogin={isLogin}
          onLogin={() => setMode("login")}
          onRegister={() => setMode("register")}
          className="mb-4 mx-auto flex"
        />
        <p className="text-center text-white/80 text-xs mb-3">Or continue with</p>
        <SocialButtons />
      </div>
    </div>
  );
}
