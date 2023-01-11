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
      <nav className="mt-4">
        <NavLink to="faq">FAQs</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}
