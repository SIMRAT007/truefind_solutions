import { useState, useEffect, useRef } from "react";
import serviceimg1 from "../assets/serviceimg1.webp"; 
import serviceimg2 from "../assets/serviceimg2.webp"; 
import serviceimg3 from "../assets/serviceimg3.webp"; 

const services = [
	{
		title: "IT Audits",
		description:
			"Comprehensive IT audits and asset inventory to ensure your infrastructure meets your evolving business requirements",
		icon: serviceimg1,
		details:
			"IT Audits & Asset inventory for businesses\n\nYour business doesn't stand still and nor does the IT infrastructure on which it relies. You should therefore regularly check whether this IT infrastructure still meets your requirements and what alternatives might exist.\n\nOur free* IT audit service gives you free* expert advice on:\n\n• What hardware you already have\n• How it's set up\n• How your systems are structured\n• System Security & Vunerability\n• How well it's performing\n• Any user issues\n• Any limitations & restrictions\n• Comprehensive & Detailed Report\n• How it can be improved\n\nWe will give you a full report including a network diagram detailing your users, PCs, laptops and servers; your connectivity and network set-up; and your back-up.\n\nThe audit includes a full asset inventory. We will also recommend how to resolve any existing problems and how to improve the efficiency and capacity of your systems.\n\nOne of our Senior Technical Consultants will also offer to meet with you to explain our findings and answer any questions you may have."
	},
	{
		title: "Hardware Supply",
		description:
			"Complete hardware support for IT systems from all leading manufacturers with competitive pricing and expert configuration",
		icon: serviceimg2,
		details:
			"Hardware Supply\n\nComplete hardware support for IT systems. For a complete IT technical service Truefind Solutions are a No1 IT solution provider.\n\nWe can provide your business with the IT hardware it needs, even if you don't know what that is yet.\n\nIf you just want a very competitive quote for hardware, that's what we will provide in double quick time. But if you want, we can also advise on what will best answer your requirements and help to specify it for you. Then we can build, configure, test, install, and connect it as well, so everything is set up and ready.\n\nWe supply hardware from all the leading manufacturers including Dell, IBM, Fujitsu, Sun, Apple, Cisco, Intel, EMC, Equalogic and Netgear.\n\nAfterwards, you'll benefit from the free aftersales support we provide for all hardware we supply. We log warranty calls with manufacturers on your behalf and arrange for repair or swap-outs as soon as possible. You can also opt for more extensive support covering all your IT infrastructure by choosing one of our IT support contracts."
	},
	{
		title: "Office Move Service",
		description:
			"Complete project management of office relocations and IT equipment moves with minimal disruption to your business",
		icon: serviceimg3,
		details:
			"Office Move Service\n\nIT Support For Small To Mid-Sized businesses. IT help Desk and service desk for all your office technical queries. Complete project management of office moves and IT relocation.\n\nIf you're moving premises or changing office layouts, Truefind Solutions can project manage the whole process. We take care of everything – from IT equipment to furniture – and we arrange everything, from initial planning and site assessment to final re-installation and testing.\n\nWe're fully-insured and use qualified electricians and technical staff. We can organise moves that take place inside or outside of normal working hours. And if required we can carry out ancillary tasks such as Server Room Builds and cabling, offering you a seamless service.\n\nNormally a move will be broken down into five phases:\n\n1. Planning & Project Management\n2. Co-ordination of 3rd party suppliers (eg your telecoms provider)\n3. Decommissioning & Breakdown\n4. Packing and Transport\n5. Re-installation & Commissioning\n\nWe use the same team of skilled engineers for both decommissioning and reinstallation. Central to the whole process is a clear documented plan which we prepare and which alerts everyone to the critical deadlines involved."
	}
];

