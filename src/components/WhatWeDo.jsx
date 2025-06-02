import { useState, useEffect } from "react";

const services = [
	{
		title: "IT Support",
		description:
			"Our technical team provides secure remote support for your desktops, laptops, servers, and mobile devices using LogMeIn software with end-to-end AES 256-bit encryption, ensuring all remote sessions are safe and secure.",
		fullDescription:
			"When our technical team use remote session support and access your desktops, laptops, servers and mobile devices we use the worlds leading safe and secure LogMeIn software technology. The architecture behind LogMeIn Rescue is built with scalability, security, reliability and ease-of-use in mind. All LogMeIn Rescue support sessions are protected with end-to-end AES 256-bit encryption. Your users must give permission for support operations before the technician can perform them. LogMeIn Rescue stores support session logs in a database to be queried later and administrators can record remote control sessions to a video file. LogMeIn Rescue is hosted in three carrier-grade datacenters with a fully redundant infrastructure. You can be certain that all remote support sessions are safe and secure.",
	},
	{
		title: "Hosting Solutions",
		description:
			"We offer cloud-based virtual desktops and MS Exchange email hosting, allowing your business to access Windows environments and communications from anywhere while reducing hardware costs and maintenance concerns.",
		fullDescription:
			"Hosted Desktops Cloud Hosting for Business\nCloud based virtual desktops: hosted, supported and managed by TrueFind Solutions.\nOur Hosted Managed Desktop service is a cheaper and simpler alternative to owning and managing your own business IT network.\n\nDesktop users still have the same functionality and Windows environment they are used to and the same Microsoft Office programs and specialist applications. But instead of keeping their software and data on a PC or locally based server, we host it in a secure data centre.\n\nUsers access their personal desktop through the internet (or 'cloud'). It's encrypted so it's secure but authorised users can work from anywhere with an internet connection, making them much more mobile.\n\nYour business can stop investing in expensive hardware. You won't need a server and old PCs and laptops gain a new lease of life once all their software is stripped out and held in the cloud. Alternatively we can supply you with specialist 'Thin Clients' which resemble PCs but are less expensive, more robust and consume 50% less energy.\n\nYou will no longer have to worry about routine IT administration, support, security or maintenance. We will do it all for you in return for a fixed monthly fee. Upgrades and patches are all deployed automatically, and we take over responsibility for software licensing, including updates to the latest versions. New users can be added or removed at short notice.\n\nWhen you need help, we resolve problems quickly: over 90% are resolved within 10 minutes.\n\nThe overall result: you save money, time and trouble. Your data security is enhanced. And your workforce becomes more mobile and productive.\n\nHosted eMail MS Exchange Cloud Hosting for Business\nCloud based virtual desktops: hosted, supported and managed by TrueFind Solutions.\nOur Hosted Managed Exchange gives your business immediate access to feature-rich, Enterprise Class e-mail without incurring any infrastructure costs. And we will support, manage and protect it, giving you the resilience you need in such a business-critical function.\n\nThe e-mail user experience is identical to having Microsoft Exchange on your own server, with all the enhanced features and 'connect-anywhere' mobility of the latest version of Microsoft Outlook 2010, Microsoft Outlook Web Access and Microsoft Outlook Mobile Access which are all included free.\n\nBut because the Exchange server service is hosted in our secure data centre, you don't have to buy any expensive infrastructure. Instead you take whatever services email services you want through the internet (or' cloud') when you want them, in return for a low monthly fee.\n\nWe look after everything, from initial migration to adding or removing users and guarding against threats and viruses. If you need anything, you simply contact our expert support teams.\n\nYour employees can access their Outlook e-mail, address book, calendars and public folders from anywhere with an internet connection - whether at home, in the office, on the move or abroad. We offer full integration with iPhone, Windows Mobile and BlackBerry, so each e-mail account retains one inbox across all devices.\n\nSecurity and reliability are increased because all data is held securely on our Virtual Blade/SAN infrastructure and anti virus and anti-spam protection comes as standard.\n\nThe result: reliable, feature-rich, problem-free email which you can access from anywhere.",
	},
	{
		title: "Security Solutions",
		description:
			"We provide and support Sophos protection software to safeguard your business with anti-virus, anti-spam, and anti-spyware/malware protection for desktops, laptops, servers, and mobile devices.",
		fullDescription:
			"Truefind Solutions will provide anti virus software and monitor virus scans to ensure maximum security. We can supply and support Sophos protection software to safeguard desktops laptops, servers and mobile devices. Sophos from Truefind Solutions gives your business anti-virus, anti-spam, and anti-spyware/malware protection. We believe Sophos provides greater protection than rival software from McAfee or Symantec. And we are not alone. Sophos is consistently voted the industry's leading security software. Cutting edge technology allows Sophos to update their deployed software within 5 minutes. So once installed on your network, you're protected from future threats as well as current ones. We recommend Sophos Security Suite because it provides one-stop protection against viruses, spam, spyware/malware, hacking and phishing attempts and blocks confidential or inappropriate content in emails. This makes it quicker to install and easier to administer, minimises hardware load (so desktop and laptop users won't notice any loss of performance) and ensures there are no gaps in the security shield. Sophos protects Windows, Linux and Mac operating systems, making sure there are no weakpoints. Servers, desktops, laptops and mobile devices are all covered with unified reporting so you can see at a glance where any threats are. And because Sophos is fully supported by Truefind Solutions, we can install and maintain it on your behalf.",
	},
	{
		title: "Digital Marketing",
		description:
			"Our comprehensive SEO services boost your online presence through organic social media, paid advertising, email marketing, content creation, and website analytics to help your business grow faster than competitors.",
		fullDescription:
			"SEO service: Truefind Solutions also provide service in Search Engine Optimization. Finding the right SEO service for your business has never been harder or more important. Email and website availability are becoming business-critical functions. Recent innovations like Cloud Computing and VOIP bring huge benefits but increase your company's dependence on its connectivity. When it comes to digital marketing tools, SEO is where most of us need some major help. With so many tools available and several moving pieces of our search engine presence, finding the right fit is easier said than done. In short you either need to find an expert or talk to someone who is. Otherwise you risk your business suffer by letting your equivalent businesses grow faster when what you really needed was to have your e-commerce business and/or website have more presence. We are not beholden to anyone except our clients, and once we've found out what your business needs, we can almost certainly provide it at a very competitive cost. We can explain the SEO services such as Organic Social Media, Paid Social Media, Email Marketing, Display Retargeting, Programmatic Advertising, Website Testing, Video Hosting, Content Creation, Content Curation, Website Analytics, Search Engine Optimization, Affiliate Marketing. Thankfully, there are a myriad of tools out there to help simplify the ever-complicated world of SEO. And our service doesn't stop there. We will manage services for you, from configuring, testing and connecting. Afterwards we can monitor and support the service, ensuring you stay connected.",
	},
];

