import React from 'react'

// Testimonial card component to reduce repetition
const TestimonialCard = ({ text, name, role, imgSrc }) => (
  <div className="flex flex-col justify-between h-[220px] rounded-xl border-[1.2px] border-[#2E81CC]/20 bg-[#171721] hover:border-[#2E81CC]/40 hover:shadow-md hover:shadow-[#2E81CC]/10 transition-all duration-300 mx-3 md:w-[440px] sm:w-[320px] w-[280px]">
    <p className="px-5 py-5 tracking-tight text-md font-extralight md:text-lg">
      "{text}"
    </p>
    <div className="flex overflow-hidden h-[30%] md:h-[28%] gap-1 w-full border-t-[1.2px] border-gray-700 dark:border-gray-700">
      <div className="flex items-center w-3/4 gap-3 px-4 py-3">
        <img className="w-10 h-10 rounded" src={imgSrc} alt={name} />
        <div className="flex flex-col items-start justify-start flex-1 gap-0">
          <h5 className="text-base font-medium md:text-md">{name}</h5>
          <p className="text-sm md:text-sm text-gray-500 mt-[4px]">{role}</p>
        </div>
      </div>
      <div className="w-[1px] bg-white/10 dark:bg-gray-700"></div>
      <div className="flex items-center justify-center max-w-full mx-auto">
        <svg width="30" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
        </svg>
      </div>
    </div>
  </div>
);

const Testimonial = () => {
  const topRowTestimonials = [
    {
      text: "Working with Samuel was a game-changer! His Tailwind CSS skills brought our UI to life with a clean, modern, and fully responsive design.",
      name: "Sarah M",
      role: "Startup Founder",
      imgSrc: "https://images.unsplash.com/photo-1665686307516-1915b9616526?auto=format&fit=crop&w=1080&q=80"
    },
    {
      text: "Finding a great Laravel developer is tough, but Samuel exceeded all my expectations. His code is clean, efficient, and highly scalable.",
      name: "Daniel S",
      role: "Business Owner",
      imgSrc: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=1080&q=80"
    },
    {
      text: "A rare talent who excels in Tailwind, Nuxt.js, and Laravel! He built a full-stack web app that is both powerful and beautiful.",
      name: "John M",
      role: "Startup CEO",
      imgSrc: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?auto=format&fit=crop&w=1080&q=80"
    },
    {
      text: "I struggled with bloated CSS files until Samuel revamped our frontend using Tailwind. The result? A lightweight, maintainable, and stunning interface!",
      name: "James L",
      role: "Frontend Engineer",
      imgSrc: "https://images.unsplash.com/photo-1473830394358-91588751b241?auto=format&fit=crop&w=1080&q=80"
    },
    {
      text: "I can't recommend Samuel enough! He transformed our Vue.js project into a high-performance Nuxt.js app with seamless API integration.",
      name: "Laura P",
      role: "Marketing Manager",
      imgSrc: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&w=1080&q=80"
    },
  ];

  const bottomRowTestimonials = [
    {
      text: "Nuxt.js can be tricky, but Samuel made everything look effortless. From state management to routing, they nailed it.",
      name: "Marry J.",
      role: "Startup Founder",
      imgSrc: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=1080&q=80"
    },
    {
      text: "The Laravel API Samuel built for us was robust, secure, and well-documented. Our mobile app team loved working with it!",
      name: "Jason K.",
      role: "Mobile App Developer",
      imgSrc: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?auto=format&fit=crop&w=1080&q=80"
    },
    {
      text: "We had a messy PHP codebase, and Samuel expertly migrated it to Laravel. The new system is modern, scalable, and easy to maintain.",
      name: "Mark E.",
      role: "Software Architect",
      imgSrc: "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?auto=format&fit=crop&w=1080&q=80"
    },
    {
      text: "The way Samuel implements Tailwind is incredible. Our website now looks amazing and performs better than ever!",
      name: "David T.",
      role: "E-commerce Manager",
      imgSrc: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1080&q=80"
    },
    {
      text: "A complete package! Samuel crafted a sleek UI with Tailwind, built a high-performance Nuxt.js frontend, and powered it with a rock-solid Laravel backend.",
      name: "Steve J.",
      role: "Project Manager",
      imgSrc: "https://images.unsplash.com/photo-1559893088-c0787ebfc084?auto=format&fit=crop&w=1080&q=80"
    },
  ];

  // Clone testimonials for infinite scrolling effect
  const allTopTestimonials = [...topRowTestimonials, ...topRowTestimonials];
  const allBottomTestimonials = [...bottomRowTestimonials, ...bottomRowTestimonials];

  return (
    <div className="w-full  flex items-center  text-white">
      <div className="max-w-full py-5 mt-0 max-md:mt-0 mb-20 mx-auto overflow-hidden">
        <div className="w-full flex items-center flex-col gap-1 justify-center mb-16 px-4">
          <p className="text-sm sm:text-lg font-semibold text-[#2E81CC]">Words That Matter</p>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-semibold">See Why Clients Keep Coming Back</h3>
        </div>
        
        <div className="flex flex-col gap-8">
          {/* Top row - reverse scroll */}
          <div className="relative overflow-hidden testimonial-mask">
            <div className="testimonial-scroll-reverse">
              {allTopTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`top-${index}`} {...testimonial} />
              ))}
            </div>
          </div>
          
          {/* Bottom row - forward scroll */}
          <div className="relative overflow-hidden testimonial-mask">
            <div className="testimonial-scroll">
              {allBottomTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`bottom-${index}`} {...testimonial} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
