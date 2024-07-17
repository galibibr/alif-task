import React from "react";
import { createPortal } from "react-dom";

type ModlProps = {
   children: React.ReactNode;
   onClose: () => void;
};
export const Modal = ({ children, onClose }: ModlProps) => {
   return createPortal(
      <>
         <div
            onClick={onClose}
            className={`${
               !!onClose && "cursor-pointer"
            } bg-black opacity-15 w-[100vw] h-[100vh] absolute top-0 left-0 z-10`}
         />
         <div className="bg-white absolute p-4 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20 rounded-[12px] shadow-md">
            <div className="flex justify-end">
               <button onClick={onClose} className="hover:text-slate-400">&#x2715;</button>
            </div>
            {children}
         </div>
      </>,
      document.body
   );
};
