import { createUseStyles } from "react-jss";

const DropdownItem = (props: any) => {
  const styles = createUseStyles({
    dropdownItem: {
      flex: 1,
      cursor: "pointer",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "5rem",
    },
  })();

  return <div className={styles.dropdownItem}>{props.children}</div>;
};

export default DropdownItem;
