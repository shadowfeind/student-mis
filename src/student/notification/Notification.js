import React, { Suspense, lazy } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core";


const ClassNotification = lazy(() =>
  import("./classNotification/ClassNotification")
);

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography component="div">{children}</Typography>
          </Box>
        )}
      </div>
    );
  }


const useStyles = makeStyles((theme) => ({
    indicator: {
      height: "50px",
      opacity: 0.5,
    },
  }));

  const Notification = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <div>
              <Suspense fallback={<div></div>}>
              <TabPanel value={value} index={0}>
          <ClassNotification />
        </TabPanel>
              </Suspense>
              </div>
  );
};

export default Notification;
