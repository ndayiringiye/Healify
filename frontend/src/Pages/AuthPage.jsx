import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaFacebookF, 
  FaGoogle, 
  FaInstagram, 
  FaLinkedinIn,
  FaUser,
  FaEnvelope,
  FaLock
} from "react-icons/fa6";
import PaintStrokeEdge from "../Components/Auth/PaintStrokeEdge";
import logo from "../../public/images/logo.png";

const inputClass =
  "w-full px-6 py-[18px] pl-12 rounded-3xl border border-slate-200 bg-white text-healify-navy placeholder:text-slate-400 text-[15px] focus:outline-none focus:ring-2 focus:ring-auth-orange/30 focus:border-auth-orange transition-all duration-200";

function InputWithIcon({ icon: Icon, ...props }) {
  return (
    <div className="relative">
      <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400">
        <Icon size={18} />
      </div>
      <input {...props} className={inputClass} />
    </div>
  );
}

function LoginForm() {
  return (
    <form className="w-full max-w-[380px] space-y-5" onSubmit={(e) => e.preventDefault()}>
      <InputWithIcon 
        icon={FaEnvelope}
        type="email" 
        placeholder="Email Address" 
        required 
      />
      <InputWithIcon 
        icon={FaLock}
        type="password" 
        placeholder="Password" 
        required 
      />

      <div className="flex items-center justify-between text-sm px-2">
        <label className="flex items-center gap-2 text-slate-500 cursor-pointer">
          <input
            type="checkbox"
            className="w-4 h-4 rounded border-slate-300 text-auth-orange focus:ring-auth-orange"
          />
          Remember me
        </label>
        <a href="#" className="text-slate-400 hover:text-healify-cyan transition-colors">
          Forgot Password
        </a>
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className="w-full py-4 rounded-3xl bg-healify-navy text-white font-bold text-[15px] tracking-wider shadow-xl shadow-healify-navy/30 hover:brightness-105 transition-all"
      >
        Login
      </motion.button>
    </form>
  );
}

function SignupForm() {
  return (
    <form className="w-full max-w-[380px] space-y-5" onSubmit={(e) => e.preventDefault()}>
      <InputWithIcon 
        icon={FaUser}
        type="text" 
        placeholder="Full Name" 
        required 
      />
      <InputWithIcon 
        icon={FaEnvelope}
        type="email" 
        placeholder="Email Address" 
        required 
      />
      <InputWithIcon 
        icon={FaLock}
        type="password" 
        placeholder="Password" 
        required 
      />
      <InputWithIcon 
        icon={FaLock}
        type="password" 
        placeholder="Confirm Password" 
        required 
      />

      <label className="flex items-start gap-2 text-sm text-slate-500 px-2 cursor-pointer">
        <input
          type="checkbox"
          className="mt-1 w-4 h-4 rounded border-slate-300 text-auth-orange focus:ring-auth-orange"
          required
        />
        <span>I agree to the Terms of Service and Privacy Policy</span>
      </label>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className="w-full py-4 rounded-3xl bg-healify-navy text-white font-bold text-[15px] tracking-wider shadow-xl shadow-healify-navy/30 hover:brightness-105 transition-all"
      >
        Create Account
      </motion.button>
    </form>
  );
}

function SocialButtons() {
  const socials = [
    { icon: FaFacebookF, label: "Facebook", hover: "hover:bg-[#1877F2]" },
    { icon: FaGoogle, label: "Google", hover: "hover:bg-[#DB4437]" },
    { icon: FaInstagram, label: "Instagram", hover: "hover:bg-[#E1306C]" },
    { icon: FaLinkedinIn, label: "LinkedIn", hover: "hover:bg-[#0A66C2]" },
  ];

  return (
    <div className="flex items-center justify-center gap-4">
      {socials.map(({ icon: Icon, label, hover }) => (
        <motion.button
          key={label}
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.95 }}
          aria-label={`Continue with ${label}`}
          className={`w-11 h-11 rounded-xl bg-white/95 text-healify-cyan flex items-center justify-center shadow-md transition-all duration-300 ${hover} hover:text-white`}
        >
          <Icon size={19} />
        </motion.button>
      ))}
    </div>
  );
}

