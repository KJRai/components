import { useState } from "react";
import Button from "../button";
import styles from "./navbar.module.css";
import data from "./data.json";

type DropdownKey = "destinations" | "courses";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey | null>(
    null
  );
  const handleMouseEnter = (menu: DropdownKey) => setActiveDropdown(menu);
  const handleMouseLeave = () => setActiveDropdown(null);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <svg className={styles.logo} />
          {/* {SVGAElement} */}
          <ul className={styles.navLinks}>
            <li
              onMouseEnter={() => handleMouseEnter("destinations")}
              onMouseLeave={handleMouseLeave}
            >
              <div className={styles.drop}>
                Destinations
                <svg width={"20px"} />
              </div>
              {/*  {svg} */}
              
            </li>
            <li
              onMouseEnter={() => handleMouseEnter("courses")}
              onMouseLeave={handleMouseLeave}
            >
              <div className={styles.drop}>
                Find a Course
                <svg width={"20px"} />
              </div>
              {/* {svg} */}
              
            </li>
            <li>About</li>
            <li>Blogs</li>
            <li>Partners</li>
            <li>Contact</li>
          </ul>
          <Button
            onClick={undefined}
            label="Enquire Now"
            type="button"
            variant="filled"
          />
        </div>
        {activeDropdown && (
          <div
            className={styles.dropdown}
            onMouseEnter={() => handleMouseEnter(activeDropdown)}
            onMouseLeave={handleMouseLeave}
          >
            {data[activeDropdown].map(({ title, description }) => (
              <div className={styles.card} key={title}>
                <h4>{title}</h4>
                <p>{description}</p>
              </div>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
