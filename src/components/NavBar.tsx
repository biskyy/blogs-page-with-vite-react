// import { useStyles } from "../styles/useStyles";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

const useStyles = createUseStyles({
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
  title: {
    marginInline: "30px",
    flex: 1,
    color: "#F1F6F9",
  },
  navButtonsContainer: {
    display: "flex",
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "row",
  },
  buttonTxt: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "auto",
  },
  link: {
    "&:hover": {
      opacity: 0.5,
    },
    textDecoration: "none",
    color: "inherit",
  },
});

const NavBar = () => {
  const styles = useStyles();

  return (
    <>
      <div className={styles.mainDiv}>
        <div style={{ flex: 1 }}>
          <h1 className={styles.title}>My blogs</h1>
        </div>
        <div style={{ flex: 1, display: "flex" }}></div>
        <div className={styles.navButtonsContainer}>
          <h2 className={styles.buttonTxt}>
            <Link className={styles.link} to="/">
              Home
            </Link>
          </h2>
          <h2 className={styles.buttonTxt}>
            <Link className={styles.link} to="/addBlogPost">
              Add
            </Link>
          </h2>
        </div>
      </div>
    </>
  );
};

export default NavBar;
