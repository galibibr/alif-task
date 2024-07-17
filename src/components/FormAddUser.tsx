import { useEffect } from "react";
import { formErrors, UserI } from "../helpers/types";
import { useAppDispatch, useAppSelector } from "../store/store";
import { setIsCorrectForm, setPostUserIsLoading, setShowModal, submitNewUser } from "../store/userSlice";
import { usePostUserMutation } from "../api/userApi";

export const FormAddUser = () => {
   const dispatch = useAppDispatch();
   const formErrors: formErrors = useAppSelector((state) => state.user.formErrors);
   const isCorrectForm = useAppSelector((state) => state.user.isCorrectForm);
   const newUser = useAppSelector((state) => state.user.newUser);
   const postUserIsLoading = useAppSelector((state) => state.user.postUserIsLoading);
   const [ postUser ] = usePostUserMutation()

   const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
      event.preventDefault();
      const user: UserI = {
         id: Date.now(),
         fullname: event.currentTarget.fullname.value,
         email: event.currentTarget.email.value,
         phone: event.currentTarget.phone.value,
         age: parseInt(event.currentTarget.age.value),
         major: event.currentTarget.major.value,
         skills: event.currentTarget.skills.value.split(","),
         experience: event.currentTarget.experience.value,
      };

      dispatch(submitNewUser(user));
   };

   useEffect(() => {
      if (isCorrectForm) {
         newUser && postUser(newUser)
         dispatch(setPostUserIsLoading(true))
         dispatch(setIsCorrectForm(false));
      } else {
         console.log('incorrect form');
         dispatch(setIsCorrectForm(false));
      }
   }, [isCorrectForm]);

   return (
      <div>
         <p className="text-2xl text-center">Add new user</p>
         <form onSubmit={handleSubmit} className="mt-1 min-w-[300px] flex flex-col gap-2">
            {/* Fullname */}
            <div className="flex flex-col relative">
               <label htmlFor="fullname">
                  Fullname <span className="text-red-500">*</span>
               </label>
               <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  placeholder="John Doe"
                  required
                  className={`${
                     formErrors.fullname && "border-red-500"
                  } border px-2 py-1 rounded-md`}
               />
               {formErrors.fullname && (
                  <p className="text-red-500 absolute text-[12px] -bottom-[15px] right-2">
                     {formErrors.fullname}
                  </p>
               )}
            </div>
            {/* Email */}
            <div className="flex flex-col">
               <label htmlFor="email">
                  Email <span className="text-red-500">*</span>
               </label>
               <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="jdoe@me.com"
                  required
                  className="border px-2 py-1 rounded-md"
               />
            </div>
            {/* Phone */}
            <div className="flex flex-col relative">
               <label htmlFor="phone">
                  Phone <span className="text-red-500">*</span>
               </label>
               <input
                  type="phone"
                  name="phone"
                  id="phone"
                  placeholder="555-555-5555"
                  required
                  className={`"border-red-500" border px-2 py-1 rounded-md`}
               />
            </div>
            {/* Age */}
            <div className="flex flex-col relative">
               <label htmlFor="age">
                  Age <span className="text-red-500">*</span>
               </label>
               <input
                  type="number"
                  name="age"
                  id="age"
                  placeholder="25"
                  required
                  className={`${formErrors.age && "border-red-500"} border px-2 py-1 rounded-md`}
               />
               {formErrors.age && (
                  <p className="text-red-500 absolute text-[12px] -bottom-[15px] right-2">
                     {formErrors.age}
                  </p>
               )}
            </div>
            {/* Major */}
            <div className="flex flex-col">
               <label htmlFor="major">
                  Major <span className="text-red-500">*</span>
               </label>
               <input
                  type="text"
                  name="major"
                  id="major"
                  placeholder="React Developer"
                  required
                  className="border px-2 py-1 rounded-md"
               />
            </div>
            {/* Skills */}
            <div className="flex flex-col">
               <label htmlFor="skills">
                  Skills <span className="text-red-500">*</span>
               </label>
               <input
                  type="text"
                  name="skills"
                  id="skills"
                  placeholder="HTML, CSS, JavaScript"
                  required
                  className="border px-2 py-1 rounded-md"
               />
            </div>
            {/* Experience */}
            <div className="flex flex-col">
               <label htmlFor="experience">
                  Experience
               </label>
               <select id="experience" name="experience" className="border px-2 py-1 rounded-md">
                  <option value="no experience">No experience</option>
                  <option value="less than 1 year">Less than 1 year</option>
                  <option value="1-3 years">1-3 years</option>
                  <option value="3-5 years">3-5 years</option>
                  <option value="5+ years">5+ years</option>
               </select>
            </div>
            {/* Submit */}
            <div className="mt-2">
               <button
                  disabled={postUserIsLoading}
                  type="submit"
                  className="border px-2 py-1 rounded-md w-full font-[500] text-[18px] bg-slate-300 hover:bg-slate-200">
                     {postUserIsLoading ? "Saving..." : "Save"}
               </button>
            </div>
         </form>
      </div>
   );
};
