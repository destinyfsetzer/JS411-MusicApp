import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";
import Slider from "@material-ui/core/Slider";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  root: {
    width: 275,
    height: 200,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
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
  const [quality, setQuality] = React.useState("");

  const handleOnlineChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleVolChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleQualityChange = (event) => {
    setQuality(event.target.value);
  };

  return (
    <div>
      <Box
        component="span"
        m={20}
        display="flex "
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
      </Box>
    </div>
  );
}
