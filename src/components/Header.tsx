import { useState } from "react";
import { Modal } from "./Modal";
import { FormAddUser } from "./FormAddUser";

export const Header = () => {
   const [showModal, setShowModal] = useState(false);
   return (
      <div>
         <button onClick={() => setShowModal(true)}>Add new user</button>
         {showModal && (
            <Modal onClose={() => setShowModal(false)}>
               <FormAddUser />
            </Modal>
         )}
      </div>
   );
};