function ModeToggle({ isLogin, setMode }) {
  return (
    <div className="inline-flex rounded-xl overflow-hidden shadow-lg border border-white/10">
      <button
        type="button"
        onClick={() => setMode("login")}
        className={`px-8 py-3 text-sm font-bold transition-all ${
          isLogin
            ? "bg-healify-navy text-white"
            : "bg-white text-healify-cyan hover:bg-white/90"
        }`}
      >
        Login
      </button>
      <button
        type="button"
        onClick={() => setMode("register")}
        className={`px-8 py-3 text-sm font-bold transition-all ${
          !isLogin
            ? "bg-healify-navy text-white"
            : "bg-white text-healify-cyan hover:bg-white/90"
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
    <div className="min-h-screen flex font-poppins overflow-hidden bg-[#f4f6f8]">
      {/* LEFT PANEL */}
      <div className="w-full lg:w-[46%] min-h-screen bg-[#f4f6f8] flex flex-col items-center justify-center px-6 py-12 relative z-20">
        <Link to="/" className="mb-10">
          <img src={logo} alt="Healify" className="h-11 w-auto object-contain" />
        </Link>

        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-[380px] flex flex-col items-center"
          >
            <h1 className="text-[22px] font-semibold text-healify-navy mb-9 text-center">
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
                    className="text-healify-cyan font-semibold hover:underline"
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
                    className="text-healify-cyan font-semibold hover:underline"
                  >
                    Sign in here
                  </button>
                </>
              )}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* RIGHT PANEL - unchanged except button rounding */}
      <div className="hidden lg:flex flex-1 relative bg-healify-cyan min-h-screen items-center justify-center overflow-hidden">
        <div className="absolute w-[320px] h-[320px] bg-white/5 rounded-full -top-20 -right-20" />
        <div className="absolute w-[220px] h-[220px] bg-white/5 rounded-full -bottom-16 left-12" />

        <PaintStrokeEdge />

        <div className="relative z-20 max-w-md px-8 text-center text-white">
          <ModeToggle isLogin={isLogin} setMode={setMode} className="mb-10" />

          <h2 className="text-4xl font-bold tracking-wide leading-tight">
            WELCOME TO <span className="text-auth-orange">HEALIFY</span>
          </h2>

          <p className="mt-6 text-white/80 text-[15.2px] leading-relaxed">
            Your trusted partner in health and wellness. Access appointments, medical records,
            and expert care — all in one secure place designed around you.
          </p>

          <p className="mt-8 text-xs uppercase tracking-[1.5px] text-white/60 font-medium">
            Or continue with
          </p>
          <SocialButtons />
          <Link
            to="/"
            className="block mt-12 text-xs text-white/50 hover:text-white transition-colors"
          >
            ← Back to home
          </Link>
        </div>

        <div className="absolute right-[-52px] top-1/2 -translate-y-1/2 w-[138px] h-[138px] rounded-full bg-healify-cyan border-[7px] border-white/20 flex items-center justify-center">
          <div className="relative w-[78px] h-[62px]">
            <div className="absolute top-[6px] left-[7px] w-[23px] h-[29px] bg-white rounded-full" />
            <div className="absolute top-[6px] right-[7px] w-[23px] h-[29px] bg-white rounded-full" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[46px] h-[23px] border-b-[5px] border-white rounded-b-[40px]" />
          </div>
        </div>
      </div>

      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-healify-cyan px-6 py-6 z-50 rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.15)]">
        <ModeToggle isLogin={isLogin} setMode={setMode} className="mb-5 mx-auto" />
        <p className="text-center text-white/75 text-xs mb-3">Or continue with</p>
        <SocialButtons />
      </div>
    </div>
  );
}