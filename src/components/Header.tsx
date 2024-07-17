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
      <div>
         <button onClick={handleOpen}>Add new user</button>
         {showModal && (
            <Modal onClose={handleClose}>
               <FormAddUser />
            </Modal>
         )}
      </div>
   );
};
