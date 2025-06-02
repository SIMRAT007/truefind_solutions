import React, { useRef, useEffect } from "react";

const Pricing = () => {
  const pricingRef = useRef(null);

  // Add ID to the section for scroll-to functionality
  useEffect(() => {
    if (pricingRef.current) {
      pricingRef.current.id = "pricing";
    }
  }, []);

  return (
    <section
      ref={pricingRef}
      className="relative z-10 overflow-hidden bg-[#0E0E11] pb-12 pt-0 lg:pb-[90px] lg:pt-[50px] container mx-auto max-md:px-10 max-md:mt-40 px-10"
    >
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="inline-flex items-center gap-2 px-3 py-1 text-sm rounded-full text-[#2E81CC] bg-[#1a1a28] mb-4">
                <div className="w-2 h-2 bg-[#2E81CC] rounded-full"></div>
                PRICING PLANS
              </span>
              <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-[40px]">
                Choose Your Perfect Plan
              </h2>
              <div className="w-20 h-1 bg-[#2E81CC] rounded-full mx-auto mb-6"></div>
              <p className="text-base text-gray-400">
                Select the plan that best fits your needs. All plans include core
                features to help grow your business.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="-mx-4 flex flex-wrap">
            <PricingCard
              type="Basic"
              price="$59"
              subscription="month"
              description="Perfect for startups and small projects needing essential features."
              buttonText="Get Started"
            >
              <List>1 User</List>
              <List>All UI components</List>
              <List>Lifetime access</List>
              <List>Free updates</List>
              <List>Use on 1 (one) project</List>
              <List>3 Months support</List>
            </PricingCard>
            <PricingCard
              type="Professional"
              price="$199"
              subscription="month"
              description="Ideal for growing businesses requiring more advanced features."
              buttonText="Choose Pro"
              active
            >
              <List>5 Users</List>
              <List>All UI components</List>
              <List>Lifetime access</List>
              <List>Free updates</List>
              <List>Use on 3 (Three) projects</List>
              <List>6 Months priority support</List>
            </PricingCard>
            <PricingCard
              type="Enterprise"
              price="$499"
              subscription="month"
              description="Complete solution for large organizations with complex requirements."
              buttonText="Contact Sales"
            >
              <List>Unlimited Users</List>
              <List>All UI components</List>
              <List>Lifetime access</List>
              <List>Free updates</List>
              <List>Unlimited projects</List>
              <List>24/7 Premium support</List>
            </PricingCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

const PricingCard = ({
  children,
  description,
  price,
  type,
  subscription,
  buttonText,
  active,
}) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="relative z-10 mb-10 overflow-hidden rounded-xl border border-[#1a1a28] bg-[#0d0d14] px-8 py-10 shadow-lg hover:shadow-[0_0_20px_rgba(46,129,204,0.15)] transition-all duration-300 sm:p-12 lg:px-6 lg:py-10 xl:p-[50px]">
          <span className="mb-3 block text-lg font-semibold text-[#2E81CC]">
            {type}
          </span>
          <h2 className="mb-5 text-[42px] font-bold text-white">
            {price}
            <span className="text-base font-medium text-gray-400">
              / {subscription}
            </span>
          </h2>
          <p className="mb-8 border-b border-[#1a1a28] pb-8 text-base text-gray-400">
            {description}
          </p>
          <div className="mb-9 flex flex-col gap-[14px]">{children}</div>
          {/* <a
            href="/#"
            className={` ${
              active
                ? "block w-full rounded-md border border-[#2E81CC] bg-[#2E81CC] p-3 text-center text-base font-medium text-white transition hover:bg-[#2569a3]"
                : "block w-full rounded-md border border-[#1a1a28] bg-transparent p-3 text-center text-base font-medium text-[#2E81CC] transition hover:border-[#2E81CC] hover:bg-[#2E81CC] hover:text-white"
            } `}
          >
            {buttonText}
          </a> */}
          <div>
            <span className="absolute right-0 top-7 z-[-1]">
              <svg
                width={77}
                height={172}
                viewBox="0 0 77 172"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx={86} cy={86} r={86} fill="url(#paint0_linear)" />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1={86}
                    y1={0}
                    x2={86}
                    y2={172}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#2E81CC" stopOpacity="0.09" />
                    <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="absolute right-4 top-4 z-[-1]">
              <svg
                width={41}
                height={89}
                viewBox="0 0 41 89"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="38.9138"
                  cy="87.4849"
                  r="1.42021"
                  transform="rotate(180 38.9138 87.4849)"
                  fill="#2E81CC"
                />
                <circle
                  cx="38.9138"
                  cy="74.9871"
                  r="1.42021"
                  transform="rotate(180 38.9138 74.9871)"
                  fill="#2E81CC"
                />
                <circle
                  cx="38.9138"
                  cy="62.4892"
                  r="1.42021"
                  transform="rotate(180 38.9138 62.4892)"
                  fill="#2E81CC"
                />
                <circle
                  cx="38.9138"
                  cy="38.3457"
                  r="1.42021"
                  transform="rotate(180 38.9138 38.3457)"
                  fill="#2E81CC"
                />
                <circle
                  cx="38.9138"
                  cy="13.634"
                  r="1.42021"
                  transform="rotate(180 38.9138 13.634)"
                  fill="#2E81CC"
                />
                <circle
                  cx="38.9138"
                  cy="50.2754"
                  r="1.42021"
                  transform="rotate(180 38.9138 50.2754)"
                  fill="#2E81CC"
                />
                <circle
                  cx="38.9138"
                  cy="26.1319"
                  r="1.42021"
                  transform="rotate(180 38.9138 26.1319)"
                  fill="#2E81CC"
                />
                <circle
                  cx="38.9138"
                  cy="1.42021"
                  r="1.42021"
                  transform="rotate(180 38.9138 1.42021)"
                  fill="#2E81CC"
                />
                <circle
                  cx="26.4157"
                  cy="87.4849"
                  r="1.42021"
                  transform="rotate(180 26.4157 87.4849)"
                  fill="#2E81CC"
                />
                <circle
                  cx="26.4157"
                  cy="74.9871"
                  r="1.42021"
                  transform="rotate(180 26.4157 74.9871)"
                  fill="#2E81CC"
                />
                <circle
                  cx="26.4157"
                  cy="62.4892"
                  r="1.42021"
                  transform="rotate(180 26.4157 62.4892)"
                  fill="#2E81CC"
                />
                <circle
                  cx="26.4157"
                  cy="38.3457"
                  r="1.42021"
                  transform="rotate(180 26.4157 38.3457)"
                  fill="#2E81CC"
                />
                <circle
                  cx="26.4157"
                  cy="13.634"
                  r="1.42021"
                  transform="rotate(180 26.4157 13.634)"
                  fill="#2E81CC"
                />
                <circle
                  cx="26.4157"
                  cy="50.2754"
                  r="1.42021"
                  transform="rotate(180 26.4157 50.2754)"
                  fill="#2E81CC"
                />
                <circle
                  cx="26.4157"
                  cy="26.1319"
                  r="1.42021"
                  transform="rotate(180 26.4157 26.1319)"
                  fill="#2E81CC"
                />
                <circle
                  cx="26.4157"
                  cy="1.4202"
                  r="1.42021"
                  transform="rotate(180 26.4157 1.4202)"
                  fill="#2E81CC"
                />
                <circle
                  cx="13.9177"
                  cy="87.4849"
                  r="1.42021"
                  transform="rotate(180 13.9177 87.4849)"
                  fill="#2E81CC"
                />
                <circle
                  cx="13.9177"
                  cy="74.9871"
                  r="1.42021"
                  transform="rotate(180 13.9177 74.9871)"
                  fill="#2E81CC"
                />
                <circle
                  cx="13.9177"
                  cy="62.4892"
                  r="1.42021"
                  transform="rotate(180 13.9177 62.4892)"
                  fill="#2E81CC"
                />
                <circle
                  cx="13.9177"
                  cy="38.3457"
                  r="1.42021"
                  transform="rotate(180 13.9177 38.3457)"
                  fill="#2E81CC"
                />
                <circle
                  cx="13.9177"
                  cy="13.634"
                  r="1.42021"
                  transform="rotate(180 13.9177 13.634)"
                  fill="#2E81CC"
                />
                <circle
                  cx="13.9177"
                  cy="50.2754"
                  r="1.42021"
                  transform="rotate(180 13.9177 50.2754)"
                  fill="#2E81CC"
                />
                <circle
                  cx="13.9177"
                  cy="26.1319"
                  r="1.42021"
                  transform="rotate(180 13.9177 26.1319)"
                  fill="#2E81CC"
                />
                <circle
                  cx="13.9177"
                  cy="1.42019"
                  r="1.42021"
                  transform="rotate(180 13.9177 1.42019)"
                  fill="#2E81CC"
                />
                <circle
                  cx="1.41963"
                  cy="87.4849"
                  r="1.42021"
                  transform="rotate(180 1.41963 87.4849)"
                  fill="#2E81CC"
                />
                <circle
                  cx="1.41963"
                  cy="74.9871"
                  r="1.42021"
                  transform="rotate(180 1.41963 74.9871)"
                  fill="#2E81CC"
                />
                <circle
                  cx="1.41963"
                  cy="62.4892"
                  r="1.42021"
                  transform="rotate(180 1.41963 62.4892)"
                  fill="#2E81CC"
                />
                <circle
                  cx="1.41963"
                  cy="38.3457"
                  r="1.42021"
                  transform="rotate(180 1.41963 38.3457)"
                  fill="#2E81CC"
                />
                <circle
                  cx="1.41963"
                  cy="13.634"
                  r="1.42021"
                  transform="rotate(180 1.41963 13.634)"
                  fill="#2E81CC"
                />
                <circle
                  cx="1.41963"
                  cy="50.2754"
                  r="1.42021"
                  transform="rotate(180 1.41963 50.2754)"
                  fill="#2E81CC"
                />
                <circle
                  cx="1.41963"
                  cy="26.1319"
                  r="1.42021"
                  transform="rotate(180 1.41963 26.1319)"
                  fill="#2E81CC"
                />
                <circle
                  cx="1.41963"
                  cy="1.4202"
                  r="1.42021"
                  transform="rotate(180 1.41963 1.4202)"
                  fill="#2E81CC"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

const List = ({ children }) => {
  return (
    <p className="text-base text-white flex items-center">
      <span className="mr-2 text-[#2E81CC]">✓</span>
      {children}
    </p>
  );
};
