// import React from 'react';
// import { ExternalLink, ArrowRight } from 'lucide-react';

// const Portfolio = () => {
//   const projects = [
//     {
//       title: 'Local Restaurant Website',
//       category: 'Restaurant & Food',
//       description: 'Modern, responsive website with online ordering system and reservation booking.',
//       image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800',
//       technologies: ['React', 'Node.js', 'Stripe'],
//       status: 'Live'
//     },
//     {
//       title: 'Boutique E-commerce Store',
//       category: 'E-commerce',
//       description: 'Custom online store with inventory management and secure payment processing.',
//       image: 'https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg?auto=compress&cs=tinysrgb&w=800',
//       technologies: ['Shopify', 'Custom CSS', 'JavaScript'],
//       status: 'Live'
//     },
//     {
//       title: 'Professional Services Firm',
//       category: 'Professional Services',
//       description: 'Corporate website with client portal and appointment scheduling system.',
//       image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
//       technologies: ['WordPress', 'PHP', 'MySQL'],
//       status: 'Live'
//     }
//   ];

//   const scrollToContact = () => {
//     const element = document.getElementById('contact');
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <section id="portfolio" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//             Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">Portfolio</span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Showcasing our latest projects and the success stories of businesses we've helped grow online.
//           </p>
//         </div>

//         {/* Portfolio Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
//           {projects.map((project, index) => (
//             <div
//               key={project.title}
//               className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
//             >
//               {/* Project Image */}
//               <div className="relative overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <div className="absolute bottom-4 right-4">
//                     <div className="bg-white rounded-full p-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
//                       <ExternalLink className="h-4 w-4 text-gray-600" />
//                     </div>
//                   </div>
//                 </div>
//                 {/* Status Badge */}
//                 <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${
//                   project.status === 'Live' ? 'bg-green-100 text-green-800' :
//                   project.status === 'In Development' ? 'bg-blue-100 text-blue-800' :
//                   'bg-orange-100 text-orange-800'
//                 }`}>
//                   {project.status}
//                 </div>
//               </div>

//               {/* Project Details */}
//               <div className="p-6">
//                 <div className="mb-2">
//                   <span className="text-sm text-blue-600 font-medium">{project.category}</span>
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
//                 <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