export default function ServicesSection() {
	const [activeService, setActiveService] = useState(null);
	const [viewAllOpen, setViewAllOpen] = useState(false); // New state for view all modal
	const servicesRef = useRef(null);

	// Update effect to prevent background scrolling when either modal is open
	useEffect(() => {
		if (activeService || viewAllOpen) {
			// Disable scrolling on body
			document.body.style.overflow = 'hidden';
		} else {
			// Re-enable scrolling when modal is closed
			document.body.style.overflow = 'auto';
		}

		// Cleanup function to ensure scrolling is re-enabled when component unmounts
		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [activeService, viewAllOpen]);

	// Add ID to the section for scroll-to functionality
	useEffect(() => {
		if (servicesRef.current) {
			servicesRef.current.id = "services";
		}
	}, []);

	return (
		<div ref={servicesRef} className="text-black px-6 py-5 container mx-auto bg-white">
			{/* Top Section */}
			<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
				<div>
					   <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 text-sm rounded-full text-[#2E81CC] mb-6 bg-[#e6f0fa]">
						<div className="w-3 h-3 bg-[#2E81CC] rounded-full animate-pulse"></div>
						IT SERVICES
					</div>
					   <h1 className="text-5xl md:text-6xl font-bold leading-tight text-black">
						Complete IT solutions for <br /> your business
					</h1>
				</div>
				<button 
					onClick={() => setViewAllOpen(true)}
					className="mt-6 md:mt-0 px-6 py-3 bg-gradient-to-r from-[#2E81CC] to-[#1a5c9a] rounded-full text-white font-medium hover:shadow-lg hover:shadow-[#2E81CC]/20 transition-all flex items-center gap-1"
				>
					View All Services <span className="ml-1">→</span>
				</button>
			</div>

			{/* Cards */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{services.map((service, index) => (
					<div
						key={index}
						className="bg-white border border-gray-200 rounded-3xl p-8 text-center hover:shadow-2xl hover:shadow-[#2E81CC]/10 transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col justify-between text-black"
					>
						<div className="bg-[#e6f0fa] rounded-2xl p-6 mb-6 mx-auto w-48 h-48 flex items-center justify-center">
							<img
								src={service.icon}
								alt={service.title}
								className="w-36 h-36 transition-transform duration-500 hover:scale-110"
							/>
						</div>
						<div>
							  <h2 className="text-2xl font-bold mb-4 text-black">{service.title}</h2>
							  <p className="text-black mb-6 min-h-[80px]">
								{service.description}
							</p>
							<button
								onClick={() => setActiveService(service)}
								className="px-6 py-2 bg-gradient-to-r from-[#2E81CC] to-[#1a5c9a] rounded-full text-white font-medium transition-all hover:shadow-lg hover:shadow-[#2E81CC]/30 cursor-pointer"
							>
								Learn More
							</button>
						</div>
					</div>
				))}
			</div>

			{/* Modal - Enhanced with more attractive styling */}
			{activeService && (
				<div className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fadeIn">
								<div 
									className="bg-white rounded-3xl p-10 max-w-3xl w-full relative text-left shadow-2xl max-h-[90vh] overflow-y-auto animate-scaleIn"
									style={{boxShadow: "0 0 40px rgba(46, 129, 204, 0.10)"}}
								>
									<button
										className="absolute top-6 right-6 text-black text-xl bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer"
										onClick={() => setActiveService(null)}
									>
										✕
									</button>
            
									<div className="flex items-center gap-6 mb-6">
										<div className="bg-[#e6f0fa] rounded-2xl p-4 w-20 h-20 flex items-center justify-center flex-shrink-0">
											<img
												src={activeService.icon}
												alt={activeService.title}
												className="w-12 h-12"
											/>
										</div>
										<h2 className="text-3xl font-bold text-black">{activeService.title}</h2>
									</div>
            
									<div className="w-full h-1 bg-gradient-to-r from-[#2E81CC] to-transparent mb-8 rounded-full" />
            
									<div className="text-black text-lg leading-relaxed">
										{activeService.details.split('\n\n').map((paragraph, index) => {
											// Check if paragraph contains bullet points
											if (paragraph.includes('•')) {
												return (
													<div key={index} className="mb-6">
														{paragraph.split('\n').map((line, lineIndex) => (
															<p key={lineIndex} className={line.startsWith('•') ? "pl-6 mb-2 relative" : "mb-2"}>
																{line.startsWith('•') && (
																	<span className="absolute left-0 text-[#2E81CC]">•</span>
																)}
																{line}
															</p>
														))}
													</div>
												);
											}
											// Check if paragraph contains numbered list
											else if (/^\d\./.test(paragraph)) {
												return (
													<div key={index} className="mb-6">
														{paragraph.split('\n').map((line, lineIndex) => (
															<p key={lineIndex} className={/^\d\./.test(line) ? "pl-6 mb-2 relative" : "mb-2"}>
																{/^\d\./.test(line) && (
																	<span className="absolute left-0 text-[#2E81CC]">{line.split('.')[0]}.</span>
																)}
																{line}
															</p>
														))}
													</div>
												);
											}
											// Regular paragraph
											return (
												<p key={index} className="mb-6">
													{paragraph}
												</p>
											);
										})}
									</div>
            
									<div className="mt-8 flex justify-end">
										<button
											onClick={() => setActiveService(null)}
											className="px-6 py-3 bg-gradient-to-r from-[#2E81CC] to-[#1a5c9a] rounded-full text-white font-medium hover:shadow-lg hover:shadow-[#2E81CC]/20 transition-all"
										>
											Close
										</button>
									</div>
								</div>
				</div>
			)}

			{/* View All Services Modal */}
					{viewAllOpen && (
						<div className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center z-50 p-4">
							<div className="bg-white rounded-3xl p-8 max-w-5xl w-full relative shadow-2xl max-h-[90vh] overflow-y-auto">
								<button
									className="absolute top-6 right-6 text-black text-xl bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer"
									onClick={() => setViewAllOpen(false)}
								>
									✕
								</button>
								<h2 className="text-3xl font-bold mb-3 text-black">Our Services</h2>
								<div className="w-20 h-1.5 bg-gradient-to-r from-[#2E81CC] to-[#1a5c9a] mb-8 rounded-full" />
              
								<div className="text-black space-y-8">
									{/* IT Audits */}
									<div>
										<h3 className="text-2xl font-bold text-black mb-3">IT Audits</h3>
										<p className="mb-4">IT Audits & Asset inventory for businesses. Your business doesn't stand still and nor does the IT infrastructure on which it relies. You should therefore regularly check whether this IT infrastructure still meets your requirements and what alternatives might exist.</p>
                  
										<p className="mb-2">Our free* IT audit service gives you free* expert advice on:</p>
										<p className="mb-4">What hardware you already have, how it's set up, how your systems are structured, system security & vulnerability, how well it's performing, any user issues, any limitations & restrictions, comprehensive & detailed report, and how it can be improved.</p>
                  
										<p className="mb-4">We will give you a full report including a network diagram detailing your users, PCs, laptops and servers; your connectivity and network set-up; and your back-up. The audit includes a full asset inventory. We will also recommend how to resolve any existing problems and how to improve the efficiency and capacity of your systems.</p>
                  
										<p>One of our Senior Technical Consultants will also offer to meet with you to explain our findings and answer any questions you may have.</p>
									</div>
                
									{/* Hardware Supply */}
									<div>
										<h3 className="text-2xl font-bold text-black mb-3">Hardware Supply</h3>
										<p className="mb-4">Complete hardware support for IT systems. For a complete IT technical service Truefind Solutions are a No1 IT solution provider.</p>
                  
										<p className="mb-4">We can provide your business with the IT hardware it needs, even if you don't know what that is yet. If you just want a very competitive quote for hardware, that's what we will provide in double quick time. But if you want, we can also advise on what will best answer your requirements and help to specify it for you. Then we can build, configure, test, install, and connect it as well, so everything is set up and ready.</p>
                  
										<p className="mb-4">We supply hardware from all the leading manufacturers including Dell, IBM, Fujitsu, Sun, Apple, Cisco, Intel, EMC, Equalogic and Netgear.</p>
                  
										<p>Afterwards, you'll benefit from the free aftersales support we provide for all hardware we supply. We log warranty calls with manufacturers on your behalf and arrange for repair or swap-outs as soon as possible. You can also opt for more extensive support covering all your IT infrastructure by choosing one of our IT support contracts.</p>
									</div>
                
									{/* Office Move Service */}
									<div>
										<h3 className="text-2xl font-bold text-black mb-3">Office Move Service</h3>
										<p className="mb-4">IT Support For Small To Mid-Sized businesses. IT help Desk and service desk for all your office technical queries. Complete project management of office moves and IT relocation.</p>
                  
										<p className="mb-4">If you're moving premises or changing office layouts, Truefind Solutions can project manage the whole process. We take care of everything – from IT equipment to furniture – and we arrange everything, from initial planning and site assessment to final re-installation and testing.</p>
                  
										<p className="mb-4">We're fully-insured and use qualified electricians and technical staff. We can organise moves that take place inside or outside of normal working hours. And if required we can carry out ancillary tasks such as Server Room Builds and cabling, offering you a seamless service.</p>
                  
										<p className="mb-4">Normally a move will be broken down into five phases: Planning & Project Management, Co-ordination of 3rd party suppliers (eg your telecoms provider), Decommissioning & Breakdown, Packing and Transport, Re-installation & Commissioning.</p>
                  
										<p>We use the same team of skilled engineers for both decommissioning and reinstallation. Central to the whole process is a clear documented plan which we prepare and which alerts everyone to the critical deadlines involved.</p>
									</div>
								</div>
							</div>
						</div>
					)}
		</div>
	);
}
