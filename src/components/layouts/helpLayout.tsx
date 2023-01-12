import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";

export default function HelpLayout() {
  return (
    <div className="m-4">
      <h2 className="mb-4">Help Page</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        iure sapiente corrupti dolor, saepe numquam accusamus dicta architecto
        exercitationem deleniti. Veritatis, tenetur. Possimus unde eos dolor eum
        vero accusantium officia!
      </p>
      <nav className="my-8 flex justify-center">
        <NavLink
          to="faq"
          className="w-32 btn border-2 border-purple-800 mr-4 text-center hover:bg-purple-800 hover:text-white"
        >
          FAQs
        </NavLink>
        <NavLink
          to="contact"
          className="w-32 btn border-2 border-purple-800 mr-4 text-center hover:bg-purple-800 hover:text-white"
        >
          Contact Us
        </NavLink>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}
