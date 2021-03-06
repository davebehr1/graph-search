import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import useStyles from "./TabStyles";
import clsx from "clsx";
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
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export function SimpleTabs({
  background,
  DepthFirstSearch,
  problemAndExample,
  quiz,
  quizDisabled,
}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Tabs
          value={value}
          onChange={handleChange}
          classes={{ indicator: classes.indicator }}
          aria-label="simple tabs example"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab
            className={classes.tab}
            label="DepthFirstSearch"
            {...a11yProps(0)}
          />
          <Tab
            className={classes.tab}
            label="problem and example"
            {...a11yProps(1)}
          />

          <Tab
            className={clsx(classes.tab)}
            label="Quiz"
            {...a11yProps(2)}
            disabled={quizDisabled}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} className={classes.panel}>
        {DepthFirstSearch}
      </TabPanel>

      <TabPanel
        value={value}
        index={1}
        className={classes.examplePanel}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {problemAndExample}
      </TabPanel>
      <TabPanel value={value} index={2} className={classes.panel}>
        {quiz}
      </TabPanel>
    </div>
  );
}
