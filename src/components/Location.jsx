import React from 'react'

const Location = () => {
  return (
   <div className="w-full container mx-auto px-4 rounded-xl shadow-lg overflow-hidden mb-10 max-md:mt-10">
     <iframe 
       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54776.17551471666!2d75.81547378297283!3d30.900338672770847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a837462345a7d%3A0x681102348ec60610!2sLudhiana%2C%20Punjab!5e0!3m2!1sen!2sin!4v1748585110087!5m2!1sen!2sin" 
       className="w-full h-[400px] border-0 rounded-3xl shadow-lg" 
       allowFullScreen="" 
       loading="lazy" 
       referrerPolicy="no-referrer-when-downgrade"
     />
   </div>
  )
}

export default Location
