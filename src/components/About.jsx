import React, { useState, useEffect } from "react";
import AboutUsVideo from "../assets/about.mp4"; // Local video file

const AboutUs = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Prevent background scrolling when dialog is open
  useEffect(() => {
    if (isDialogOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isDialogOpen]);

  return (
    <section className="text-white px-4 py-8 md:px-16 lg:px-32" id="about">
      {/* Tag */}
      <div className="inline-flex items-center bg-[#1a1a28] text-gray-500 text-sm font-semibold px-4 py-1 rounded-full mb-6">
        <span className="w-3 h-3 bg-[#2E81CC] rounded-full mr-2 animate-pulse"></span>
        ABOUT US
      </div>

      {/* Headline */}
      <h2 className="text-3xl md:text-4xl lg:text-7xl font-bold leading-tight mb-10 max-w-5xl">
        We are an experienced Managed IT services provider delivering comprehensive
        technical solutions to small and medium businesses
      </h2>

      {/* Content Block */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10">
        {/* Video */}
        <div className="w-full lg:w-1/2">
          <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-64 rounded-lg overflow-hidden">
            <video
              src={AboutUsVideo}
              autoPlay
              muted
              loop
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Description */}
        <div className="w-full lg:w-1/2 text-gray-300 text-lg md:border-l-4 border-[#2E81CC] pl-6 max-md:text-center max-md:pl-0">
          <p>
            Our portfolio ranges from providing specialist help to your in-house IT
            team through to the total outsourcing of your IT support and all related
            technology requirements.
            <br />
            <br />
            Based in Tri-city we offer a personal, hands-on and consultative approach
            that enables organisations to maximise the return on their IT investment
            and lets them get on with running their business, assured in the knowledge
            that we are looking after all their IT needs.
            <br />
            <br />
            Such an approach has enabled us to build long-term relationships with our
            customers and has underpinned our success and continuous growth.
          </p>

          {/* See More Button */}
          <div className="mt-6 flex justify-center lg:justify-start">
            <button
              onClick={() => setIsDialogOpen(true)}
              className="px-6 py-3 bg-gradient-to-r from-[#2E81CC] to-[#1a5c9a] rounded-full text-white font-medium hover:shadow-lg hover:shadow-[#2E81CC]/20 transition-all flex items-center gap-1 cursor-pointer"
            >
              Learn More About Us <span className="ml-1">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Dialog Box */}
      {isDialogOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div
            className="bg-gradient-to-b from-[#252530] to-[#1a1a1f] rounded-3xl p-10 max-w-4xl w-full relative text-left shadow-2xl max-h-[90vh] overflow-y-auto"
            style={{ boxShadow: "0 0 40px rgba(46, 129, 204, 0.15)" }}
          >
            <button
              className="absolute top-6 right-6 text-white text-xl bg-white/10 w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
              onClick={() => setIsDialogOpen(false)}
            >
              ✕
            </button>

            <h2 className="text-3xl font-bold mb-3">Welcome to TrueFind Solutions</h2>
            <div className="w-full h-1 bg-gradient-to-r from-[#2E81CC] to-transparent mb-8 rounded-full" />

            <div className="space-y-6 text-gray-300">
              <p>
                Truefind Solutions is a well established and experienced Managed IT services provider offering comprehensive technical support and service facilities to a range of small to medium companies.
              </p>

              <p>
                Our portfolio ranges from providing specialist help to your in-house IT team through to the total outsourcing of your IT support and all related technology requirements.
              </p>

              <p>
                Based in Tri-city we offer a personal, hands-on and consultative approach that enables organisations to maximise the return on their IT investment and lets them get on with running their business, assured in the knowledge that we are looking after all their IT needs.
              </p>

              <p>
                Such an approach has enabled us to build long-term relationships with our customers and has underpinned our success and continuous growth.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-2">Our Approach</h3>
              <p>
                Truefind Solution believes that Technology is the enabler that allows businesses to grow and be successful.
              </p>

              <p>
                Technology provides the means to this end; it is not the end itself. This philosophy underpins our approach and permeates everything we do.
              </p>

              <p>
                As a Managed Services Provider we aim to add value to your hardware and software by demystifying technology. Whether that is through configuration, setup, connection to your network, ongoing support or any other advice and skills we can provide. This enables you to get on with running your business, safe in the knowledge that your IT investment will support you both now and in the future.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-2">Consultative Approach</h3>
              <p>
                We offer a personal, hands-on and consultative approach. By analysing your current situation and understanding where you want your business to be in the next few years we will be able to offer you a number of solutions that involve you in the final decision, rather than having it presented as a fait accompli.
              </p>

              <p>
                We take into account a number of factors in our final recommendations, including:
              </p>

              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Your budget</li>
                <li>Existing internal IT expertise</li>
                <li>Expected growth of your company</li>
                <li>Your culture</li>
              </ul>

              <p>
                This ensures that our proposed solutions are always aligned to the goals of your business.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-2">Unlocking The Value In Your Technology Investment</h3>
              <p>
                Truefind Solution services enable small and medium-sized organisations to enjoy the benefits of technology that are normally only available to larger organisations. Our skills and expertise offer a cost-effective way of unlocking the value in your hardware and software investment and ensure that you get the maximum return on your investment.
              </p>

              <p>
                But don't just take our word for it. Have a look at our case studies to see how our approach has helped many different types of organisation.
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
    </section>
  );
};

export default AboutUs;
