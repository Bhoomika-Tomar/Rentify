import React from 'react';

const Newsletter = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-950 via-blue-900 to-indigo-950 py-16 px-6 flex items-center justify-center mt-20 rounded-2xl shadow-lg">
      <div className="flex flex-col items-center justify-center text-center w-full max-w-3xl space-y-6">

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-md">
          Never Miss a Deal!
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl">
          Subscribe now to get exclusive offers, early access to listings, and special discounts tailored for you.
        </p>

        {/* Input Form */}
        <form className="flex w-full max-w-xl h-12 sm:h-14 rounded-full overflow-hidden shadow-md border border-gray-600 bg-white/10 backdrop-blur-md">
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="flex-1 px-5 text-sm sm:text-base bg-transparent text-white placeholder-gray-300 outline-none focus:ring-0"
          />
          <button
            type="submit"
            className="px-8 sm:px-12 bg-gradient-to-r from-amber-500 to-rose-600 hover:from-amber-600 hover:to-rose-700 text-white font-semibold transition-all duration-300"
          >
            Subscribe
          </button>
        </form>

        {/* Small Note */}
        <p className="text-xs text-gray-400 italic">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
};

export default Newsletter;

