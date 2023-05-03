import { createUseStyles } from "react-jss";

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
});

const Navbar = (props: any) => {
  const styles = useStyles();

  return (
    <>
      <div className={styles.mainDiv}>{props.children}</div>
    </>
  );
};

export default Navbar;
