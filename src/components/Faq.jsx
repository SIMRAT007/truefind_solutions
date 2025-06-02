import React, { useState } from 'react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "How do I create an account?",
      answer: "To create an account, click on the \"Sign Up\" button at the top right corner of our website. You'll need to provide your email address, create a password, and fill in some basic information. After verification, your account will be ready to use."
    },
    {
      question: "What payment methods do you accept?",
      answer: <>
        <p className="text-gray-300 mb-3">
          We accept all major credit cards including Visa, MasterCard, American Express, and Discover. 
          We also support payments through PayPal and bank transfers for certain plans.
        </p>
        <ul className="list-disc pl-5 text-gray-300">
          <li>Credit/Debit Cards</li>
          <li>PayPal</li>
          <li>Bank Transfers (for annual plans)</li>
        </ul>
      </>
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. If you cancel during your billing period, you'll continue to have access to our services until the end of that period. We don't charge any cancellation fees."
    },
    {
      question: "How do I reset my password?",
      answer: <>
        <p className="text-gray-300 mb-3">
          To reset your password:
        </p>
        <ol className="list-decimal pl-5 text-gray-300 space-y-2">
          <li>Go to the login page and click "Forgot password"</li>
          <li>Enter the email address associated with your account</li>
          <li>Check your email for a password reset link</li>
          <li>Click the link and follow the instructions to create a new password</li>
        </ol>
      </>
    },
    {
      question: "Is there a mobile app available?",
      answer: "Yes! We have mobile apps available for both iOS and Android devices. You can download them from the App Store or Google Play Store. All your data will sync automatically between the web version and mobile apps."
    }
  ];

  return (
    <section className="bg-[#0E0E11] text-white py-12">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 text-sm rounded-full text-[#2E81CC] bg-[#1a1a28] mb-4">
            <div className="w-2 h-2 bg-[#2E81CC] rounded-full"></div>
            SUPPORT
          </span>
          <h1 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-400">Find answers to common questions about our products and services.</p>
        </div>

        {/* Search Bar */}
        {/* <div className="mb-10">
          <div className="relative max-w-xl mx-auto">
            <input 
              type="text" 
              placeholder="Search FAQs..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-5 py-3 rounded-lg border border-gray-700 bg-[#1a1a28] text-white focus:outline-none focus:ring-2 focus:ring-[#2E81CC] focus:border-transparent"
            />
            <button className="absolute right-3 top-3 text-gray-400 hover:text-[#2E81CC]">
              <span>🔍</span>
            </button>
          </div>
        </div> */}

        {/* FAQ Categories */}
        {/* <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button className="px-4 py-2 bg-[#2E81CC] text-white rounded-full hover:bg-[#2569a3] transition">All</button>
          <button className="px-4 py-2 bg-[#1a1a28] text-[#2E81CC] border border-[#2E81CC] rounded-full hover:bg-[#232331] transition">Account</button>
          <button className="px-4 py-2 bg-[#1a1a28] text-[#2E81CC] border border-[#2E81CC] rounded-full hover:bg-[#232331] transition">Billing</button>
          <button className="px-4 py-2 bg-[#1a1a28] text-[#2E81CC] border border-[#2E81CC] rounded-full hover:bg-[#232331] transition">Features</button>
          <button className="px-4 py-2 bg-[#1a1a28] text-[#2E81CC] border border-[#2E81CC] rounded-full hover:bg-[#232331] transition">Support</button>
        </div> */}

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-[#1a1a28] rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
              <button 
                className="w-full flex justify-between items-center p-6 text-left cursor-pointer"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                <span className={`text-[#2E81CC] transition-transform duration-300 ${activeIndex === index ? 'transform rotate-180' : ''}`}>
                  {activeIndex === index ? '▲' : '▼'}
                </span>
              </button>
              <div className={`px-6 pb-6 ${activeIndex === index ? '' : 'hidden'}`}>
                <div className="text-gray-300">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-16 text-center bg-[#1a1a28] rounded-xl p-8 shadow-lg hover:shadow-[#2E81CC]/10 transition-all duration-300">
          <h2 className="text-2xl font-bold text-white mb-3">Still have questions?</h2>
          <p className="text-gray-400 mb-6">Our support team is happy to help you with any other questions you might have.</p>
          <button className="px-6 py-3 bg-gradient-to-r from-[#2E81CC] to-[#1a5c9a] text-white rounded-lg hover:bg-[#2569a3] transition font-medium flex items-center justify-center gap-2 mx-auto hover:shadow-lg hover:shadow-[#2E81CC]/20 transform hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="animate-pulse">
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
            </svg>
            Call Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Faq;
