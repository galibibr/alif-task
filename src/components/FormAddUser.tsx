export const FormAddUser = () => {
   return (
      <div>
         <p className="text-2xl text-center">Add new user</p>
         <form className="mt-1 min-w-[300px] flex flex-col gap-1">
            <div className="flex flex-col">
               <label htmlFor="fullname">Fullname <span className="text-red-500">*</span></label>
               <input type="text" id="fullname" placeholder="John Doe" required className="border px-2 py-1 rounded-md" />
            </div>
            <div className="flex flex-col">
               <label htmlFor="email">Email <span className="text-red-500">*</span></label>
               <input type="email" id="email" placeholder="jdoe@me.com" required className="border px-2 py-1 rounded-md" />
            </div>
            <div className="flex flex-col">
               <label htmlFor="phone">Phone <span className="text-red-500">*</span></label>
               <input type="phone" id="email" placeholder="555-555-5555" required className="border px-2 py-1 rounded-md" />
            </div>
            <div className="flex flex-col">
               <label htmlFor="age">Age <span className="text-red-500">*</span></label>
               <input type="number" id="age" placeholder="25" required className="border px-2 py-1 rounded-md" />
            </div>
            <div className="flex flex-col">
               <label htmlFor="major">Major <span className="text-red-500">*</span></label>
               <input type="text" id="major" placeholder="React Developer" required className="border px-2 py-1 rounded-md" />
            </div>
            <div className="flex flex-col">
               <label htmlFor="skills">Skills <span className="text-red-500">*</span></label>
               <input type="text" id="skills" placeholder="HTML, CSS, JavaScript" required className="border px-2 py-1 rounded-md" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="experience">Experience <span className="text-red-500">*</span></label>
              <select id="experience" className="border px-2 py-1 rounded-md">
                <option value="no experience">No experience</option>
                <option value="less than 1 year">Less than 1 year</option>
                <option value="1-3 years">1-3 years</option>
                <option value="3-5 years">3-5 years</option>
                <option value="5+ years">5+ years</option>
              </select>
            </div>
            <div className="mt-2">
              <button type="submit" className="border px-2 py-1 rounded-md w-full font-[500] text-[18px] bg-slate-300 hover:bg-slate-200">Add user</button>
            </div>
         </form>
      </div>
   );
};