export default function WhatWeDoSection() {
	const [openIndex, setOpenIndex] = useState(null);
	const [modalContent, setModalContent] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const toggleIndex = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	const isOpen = (index) => openIndex === index;

	// Handle modal open
	const openModal = (content, title) => {
		setModalContent({ content, title });
		setIsModalOpen(true);
		// Disable scrolling when modal is open
		document.body.style.overflow = "hidden";
	};

	// Handle modal close
	const closeModal = () => {
		setIsModalOpen(false);
		setModalContent(null);
		// Re-enable scrolling
		document.body.style.overflow = "auto";
	};

	// Clean up function to ensure scroll is re-enabled if component unmounts
	useEffect(() => {
		return () => {
			document.body.style.overflow = "auto";
		};
	}, []);

	return (
		<div className="my-40 max-md:my-10 bg-[#0d0d10] text-white flex flex-col lg:flex-row items-center justify-center max-md:px-10 gap-10 container mx-auto max-md:mt-40">
			{/* Left: Image */}
			<div className="relative w-full lg:w-1/2 flex justify-center items-center py-10">
				{/* Repositioned Abstract Elements - Clearly visible around the image */}
				<div className="absolute -top-8 -right-4 md:top-0 md:-right-10 w-20 h-20 border-2 border-[#2E81CC] rounded-full opacity-40 z-20"></div>
				<div className="absolute -bottom-8 -left-4 md:bottom-0 md:-left-10 w-16 h-16 border-2 border-dashed border-cyan-400 rounded-full opacity-50 z-20"></div>

				{/* Lines positioned around image */}
				<div className="absolute -top-12 right-1/3 w-32 h-1.5 bg-gradient-to-r from-fuchsia-400 to-transparent rounded-full transform rotate-45 opacity-50 z-20"></div>
				<div className="absolute -bottom-12 left-1/3 w-32 h-1.5 bg-gradient-to-l from-amber-400 to-transparent rounded-full transform -rotate-45 opacity-50 z-20"></div>

				{/* Geometric Shapes outside image boundaries */}
				<div className="absolute -right-6 top-1/3 w-10 h-10 border-2 border-emerald-400 transform rotate-45 opacity-40 z-20"></div>
				<div className="absolute -left-6 bottom-1/3 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-sm opacity-30 transform rotate-12 z-20"></div>

				{/* Dotted Elements */}
				<div className="absolute -top-10 -left-4 flex space-x-1 z-20">
					<div className="w-1.5 h-1.5 bg-white rounded-full opacity-80"></div>
					<div className="w-1.5 h-1.5 bg-white rounded-full opacity-80"></div>
					<div className="w-1.5 h-1.5 bg-white rounded-full opacity-80"></div>
				</div>

				{/* Blur Light Effect - Centered behind image */}
				<div
					className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[450px] lg:w-[550px] lg:h-[550px] rounded-full"
					style={{
						background:
							"radial-gradient(ellipse at center, rgba(46, 129, 204, 0.7), rgba(46, 129, 204, 0))",
						filter: "blur(50px)",
						zIndex: 0,
					}}
				></div>

				{/* Square Image Container */}
				<div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] overflow-hidden rounded-2xl shadow-2xl border-4 border-[#1a1a28] z-10">
					<img
						src="https://images.pexels.com/photos/840996/pexels-photo-840996.jpeg?auto=compress&cs=tinysrgb&w=1200"
						alt="What We Do"
						className="w-full h-full object-cover"
					/>

					{/* Image Overlay */}
					<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-90"></div>

					{/* Corner Decoration - On top of image corners */}
					<div className="absolute -bottom-4 -right-4 w-12 h-12 bg-[#2E81CC] rounded-full shadow-lg z-20"></div>
					<div className="absolute -top-4 -left-4 w-10 h-10 border-2 border-cyan-400 rounded-full opacity-80 z-20"></div>
				</div>

				{/* Curved Line SVG - Positioned clearly */}
				<svg
					className="absolute -bottom-16 left-1/4 w-28 h-28 opacity-40 z-20"
					viewBox="0 0 100 100"
				>
					<path
						d="M10,50 Q50,10 90,50"
						stroke="#60a5fa"
						strokeWidth="2"
						fill="none"
					/>
				</svg>
			</div>

			{/* Right: Services */}
			<div className="w-full lg:w-1/2 max-md:mt-10">
				<div className="inline-flex items-center gap-2 px-3 py-1 text-sm rounded-full text-gray-500 mb-10 bg-[#1a1a28]">
					<div className="w-3 h-3 bg-[#2E81CC] rounded-full animate-pulse"></div>
					WHAT WE DO
				</div>
				{services.map((service, idx) => (
					<div key={idx} className="mb-4 border-b border-gray-700 pb-4">
						<button
							className="flex items-center justify-between w-full text-left text-4xl font-semibold transition-all duration-300"
							onClick={() => toggleIndex(idx)}
						>
							{service.title}
							<span
								className={`text-3xl font-bold transform transition-transform duration-300 ${
									isOpen(idx) ? "rotate-180" : "rotate-0"
								}`}
							>
								{isOpen(idx) ? "−" : "+"}
							</span>
						</button>
						<div
							className={`overflow-hidden transition-all duration-300 ${
								isOpen(idx)
									? "max-h-40 opacity-100"
									: "max-h-0 opacity-0"
							}`}
						>
							<p className="text-gray-400 mt-2 text-base">
								{service.description}
								<button
									onClick={(e) => {
										e.stopPropagation();
										openModal(service.fullDescription, service.title);
									}}
									className="ml-2 text-[#2E81CC] hover:text-[#1d5fa3] font-medium transition-colors"
								>
									See more
								</button>
							</p>
						</div>
					</div>
				))}
			</div>

			{/* Modal Dialog */}
			{isModalOpen && (
				<div className="fixed inset-0 z-50 flex items-center justify-center p-4">
					{/* Background Overlay with Blur */}
					<div
						className="absolute inset-0 bg-black/70 backdrop-blur-sm"
						onClick={closeModal}
					></div>

					{/* Modal Content */}
					<div className="relative bg-[#1a1a28] rounded-xl shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto z-50">
						<div className="sticky top-0 bg-[#1a1a28] p-5 border-b border-gray-700 flex justify-between items-center">
							<h3 className="text-2xl font-bold text-white">
								{modalContent?.title}
							</h3>
							<button
								onClick={closeModal}
								className="text-gray-400 hover:text-white transition-colors text-2xl"
							>
								&times;
							</button>
						</div>
						<div className="p-5">
							<p className="text-gray-300 leading-relaxed">
								{modalContent?.content}
							</p>
						</div>
						<div className="sticky bottom-0 bg-[#1a1a28] p-5 border-t border-gray-700 flex justify-end">
							<button
								onClick={closeModal}
								className="px-4 py-2 bg-[#2E81CC] hover:bg-[#1d5fa3] text-white rounded-lg transition-colors"
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
