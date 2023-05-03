import { createUseStyles } from "react-jss";
import { NavProps } from "../DefaultNavbar";

const NavItem = (props: NavProps) => {
  const styles = createUseStyles({
    h2: {
      display: "flex",
      flex: 1,
      alignItems: props.align,
      justifyContent: props.justify,
    },
  })();

  return (
    <>
      <h2 className={styles.h2}>{props.children}</h2>
    </>
  );
};

export default NavItem;
