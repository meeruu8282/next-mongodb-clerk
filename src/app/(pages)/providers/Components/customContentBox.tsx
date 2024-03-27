"use client";

// is not used 
// import Image from "next/image";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Modal from "../Components/popup";
// import CarelyoButton from "./getStartedButton";
// import CheckboxItem, { CheckboxItemProps } from "./checkboxItem";
// import * as React from "react";

// import { useState } from "react";
// import StyledBox from "./styleBox";
// import ToggleableBox from "./ToggleableBoxProps";
// import { faL } from "@fortawesome/free-solid-svg-icons";

// import Link from "next/link";
// import { link } from "fs";

// interface CustomContentBoxProps {
//   title: string;
//   monthlyCost: string;
//   descriptionLines: string;
//   features: string[];
//   buttonText: string;
//   selectedBox: number | null; // Lägg till selectedBox som en prop
//   setSelectedBox: (id: number | null) => void;
// }

// const CustomContentBox: React.FC<CheckboxItemProps & CustomContentBoxProps> = ({
//   id,
//   title,
//   monthlyCost,
//   descriptionLines,
//   features,
//   buttonText,
//   selectedBox, // Ta emot selectedBox som en prop
//   setSelectedBox, // Ta emot setSelectedBox som en prop
// }) => {
//   const [isModalOpen, setModalOpen] = useState(false);

//   const handleLinkToPlanSignUp = () => {
//     alert("här ska länken vara ");
//   };

//   /* console.log("1a log id ", id); */
//   return (
//     <div
//       className={`customContentBoxBackgrund w-[391.33px] h-[463px] py-5 px-7
//       border-[3px] rounded-[25px] border-sage ${
//         id === selectedBox ? "bg-sage" : ""
//       }`}
//     >
//       <div className="h-full flex flex-col justify-between item-center">
//         <div>
//           <div className="flex justify-between items-center">
//             <div
//               className={`items-center font-semibold text-[-2%] ${
//                 id === selectedBox ? "text-white" : "text-sage"
//               }`}
//             >
//             {title}
//             </div>

//             <ToggleableBox
//               id={id}
//               isChecked={id === selectedBox} // Kolla om rutan har samma id som selectedBox
//               onToggle={() => {
//                 setSelectedBox(id === selectedBox ? null : id); // Om samma ruta klickas igen, avmarkera den genom att sätta selectedBox till null, annars markera den genom att sätta selectedBox till id
//               }}
//             />
//           </div>

//           <div className="mt-4 flex text-[32px]">
//             <h1
//               className={`leading-tight text-[Poppins] font-semibold ${
//                 id === selectedBox ? "text-white " : ""
//               }`}
//             >
//               {monthlyCost}
//             </h1>
//           </div>
//           <div
//             className={`h-fit mr-4 mt-4 opacity-50 text-[Poppins] font-normal
//             whitespace-pre-line text-[14px] ${
//               id === selectedBox ? "text-white opacity-[100]" : ""
//             }`}
//           >
//             {descriptionLines}
//           </div>
//           <div
//             className={`mt-4 mr-4 text-[Poppins] font-normal text-[14px] ${
//               id === selectedBox ? "text-white  opacity-[100]  " : ""
//             }`}
//           >
//             {features.map((feature, idx) => (
//               <div className="mt-3 flex h-fit gap-2" key={idx}>
//                 <div>
//                   <StyledBox
//                     type="fixed"
//                     width="24px"
//                     height="24px"
//                     id={id}
//                     selectedBox={selectedBox}
//                   />
//                 </div>

//                 <div
//                   className={`h-fit opacity-50 ${
//                     id === selectedBox ? "text-white opacity-[100]" : ""
//                   }`}
//                 >
//                   <div> {feature} </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="justify-center items-center font-semibold">
//           <CarelyoButton
//             buttonText={buttonText}
//             size="large"
//             color="primary"
//             buttonSize="lb"
//             className={id === selectedBox ? "hover:outline hover:outline-2 hover:outline-white" : "bg-sage pointer-events-none"}
//             onClick={() => {
//               if (selectedBox === null) {
//                 setModalOpen(true);
//               } else {
//                 {/* <Link href="/providers/auth/signUp"></Link>; */}
//                 handleLinkToPlanSignUp();
//               }
//             }}
//           />
//           <Modal
//             isOpen={isModalOpen}
//             onClose={() => setModalOpen(false)}
//           >
//           </Modal>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomContentBox;
