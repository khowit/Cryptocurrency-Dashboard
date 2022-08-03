import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    selectbutton: {
      border: "1px solid gold",
      borderRadius: 5,
      padding: 10,
      paddingLeft: 20,
      paddingRight: 20,
      fontFamily: "Montserrat",
      cursor: "pointer",
      fontWeight:  700,
      "&:hover": {
        backgroundColor: "gold",
        color: "black",
      },
      width: "22%",
    },
  }));


const SelectButton = ({ children, selected, onClick }) => {
  
    const classes = useStyles();
    console.log(selected);
  

  return (
    <span onClick={onClick} className={classes.selectbutton}>
      {children}
    </span>
  );
};

export default SelectButton;
