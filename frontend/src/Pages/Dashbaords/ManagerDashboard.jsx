import React, { useState, useEffect } from 'react';
import { 
  FaGaugeHigh, FaCalendarDays, FaUserDoctor, FaUsers, 
  FaBedPulse, FaFlask, FaFolder, FaBell, FaEnvelope,
  FaHospital, FaStethoscope, FaArrowsRotate, FaHandHoldingDollar,
  FaArrowTrendUp 
} from 'react-icons/fa6';

const ManagerDashboard = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [totalBeds, setTotalBeds] = useState(700);
  const [activeNav, setActiveNav] = useState('Dashboard');

  useEffect(() => {
    const now = new Date();
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    setCurrentDate(now.toLocaleDateString('en-US', options));

    const target = 842;
    const interval = setInterval(() => {
      setTotalBeds(prev => prev >= target ? target : prev + 18);
    }, 35);

    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { name: 'Dashboard', icon: FaGaugeHigh },
    { name: 'Appointments', icon: FaCalendarDays },
    { name: 'Doctors', icon: FaUserDoctor },
    { name: 'Other Staff', icon: FaUsers },
    { name: 'Patients', icon: FaBedPulse },
    { name: 'Laboratory', icon: FaFlask },
    { name: 'Medical Records', icon: FaFolder },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Sidebar - Matching Redstar Style */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col shadow-sm">
        {/* Logo */}
        <div className="px-6 py-8 border-b border-gray-100 flex items-center gap-3">
          <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center text-white font-bold text-3xl">R</div>
          <span className="text-3xl font-semibold tracking-tight text-gray-900">REDSTAR</span>
        </div>

        {/* User Profile */}
        <div className="px-6 py-6 border-b border-gray-100 bg-emerald-50">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl overflow-hidden border-2 border-white shadow">
              <img src="https://picsum.photos/id/64/200/200" alt="Dr. Kiran" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Dr. Kiran Patel</p>
              <p className="text-xs text-emerald-600 font-medium">ADMINISTRATOR</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto py-6 px-3">
          <nav className="space-y-1">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href="#"
                  onClick={() => setActiveNav(item.name)}
                  className={`flex items-center gap-3 px-4 py-3.5 text-sm font-medium rounded-xl transition-all ${
                    activeNav === item.name 
                      ? 'bg-emerald-50 text-emerald-700 shadow-sm' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <header className="h-16 bg-white border-b border-gray-100 px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative w-96">
              <input
                type="text"
                className="w-full bg-gray-100 border-0 focus:ring-1 focus:ring-emerald-400 rounded-3xl py-3 pl-12 text-sm placeholder-gray-400"
                placeholder="Search..."
              />
              <i className="fa-solid fa-magnifying-glass absolute left-5 top-3.5 text-gray-400"></i>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 cursor-pointer">
              <img src="https://flagcdn.com/w40/gb.png" className="w-5 h-4 rounded" alt="" />
              <span className="text-sm font-medium">English</span>
            </div>

            <button className="relative p-2 hover:bg-gray-100 rounded-2xl">
              <FaBell className="text-xl text-gray-600" />
              <span className="absolute top-1 right-1 w-5 h-5 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full">6</span>
            </button>

            <button className="relative p-2 hover:bg-gray-100 rounded-2xl">
              <FaEnvelope className="text-xl text-gray-600" />
              <span className="absolute top-1 right-1 w-5 h-5 bg-blue-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full">2</span>
            </button>

            <div className="flex items-center gap-3 cursor-pointer">
              <div className="text-right">
                <p className="text-sm font-semibold">Dr. Kiran Patel</p>
                <p className="text-xs text-emerald-600">Administrator</p>
              </div>
              <img src="https://picsum.photos/id/64/200/200" alt="" className="w-9 h-9 rounded-2xl object-cover border-2 border-white shadow" />
            </div>
          </div>
        </header>

        {/* Dashboard Body */}
        <div className="flex-1 overflow-auto p-8 bg-gray-50">
          <div className="mb-8">
            <h1 className="text-3xl font-semibold text-gray-900">Dashboard</h1>
            <p className="text-gray-500">Welcome back, Dr. Patel</p>
          </div>

          {/* KPI Cards - Very Close to Original */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Capacity Monitor */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm font-medium flex items-center gap-2">
                    <FaHospital /> CAPACITY MONITOR
                  </p>
                  <p className="text-5xl font-bold text-gray-900 mt-4">{totalBeds}</p>
                </div>
                <div className="text-emerald-500 text-4xl">
                  <FaHospital />
                </div>
              </div>
              <div className="mt-3 inline-flex items-center bg-emerald-100 text-emerald-700 text-xs font-semibold px-4 py-1 rounded-2xl">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse mr-2"></span>
                85% Occupied
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div><p className="text-gray-500 text-sm">Available Beds</p><p className="font-semibold text-xl">126</p></div>
                <div><p className="text-gray-500 text-sm">ICU Vacancy</p><p className="font-semibold text-xl text-amber-600">14</p></div>
              </div>
            </div>

            {/* Clinical Staffing */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 text-sm font-medium flex items-center gap-2">
                    <FaStethoscope /> CLINICAL STAFFING
                  </p>
                  <p className="text-5xl font-bold text-gray-900 mt-4">52</p>
                  <p className="text-emerald-600 text-sm mt-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span> On Duty Now
                  </p>
                </div>
                <div className="text-rose-500 text-4xl"><FaStethoscope /></div>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex gap-3">
                  <div className="w-9 h-9 bg-blue-100 rounded-2xl flex items-center justify-center text-2xl">👨‍⚕️</div>
                  <div><p className="font-semibold">18</p><p className="text-xs text-gray-500">Doctors</p></div>
                </div>
                <div className="flex gap-3">
                  <div className="w-9 h-9 bg-purple-100 rounded-2xl flex items-center justify-center text-2xl">👩‍⚕️</div>
                  <div><p className="font-semibold">34</p><p className="text-xs text-gray-500">Nurses</p></div>
                </div>
              </div>
            </div>

            {/* Patient Flow & Financials - Similar Style */}
            {/* (Add the other two cards in the same pattern) */}
          </div>

          {/* You can continue expanding Patient Data, Birth & Death, etc. similarly */}
        </div>
      </div>
    </div>
  );
};

export default ManagerDashboard;