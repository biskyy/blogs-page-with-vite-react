import { createUseStyles } from "react-jss";
import { NavProps } from "../DefaultNavbar";

const NavGroup = (props: NavProps) => {
  const styles = createUseStyles({
    div: {
      display: "flex",
      flex: 1,
      height: "100%",
      alignItems: props.align,
      justifyContent: props.justify,
    },
  })();

  return (
    <>
      <div className={styles.div}>{props.children}</div>
    </>
  );
};

export default NavGroup;
