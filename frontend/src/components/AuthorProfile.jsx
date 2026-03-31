import { NavLink, Outlet } from "react-router";
import {
  profileShell,
  profileTabs,
  profileTabBase,
  profileTabActive,
  profileTabInactive,
  profileOutletWrap,
} from "../styles/common";

function AuthorProfile() {
  return (
    <div className={profileShell}>
      <div className={profileTabs}>

        <NavLink
          to="articles"
          className={({ isActive }) =>
            `${profileTabBase} ${isActive ? profileTabActive : profileTabInactive}`
          }
        >
          Articles
        </NavLink>

        <NavLink
          to="write-article"
          className={({ isActive }) =>
            `${profileTabBase} ${isActive ? profileTabActive : profileTabInactive}`
          }
        >
          Write Article
        </NavLink>

      </div>

      <div className={profileOutletWrap}>
        <Outlet />
      </div>

    </div>
  );
}

export default AuthorProfile;