//                 {/* Technologies */}
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.technologies.map((tech) => (
//                     <span
//                       key={tech}
//                       className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>

//                 {/* View Project Button */}
//                 <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors group/btn">
//                   <span>View Details</span>
//                   <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom CTA */}
//         <div className="text-center">
//           <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12 border">
//             <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//               Ready to Start Your Project?
//             </h3>
//             <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
//               We'd love to help you create something amazing. Let's discuss your project requirements and bring your vision to life.
//             </p>
//             <button
//               onClick={scrollToContact}
//               className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
//             >
//               Start Your Project
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Portfolio;




// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X, ChevronLeft, ChevronRight } from "lucide-react";

// interface Project {
//   title: string;
//   category: string;
//   description: string;
//   image: string;
//   technologies: string[];
//   status: string;
// }

// interface GalleryItem {
//   title: string;
//   image: string;
// }

// const Portfolio: React.FC = () => {
//   const projects: Project[] = [
//     {
//       title: "Local Restaurant Website",
//       category: "Restaurant & Food",
//       description:
//         "Modern, responsive website with online ordering system and reservation booking.",
//       image:
//         "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800",
//       technologies: ["React", "Node.js", "Stripe"],
//       status: "In Development",
//     },
//     {
//       title: "Boutique E-commerce Store",
//       category: "Coming Soon",
//       description:
//         "Custom online store with inventory management and secure payment processing.",
//       image:
//         "https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg?auto=compress&cs=tinysrgb&w=800",
//       technologies: ["Shopify", "Custom CSS", "JavaScript"],
//       status: "In Development",
//     },
//     {
//       title: "Professional Services Firm",
//       category: "Professional Services",
//       description:
//         "Corporate website with client portal and appointment scheduling system.",
//       image:
//         "https://images.pexels.com/photos/3184360/pexels-photo-3184632.jpeg?auto=compress&cs=tinysrgb&w=800",
//       technologies: ["WordPress", "PHP", "MySQL"],
//       status: "Live",
//     },
//   ];

// const gallery = [
//   {
//     title: "Professional Dashboard Design",
//     image:
//       "/upvimad4.png",  
//   },
//   {
//     title: "Modern Website Layout",
//     image:
//       "/upvimad2.png",              
//   },
//   {
//     title: "Landing Page Mockup",
//     image:
//       "/upvimad3.png",
//   },
//   {
//     title: "Law Research Layout",
//     image:
//       "/upvimad1.png",            

//   },
//   // {
//   //   title: "Wireframe Sketch Mockup",
//   //   image:
//   //     "/upvimad5.png",
//   // },
//   // {
//   //   title: "Web UI Components",
//   //   image:
//   //     "/upvimad6.png",    
//   // },
// ];



//   const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prev) =>
//       prev + 2 < gallery.length ? prev + 2 : 0
//     );
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prev) =>
//       prev - 2 >= 0
//         ? prev - 2
//         : gallery.length - (gallery.length % 2 === 0 ? 2 : 1)
//     );
//   };

//   const visibleItems = gallery.slice(currentIndex, currentIndex + 2);

//   return (
//     <section id="portfolio" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Project Section */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//             Our{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">
//               Portfolio
//             </span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Showcasing our latest projects and the success stories of businesses
//             we've helped grow online.
//           </p>
//         </div>

//         {/* Projects Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//           {projects.map((p) => (
//             <div
//               key={p.title}
//               className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2"
//             >
//               <img
//                 src={p.image}
//                 alt={p.title}
//                 className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
//               />
//               <div className="p-6">
//                 <h3 className="text-xl font-bold">{p.title}</h3>
//                 <p className="text-gray-600 mb-4">{p.description}</p>
//                 <div className="flex flex-wrap gap-2">
//                   {p.technologies.map((t) => (
//                     <span
//                       key={t}
//                       className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
//                     >
//                       {t}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Carousel Gallery */}
//         <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
//           My <span className="text-blue-600">Design Gallery</span>
//         </h3>

//         <div className="relative flex items-center justify-center">
//           {/* Left Arrow */}
//           <button
//             className="absolute left-0 z-10 bg-white/70 hover:bg-white p-3 rounded-full shadow-md"
//             onClick={handlePrev}
//           >
//             <ChevronLeft size={24} />
//           </button>

//           {/* Gallery Images (2 visible) */}
//           <div className="grid grid-cols-2 gap-6">
//             {visibleItems.map((item, idx) => (
//               <motion.div
//                 key={idx}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.97 }}
//                 className="relative cursor-pointer rounded-2xl overflow-hidden group shadow-lg hover:shadow-xl transition"
//                 onClick={() => setSelectedImage(item)}
//               >
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-64 object-cover rounded-2xl"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition">
//                   <p className="absolute bottom-4 left-4 text-white font-semibold">
//                     {item.title}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Right Arrow */}
//           <button
//             className="absolute right-0 z-10 bg-white/70 hover:bg-white p-3 rounded-full shadow-md"
//             onClick={handleNext}
//           >
//             <ChevronRight size={24} />
//           </button>
//         </div>

//         {/* Lightbox */}
//         <AnimatePresence>
//           {selectedImage && (
//             <motion.div
//               className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setSelectedImage(null)}
//             >
//               <motion.div
//                 initial={{ scale: 0.8 }}
//                 animate={{ scale: 1 }}
//                 exit={{ scale: 0.8 }}
//                 className="relative max-w-4xl max-h-[90vh]"
//               >
//                 <img
//                   src={selectedImage.image}
//                   alt={selectedImage.title}
//                   className="rounded-lg max-h-[90vh] object-contain"
//                 />
//                 <button
//                   className="absolute top-4 right-4 text-white bg-black/60 p-2 rounded-full hover:bg-black"
//                   onClick={() => setSelectedImage(null)}
//                 >
//                   <X size={24} />
//                 </button>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// };

// export default Portfolio;






// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X, ChevronLeft, ChevronRight } from "lucide-react";

// interface Project {
//   title: string;
//   category: string;
//   description: string;
//   image: string;
//   technologies: string[];
//   status: string;
//   "Live At": string;
// }

// interface GalleryItem {
//   title: string;
//   image: string;
// }

// const Portfolio: React.FC = () => {
//   const projects: Project[] = [
//     {
//       "title": "Advertising company Website",
//       "category": "Marketing & Advertising",
//       "description": "Professional, responsive website for Muskan Advertising featuring service showcase, portfolio, and client inquiry forms. Highlights 25+ years of advertising and printing expertise across India.",
//       "image": "/upvimap1.png",
//       "technologies": ["React", "Node.js", "Express", "MongoDB"],
//       "Live At": "https://muskanjjn.com/",
//       "status": "Live"
//     },

//     {
//       title: "Public School Website",
//       category: "Education",
//       description:
//         "Custom online store with inventory management and secure payment processing.",
//       image:
//         "https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg?auto=compress&cs=tinysrgb&w=800",
//       technologies: ["Shopify", "Custom CSS", "JavaScript"],
//       "Live At": "https://www.neelkanthschool.org/",
//       status: "In Development",
//     },
//     {
//       title: "Professional Services Firm",
//       category: "Professional Services",
//       description:
//         "Corporate website with client portal and appointment scheduling system.",
//       image:
//         "https://images.pexels.com/photos/3182768/pexels-photo-3182768.jpeg",
//       technologies: ["WordPress", "PHP", "MySQL"],
//       "Live At": "",
//       status: "Coming Soon",
//     },
//   ];

//   const gallery = [
//     { title: "Professional Dashboard Design", image: "/upvimad4.png" },
//     { title: "Modern Website Layout", image: "/upvimad2.png" },
//     { title: "Landing Page Mockup", image: "/upvimad3.png" },
//     { title: "Law Research Layout", image: "/upvimad1.png" },
//   ];

//   const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev + 2 < gallery.length ? prev + 2 : 0));
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prev) =>
//       prev - 2 >= 0 ? prev - 2 : gallery.length - (gallery.length % 2 === 0 ? 2 : 1)
//     );
//   };

