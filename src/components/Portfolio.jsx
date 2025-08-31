import React from "react";
import { useEffect, useRef } from "react";

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.0.3",
      link: "https://example.com/project1"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3",
      link: "https://example.com/project2"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3",
      link: "https://example.com/project3"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=2366&auto=format&fit=crop&ixlib=rb-4.0.3",
      link: "https://example.com/project4"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3",
      link: "https://example.com/project5"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2372&auto=format&fit=crop&ixlib=rb-4.0.3",
      link: "https://example.com/project6"
    },
  ];

  const scrollRef = useRef(null);
  
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const autoScroll = setInterval(() => {
        scrollContainer.scrollLeft += 1;
        
        // Reset scroll position when it reaches the end
        if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth - scrollContainer.clientWidth)) {
          scrollContainer.scrollLeft = 0;
        }
      }, 20);
      
      return () => clearInterval(autoScroll);
    }
  }, []);

  return (
  <section className="bg-white text-black px-4 py-16 md:px-16 lg:px-32 overflow-hidden" id="portfolio">
      {/* Tag */}
      <div className="inline-flex items-center bg-[#e6f0fa] text-[#2E81CC] text-sm font-semibold px-4 py-1 rounded-full mb-6">
        <span className="w-3 h-3 bg-[#2E81CC] rounded-full mr-2 animate-pulse"></span>
        PORTFOLIO
      </div>

      {/* Headline */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-10 max-w-5xl text-black">
        Creative projects that speak for themselves
      </h2>

      {/* Auto-scrolling image gallery */}
      <div 
        ref={scrollRef} 
        className="flex gap-4 overflow-x-auto pb-6 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {portfolioItems.map((item) => (
          <a 
            key={item.id} 
            href={item.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="min-w-[300px] h-[200px] md:min-w-[450px] md:h-[300px] lg:min-w-[600px] lg:h-[400px] xl:min-w-[800px] xl:h-[500px] relative overflow-hidden rounded-lg group"
          >
            <img 
              src={item.image} 
              alt={`Portfolio item ${item.id}`} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-[#2E81CC] flex items-center justify-center">
                <span className="text-white text-2xl md:text-3xl lg:text-4xl">→</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
