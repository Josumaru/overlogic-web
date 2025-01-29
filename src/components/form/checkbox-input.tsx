// "use client";
// import { cn } from "@/lib/utils";
// import { NextPage } from "next";
// import { Checkbox } from "../ui/checkbox";
// import { OrderFormSchema } from "./order";

// interface Props {
//   setErrors: (errors: { [key: string]: string }) => void;
//   errors: { [key: string]: string };
//   field: string;
//   value: string;
//   title: string;
//   placeholder: string;
//   setFormData: (formData: OrderFormSchema) => void;
//   formData: OrderFormSchema;
// }

// const ChackboxServicesInput: NextPage<Props> = ({
//   setErrors,
//   errors,
//   field,
//   title,
//   setFormData,
//   formData,

// }) => {
//   return (
//     <div className="flex flex-col w-full">
//       <div className="translate-y-4">
//         <p className="font-medium">{title}</p>
//         <p
//           className={cn(
//             "text-sm",
//             errors[field] ? "text-red-500" : "text-transparent"
//           )}
//         >
//           {errors[field] == "" || errors[field] == undefined
//             ? "why you can read this?"
//             : errors[field]}
//         </p>
//       </div>
//       <div>
//         <div className="w-full flex flex-col gap-2">
//           <div className="flex items-center gap-2">
//             <p>Which services do you need?</p>
//           </div>
//           <div className="flex-col grid grid-cols-4 overflow-scroll gap-2">
//             {[
//               "Custom Software Development",
//               "API Development & Integration",
//               "E-commerce Solutions",
//               "Blockchain Development",
//               "DevOps & Cloud Solutions",
//               "Graphic Design",
//               "Logo Design",
//               "Video Editing & Animation",
//               "Motion Graphics",
//               "SEO Optimization",
//               "Content Writing",
//               "Machine Learning Models",
//               "Business Intelligence",
//               "Training & Workshops",
//               "IT Consultation",
//               "Product Management",
//               "Cybersecurity Services",
//             ].map((service, index) => (
//               <div className="flex items-center space-x-2" key={index}>
//                 <Checkbox
//                   className="w-5 h-5"
//                   checked={formData.services.includes(service)}
//                   onCheckedChange={(checked) => {
//                     const value = service;
//                     setFormData((prev: OrderFormSchema) => ({
//                       ...prev,
//                       services: checked
//                         ? [...prev.services, value]
//                         : prev.services.filter((s) => s !== value),
//                     }));
//                     setErrors((prev) => ({ ...prev, services: "" }));
//                   }}
//                 />
//                 <label
//                   htmlFor={`service-${index}`}
//                   className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//                 >
//                   {service}
//                 </label>
//               </div>
//             ))}
//             {errors.services && (
//               <p className="text-sm text-red-500">{errors.services}</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChackboxServicesInput;
