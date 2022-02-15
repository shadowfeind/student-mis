import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import SettingsIcon from "@material-ui/icons/Settings";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    borderRadius: "10px",
    boxShadow: "5px 5px 5px #d3d3d3",
    margin: "10px",
  },
  CardContent: {
    marginBottom: "-25px",
  },
  media: {
    height: 0,
    paddingTop: "45.25%", // 16:9
  },
  topHeading: {
    color: "#000",
    fontSize: "18px",
    paddingBottom: "3px",
    marginBottom: "-10px",
  },
}));

export const DashboardCard = ({ subject }) => {
  const classes = useStyles();
  return subject ? (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={subject.imageUrl}
        title="Paella dish"
      />
      <CardContent className={classes.CardContent}>
        <Typography
          variant="body2"
          color="textSecondary"
          component="h4"
          className={classes.topHeading}
        >
          {subject.name}{" "}
          <span style={{ textAlign: "right", fontSize: "12px", color: "#666" }}>
            {" "}
            {subject.credit}
          </span>
        </Typography>

        <Typography variant="body2" color="textSecondary" component="h6">
          {subject.teacher}
          <IconButton aria-label="add to favorites">
            <PhoneIphoneIcon />
          </IconButton>
          {subject.phone}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="share">
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton aria-label="share">
          <SettingsIcon />
        </IconButton>
      </CardActions>
    </Card>
  ) : (
    <></>
  );
};
export default DashboardCard;
