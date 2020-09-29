import React from "react";
import {
  makeStyles,
  Card,
  CardActions,
  CardContent,
  Typography,
  Switch,
  Slider,
  MenuItem,
  FormControl,
  Select,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 275,
    height: 200,
    minWidth: 250,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  pos: {
    marginBottom: 12,
  },
  formControl: {
    minWidth: 260,
  },
});

export default function DashboardComp() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });
  const [value, setValue] = React.useState("");
  const [quality, setQuality] = React.useState(2);
  const [notification, setNotification] = React.useState({
    switch: "",
    slider: "",
    select: "",
  });

  const handleOnlineChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    if (!event.target.checked) {
      setNotification({
        ...notification,
        switch:
          "Your application is offline. You won't be able to share or stream music to other devices.",
      });
    } else {
      setNotification({ ...notification, switch: "" });
    }
  };

  const handleVolChange = (event, newValue) => {
    setValue(newValue);
    if (newValue > 80) {
      setNotification({
        ...notification,
        slider:
          "Listening to music at a high volume could cause long-term hearing loss.",
      });
    } else {
      setNotification({ ...notification, slider: "" });
    }
  };

  const handleQualityChange = (event) => {
    setQuality(event.target.value);
    if (event.target.value === 1) {
      setNotification({
        ...notification,
        select:
          "Music quality is degraded. Increase quality if your connection allows it.",
      });
    } else {
      setNotification({ ...notification, select: "" });
    }
  };

  return (
    <div>
      <Typography variant="h4" className={classes.userText}>
        Welcome User!
      </Typography>
      <Box
        component="span"
        m={20}
        display="flex "
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-evenly"
      >
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Online Mode
            </Typography>
            <Typography>
              is this application connected to the internet?
            </Typography>
          </CardContent>
          <CardActions>
            <Switch
              checked={state.checkedA}
              onChange={handleOnlineChange}
              name="checkedA"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Master Volume
            </Typography>
            <Typography>
              Overrides all other sound settings in this application
            </Typography>
          </CardContent>
          <CardActions>
            <Slider
              Value={value}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              onChange={handleVolChange}
              step={10}
              marks
              min={0}
              max={100}
            />
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Sound Quality
            </Typography>
            <Typography>
              Manually control the music quality in event of poor connection
            </Typography>
          </CardContent>
          <CardActions>
            <FormControl className={classes.formControl}>
              <Select value={quality} onChange={handleQualityChange}>
                <MenuItem value={1}>Low</MenuItem>
                <MenuItem value={2}>Normal</MenuItem>
                <MenuItem value={3}>High</MenuItem>
              </Select>
            </FormControl>
          </CardActions>
        </Card>
        <Typography variant="h5" className={classes.userText}>
          System Notifications:
          <Typography>{notification.switch}</Typography>
          <Typography>{notification.slider}</Typography>
          <Typography>{notification.select}</Typography>
        </Typography>
      </Box>
    </div>
  );
}
