import { useState, useEffect } from 'react';

const values = [
  'Transparency', 'Innovation', 'Results-Driven', 'Client-Centric',
  'Integrity', 'Accountability', 'Collaboration', 'Excellence',
];

const valueDetails = {
  'Transparency': 'We believe in being open and honest with our clients. We clearly communicate our processes, pricing, and timelines, ensuring you always know what to expect.',
  'Innovation': 'We continuously explore cutting-edge technologies and methodologies to deliver the most effective solutions for your business challenges.',
  'Results-Driven': 'Our focus is always on delivering measurable outcomes that positively impact your business performance and growth objectives.',
  'Client-Centric': 'Your needs are at the center of everything we do. We listen carefully to your requirements and tailor our solutions specifically to your business goals.',
  'Integrity': 'We adhere to the highest ethical standards in all our business practices, fostering trust and long-term relationships with our clients.',
  'Accountability': 'We take ownership of our work and stand behind our solutions, being responsible for the outcomes and continuously improving our services.',
  'Collaboration': 'We work closely with you as partners, ensuring that our combined expertise leads to the best possible results for your business.',
  'Excellence': 'We are committed to delivering superior quality in everything we do, consistently exceeding expectations and setting new standards in the industry.'
};

export default function ValuesSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  // Prevent background scrolling when dialog is open
  useEffect(() => {
    if (isDialogOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isDialogOpen]);

  return (
    <div className="text-white px-6 md:px-10 py-16 max-md:py-0 max-md:mb-20 flex flex-col lg:flex-row items-center justify-between gap-16 container mx-auto max-md:mt-20">
      {/* Left Section */}
      <div className="flex-1">
        <div className="mb-6">
          <span className="px-4 py-2 text-sm font-semibold bg-[#2E81CC]/20 text-[#2E81CC] rounded-full inline-flex items-center">
            <div className="w-3 h-3 bg-[#2E81CC] rounded-full animate-pulse mr-2"></div>
            Why Choose Us?
          </span>
        </div>
        <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Principles that drive<br />performance
        </h2>
        <p className="text-gray-300 text-lg mb-10 max-w-lg leading-relaxed">
          Empowering brands with innovative designs and tailored strategies to thrive and grow in the ever-evolving digital landscape.
        </p>

        {/* Grid Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-base md:text-lg text-gray-200">
          {values.map((val, index) => (
            <div key={index} className="flex items-center p-4 bg-[#252530]/50 rounded-xl transition-all duration-300 hover:bg-[#2E81CC]/10 hover:shadow-lg hover:transform hover:-translate-y-1">
              <span className="text-[#2E81CC] mr-3 text-xl">✔</span>
              <span className="font-medium">{val}</span>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="mt-8 flex justify-center sm:justify-start">
          <button 
            onClick={() => setIsDialogOpen(true)}
            className="px-6 py-3 bg-gradient-to-r from-[#2E81CC] to-[#1a5c9a] rounded-full text-white font-medium hover:shadow-lg hover:shadow-[#2E81CC]/20 transition-all flex items-center gap-1"
          >
            Learn More About Our Values <span className="ml-1">→</span>
          </button>
        </div>
      </div>

      {/* Right Section - Square image with abstracts around it */}
      <div className="flex-1 relative flex justify-center items-center mt-20">
        {/* Abstract elements positioned around the image */}
        <div className="absolute -top-8 -right-4 w-16 h-16 border-2 border-[#2E81CC] rounded-full opacity-50 z-20"></div>
        <div className="absolute -bottom-8 -left-4 w-14 h-14 border-2 border-dashed border-cyan-400 rounded-full opacity-60 z-20"></div>
        
        {/* Lines positioned around image */}
        <div className="absolute -top-12 right-1/3 w-28 h-1.5 bg-gradient-to-r from-[#2E81CC] to-transparent rounded-full transform rotate-45 opacity-60 z-20"></div>
        <div className="absolute -bottom-12 left-1/3 w-28 h-1.5 bg-gradient-to-l from-purple-400 to-transparent rounded-full transform -rotate-45 opacity-60 z-20"></div>
        
        {/* Geometric elements */}
        <div className="absolute -right-6 top-1/3 w-10 h-10 border-2 border-teal-300 transform rotate-45 opacity-50 z-20"></div>
        <div className="absolute -left-6 bottom-1/3 w-8 h-8 bg-gradient-to-br from-[#2E81CC] to-blue-500 rounded-sm opacity-40 transform rotate-12 z-20"></div>
        
        {/* Dotted elements */}
        {/* <div className="absolute -top-6 left-1/4 flex space-x-1.5 z-20">
          <div className="w-1.5 h-1.5 bg-white rounded-full opacity-80"></div>
          <div className="w-1.5 h-1.5 bg-white rounded-full opacity-80"></div>
          <div className="w-1.5 h-1.5 bg-white rounded-full opacity-80"></div>
        </div> */}
        
        {/* Square Image Container */}
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] overflow-hidden rounded-2xl shadow-xl border-4 border-[#252530] z-10">
          <img
            src="https://www.cultureworkshr.com/wp-content/uploads/2022/09/iStock-1134456412-1030x687.jpg"
            alt="Team working"
            className="w-full h-full object-cover transform hover:scale-[1.02] transition-transform duration-500"
          />
          
          {/* Gradient opacity overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/50 rounded-xl"></div>
          
          {/* Corner Decorations */}
          <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-[#2E81CC] rounded-full shadow-lg z-30"></div>
          <div className="absolute -top-3 -left-3 w-8 h-8 border-2 border-cyan-400 rounded-full opacity-80 z-30"></div>
        </div>
        
        {/* About Us Button */}
        {/* <button 
          onClick={() => setIsDialogOpen(true)}
          className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-gradient-to-r from-[#2E81CC] to-[#1a5c9a] rounded-full text-white font-medium hover:shadow-lg hover:shadow-[#2E81CC]/20 transition-all flex items-center gap-1 cursor-pointer"
        >
          About Our Company <span className="ml-1">→</span>
        </button>
         */}
        {/* Curved Line SVG */}
        <svg className="absolute -bottom-10 right-1/4 w-24 h-24 opacity-50 z-20" viewBox="0 0 100 100">
          <path d="M10,50 Q50,10 90,50" stroke="#2E81CC" strokeWidth="2" fill="none" />
        </svg>
      </div>

      {/* Company Info Dialog */}
      {isDialogOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div 
            className="bg-gradient-to-b from-[#252530] to-[#1a1a1f] rounded-3xl p-10 max-w-4xl w-full relative text-left shadow-2xl max-h-[90vh] overflow-y-auto"
            style={{boxShadow: "0 0 40px rgba(46, 129, 204, 0.15)"}}
          >
            <button
              className="absolute top-6 right-6 text-white text-xl bg-white/10 w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
              onClick={() => setIsDialogOpen(false)}
            >
              ✕
            </button>
            
            <h2 className="text-3xl font-bold mb-3">About Truefind Solutions</h2>
            <div className="w-full h-1 bg-gradient-to-r from-[#2E81CC] to-transparent mb-8 rounded-full" />
            
            <div className="space-y-6 text-gray-300">
              <p>
                Truefind Solutions understands that any organisation's use of technology is inter-reliant.
                From your laptops and desktops, via your network and server and through to your telephony and Internet connection, all are linked and a problem in one can quickly affect the others.
              </p>
              
              <p>
                That is why we have designed our services to ensure that when you deal with Truefind Solutions you know that one call to us will solve your technology problems without the need to go chasing multiple suppliers.
              </p>
              
              <h3 className="text-xl font-bold text-white mt-8 mb-2">Offering the Complete Technology Service</h3>
              <p>
                Our services can be customised to meet any organisation's technology requirements. From offering a total outsourcing service, where we effectively act as your IT department, through to providing highly specialised skills to help with a discrete project or task, Truefind Solutions can help.
              </p>
              
              <p>
                By being a managed service provider we can hand-hold your organisation at every step. From initial technology selection, through to configuration, setup and installation and finally looking after the necessary ongoing support. Such an approach leaves you free to get on with running your business, whilst we take care of all your technology requirements.
              </p>
              
              <h3 className="text-xl font-bold text-white mt-8 mb-2">Personalised Support Service</h3>
              <p>
                When you partner with Truefind Solutions for your technology support, we guarantee that you will always speak to a person when you ring up with a problem. We do not believe in providing self-service DIY Web portals as we know that you want us to deal with the problem for you, not have to do-it-yourself.
              </p>
              
              <p>
                Our highly skilled and accredited staff will take your call and resolve your problem in line with your Service Level Agreement, ensuring minimum down time and loss of productivity.
              </p>
              
              <h3 className="text-xl font-bold text-white mt-8 mb-2">Accreditations</h3>
              <p>
                We have partnered with the leading technology companies so that we can offer our customers cost-effective and leading edge solutions that are designed to match their budget and any existing internal resource.
              </p>
              
              <p>
                The stringent requirements that we have to meet to obtain these accreditations are your guarantee that our staff are fully trained and accredited to exacting standards.
              </p>
              
              <h3 className="text-xl font-bold text-white mt-8 mb-2">Our Staff</h3>
              <p>
                We know that our staff are our greatest asset. That is why we employ trained and accredited professionals who know how to implement the solutions and services we provide in real world situations. Importantly, they must be able to explain highly technical solutions in a non-technical way.
              </p>
              
              <p>
                Their continued development is key to our success and we ensure that every member of our team has a personal development plan that includes regular training and accreditation. This enables them to achieve internationally recognised certifications like Microsoft MCSE/MCITP, Cisco CCNA, Citrix CCA, VM Ware VCP, Hewlet Packard ASE and others to deliver the high level of service on which our customers depend.
              </p>
            </div>
            
            <div className="mt-8 flex justify-end">
              <button
                onClick={() => setIsDialogOpen(false)}
                className="px-6 py-3 bg-gradient-to-r from-[#2E81CC] to-[#1a5c9a] rounded-full text-white font-medium hover:shadow-lg hover:shadow-[#2E81CC]/20 transition-all cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
