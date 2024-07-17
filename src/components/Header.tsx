import { Modal } from "./Modal";
import { FormAddUser } from "./FormAddUser";
import { useAppDispatch, useAppSelector } from "../store/store";
import { setShowModal } from "../store/userSlice";

export const Header = () => {
   const dispatch = useAppDispatch();
   const showModal = useAppSelector((state) => state.user.showModal);

   const handleClose = () => {
      dispatch(setShowModal(false));
   }
   const handleOpen = () => {
      dispatch(setShowModal(true));
   }
   return (
      <header className="shadow-md">
         <div className="py-2 px-[32px] mx-auto max-w-[1200px]">
            <button
               onClick={handleOpen}
               className="bg-slate-300 hover:bg-slate-200 px-3 py-1 rounded-md font-medium">
               Add new user
            </button>
         </div>
         {showModal && (
            <Modal onClose={handleClose}>
               <FormAddUser />
            </Modal>
         )}
      </header>
   );
};
