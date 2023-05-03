import { createUseStyles } from "react-jss";

const DropdownMenu = (props: any) => {
  const styles = createUseStyles({
    dropdownMenu: {
      backgroundColor: "#212A3E",
      position: "absolute",
      top: "25px",
      width: "auto",
      padding: "1rem",
      paddingTop: "3rem",
      overflow: "hidden",
      border: "2px solid #9BA4B5"
    },
  })();

  return <div className={styles.dropdownMenu}>{props.children}</div>;
};

export default DropdownMenu;