//   const visibleItems = gallery.slice(currentIndex, currentIndex + 2);

//   // Helper function to get status color
//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case "Live":
//         return "bg-blue-500 text-white";
//       case "In Development":
//         return "bg-slate-500 text-white";
//       case "Coming Soon":
//         return "bg-blue-900 text-white";
//       default:
//         return "bg-slate-500 text-white";
//     }
//   };

//   return (
//     <section id="portfolio" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Project Section */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//             Our{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">
//               Portfolio
//             </span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Showcasing our latest projects and the success stories of businesses
//             we've helped grow online.
//           </p>
//         </div>

//         {/* Projects Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//           {projects.map((p) => (
//             <div
//               key={p.title}
//               className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2"
//             >
//               <img
//                 src={p.image}
//                 alt={p.title}
//                 className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
//               />
//               <div className="p-6">
//                 <h3 className="text-xl font-bold">{p.title}</h3>
//                 <p className="text-gray-600 mb-2">{p.description}</p>

//                 <span
//                   className={`inline-block px-2 py-1 text-xs font-semibold rounded-full mb-4 ${getStatusColor(
//                     p.status
//                   )}`}
//                 >
//                   {p.status}
//                 </span>
//                 <div className="flex flex-wrap gap-2">
//                   {p.technologies.map((t) => (
//                     <span
//                       key={t}
//                       className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
//                     >
//                       {t}
//                     </span>
//                   ))}
//                 </div>
//                 {p["Live At"] && p["Live At"].length > 0 && (
//                   <a
//                     href={p["Live At"]}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-block mt-4 text-blue-600 hover:underline font-medium"
//                   >
//                     🔗 Live Site
//                   </a>
//                 )}

//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Carousel Gallery */}
//         <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
//           Our <span className="text-blue-600">Design Gallery</span>
//         </h3>

//         <div className="relative flex items-center justify-center">
//           {/* Left Arrow */}
//           <button
//             className="absolute left-0 z-10 bg-white/70 hover:bg-white p-3 rounded-full shadow-md"
//             onClick={handlePrev}
//           >
//             <ChevronLeft size={24} />
//           </button>

//           {/* Gallery Images (2 visible) */}
//           <div className="grid grid-cols-2 gap-6">
//             {visibleItems.map((item, idx) => (
//               <motion.div
//                 key={idx}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.97 }}
//                 className="relative cursor-pointer rounded-2xl overflow-hidden group shadow-lg hover:shadow-xl transition"
//                 onClick={() => setSelectedImage(item)}
//               >
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-64 object-cover rounded-2xl"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition">
//                   <p className="absolute bottom-4 left-4 text-white font-semibold">
//                     {item.title}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Right Arrow */}
//           <button
//             className="absolute right-0 z-10 bg-white/70 hover:bg-white p-3 rounded-full shadow-md"
//             onClick={handleNext}
//           >
//             <ChevronRight size={24} />
//           </button>
//         </div>

//         {/* Lightbox */}
//         <AnimatePresence>
//           {selectedImage && (
//             <motion.div
//               className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setSelectedImage(null)}
//             >
//               <motion.div
//                 initial={{ scale: 0.8 }}
//                 animate={{ scale: 1 }}
//                 exit={{ scale: 0.8 }}
//                 className="relative max-w-4xl max-h-[90vh]"
//               >
//                 <img
//                   src={selectedImage.image}
//                   alt={selectedImage.title}
//                   className="rounded-lg max-h-[90vh] object-contain"
//                 />
//                 <button
//                   className="absolute top-4 right-4 text-white bg-black/60 p-2 rounded-full hover:bg-black"
//                   onClick={() => setSelectedImage(null)}
//                 >
//                   <X size={24} />
//                 </button>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// };

