import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  list: {
    display: "flex",
    width: "100%",
    overflow: "auto",
  },
  listItem: {
    justifyContent: "center",
  },
});
const LinksCard = () => {
  const classes = useStyles();

  return (
    <div>
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <Button>Home</Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button>About</Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button>Contact</Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button>PrivacyPolicy</Button>
        </ListItem>
      </List>
    </div>
  );
};

export default LinksCard;
