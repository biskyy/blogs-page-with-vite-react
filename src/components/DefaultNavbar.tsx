// import { useStyles } from "../styles/useStyles";
import { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import NavItem from "./Navbar/NavItem";
import { Property } from "csstype";
import NavGroup from "./Navbar/NavGroup";
import DropdownMenu from "./Navbar/DropdownMenu/DropdownMenu";
import DropdownItem from "./Navbar/DropdownMenu/DropdownItem";

export type NavProps = {
  children?: JSX.Element[] | JSX.Element | false | null;
  align?: Property.AlignItems | undefined;
  justify?: Property.JustifyContent | undefined;
};

const DefaultNavbar = () => {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    console.log(isOpened);
  }, [isOpened]);

  const styles = createUseStyles({
    mainDiv: {
      display: "flex",
      backgroundColor: "#9BA4B5",
      flex: 1,
      maxHeight: "100px",
      minHeight: "100px",
      height: "100px",
      alignItems: "center",
      justifyContent: "center",
    },
    link: {
      "&:hover": {
        opacity: 0.5,
      },
      textDecoration: "none",
      color: "inherit",
      textAlign: "center",
    },
  })();

  return (
    <>
      <Navbar>
        <NavGroup justify="center" align="center">
          <NavItem justify="flex-end" align="center">
            <p>My blog page</p>
          </NavItem>
          <NavItem />
        </NavGroup>
        <NavGroup />
        <NavGroup justify="center">
          <NavItem justify="center" align="center">
            <Link className={styles.link} to="/">
              Home
            </Link>
          </NavItem>
          <NavItem justify="center" align="center">
            <Link
              to=""
              className={styles.link}
              style={{
                cursor: "pointer",
                userSelect: "none",
                zIndex: "1",
              }}
              onClick={() => setIsOpened(!isOpened)}
            >
              Manage
            </Link>
            <>
              {isOpened && (
                <>
                  <DropdownMenu>
                    <DropdownItem>
                      <Link
                        className={styles.link}
                        style={{ width: "100%" }}
                        to="/addBlogPost"
                      >
                        Add
                      </Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link
                        className={styles.link}
                        style={{ width: "100%" }}
                        to="/manageBlogPosts"
                      >
                        Delete
                      </Link>
                    </DropdownItem>
                  </DropdownMenu>
                </>
              )}
            </>
          </NavItem>
        </NavGroup>
      </Navbar>
    </>
  );
};

export default DefaultNavbar;