// export default Portfolio;


import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// --- Interfaces ---
interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  images?: string[]; // Additional images for modal
  technologies: string[];
  status: string;
  "Live At": string;
}

interface GalleryItem {
  title: string;
  image: string;
}

// --- Component ---
const Portfolio: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Advertising company Website",
      category: "Marketing & Advertising",
      description:
        "Professional, responsive website for Muskan Advertising featuring service showcase, portfolio, and client inquiry forms. Highlights 25+ years of advertising and printing expertise across India.",
      image: "/upvimap1.png",
      images: ["/upvimap1.png", "/upvimap2.png"], // Example additional images
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      "Live At": "",
      status: "Live",
    },
    {
      title: "Public School Website",
      category: "Education",
      description:
        "A website for a public school with  features like news, events, and contact information",
      image:
        "/upvimap3.png",
      images: ["/upvimap3.png", "/upvimap4.png"
      ],
      technologies: ["React", "Custom CSS", "JavaScript"],
      "Live At": "",
      status: "Live",
    },
    {
      title: "Professional Services Firm",
      category: "Professional Services",
      description:
        "Corporate website with client portal and appointment scheduling system.",
      image:
        "https://images.pexels.com/photos/3182768/pexels-photo-3182768.jpeg",
      images: [
        "https://images.pexels.com/photos/3182768/pexels-photo-3182768.jpeg",
      ],
      technologies: ["WordPress", "PHP", "MySQL"],
      "Live At": "",
      status: "Coming Soon",
    },
  ];

  const gallery: GalleryItem[] = [
    { title: "Professional Dashboard Design", image: "/upvimad4.png" },
    { title: "Modern Website Layout", image: "/upvimad2.png" },
    { title: "Landing Page Mockup", image: "/upvimad3.png" },
    { title: "Law Research Layout", image: "/upvimad1.png" },
  ];

  // --- State ---
  const [modalImages, setModalImages] = useState<string[] | null>(null);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleItems = gallery.slice(currentIndex, currentIndex + 2);

  // --- Handlers ---
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 2 < gallery.length ? prev + 2 : 0));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev - 2 >= 0 ? prev - 2 : gallery.length - (gallery.length % 2 === 0 ? 2 : 1)
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-blue-500 text-white";
      case "In Development":
        return "bg-slate-500 text-white";
      case "Coming Soon":
        return "bg-blue-900 text-white";
      default:
        return "bg-slate-500 text-white";
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">
              Portfolio
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing our latest projects and the success stories of businesses we've helped grow online.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300 cursor-pointer"
                onClick={() => setModalImages(p.images || [])}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="text-gray-600 mb-2">{p.description}</p>
                <span
                  className={`inline-block px-2 py-1 text-xs font-semibold rounded-full mb-4 ${getStatusColor(p.status)}`}
                >
                  {p.status}
                </span>
                <div className="flex flex-wrap gap-2">
                  {p.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {p["Live At"] && (
                  <a
                    href={p["Live At"]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-blue-600 hover:underline font-medium"
                  >
                    🔗 Live Site
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Project Images */}
        <AnimatePresence>
          {modalImages && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="bg-white rounded-lg shadow-lg p-6 relative max-w-3xl w-full">
                <button
                  onClick={() => setModalImages(null)}
                  className="absolute top-2 right-2 text-gray-700 hover:text-red-600"
                >
                  <X size={28} />
                </button>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {modalImages.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Project Image ${index + 1}`}
                      className="w-full rounded-md"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Gallery Section */}
        <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Our <span className="text-blue-600">Design Gallery</span>
        </h3>

        <div className="relative flex items-center justify-center">
          <button
            className="absolute left-0 z-10 bg-white/70 hover:bg-white p-3 rounded-full shadow-md"
            onClick={handlePrev}
          >
            <ChevronLeft size={24} />
          </button>

          <div className="grid grid-cols-2 gap-6">
            {visibleItems.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="relative cursor-pointer rounded-2xl overflow-hidden group shadow-lg hover:shadow-xl transition"
                onClick={() => setSelectedImage(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition">
                  <p className="absolute bottom-4 left-4 text-white font-semibold">
                    {item.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <button
            className="absolute right-0 z-10 bg-white/70 hover:bg-white p-3 rounded-full shadow-md"
            onClick={handleNext}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Lightbox for Selected Gallery Image */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-4xl max-h-[90vh]"
              >
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="rounded-lg max-h-[90vh] object-contain"
                />
                <button
                  className="absolute top-4 right-4 text-white bg-black/60 p-2 rounded-full hover:bg-black"
                  onClick={() => setSelectedImage(null)}
                >
                  <X size={24} />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;
