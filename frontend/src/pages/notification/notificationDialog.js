//Author: Parampal Singh
//Reference: https://git.cs.dal.ca/shah3/group22_tutorly/-/blob/main/frontend/src/components/notificationDialog.js

import * as React from "react";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Tab from "@mui/material/Tab";
import AppBar from "@mui/material/AppBar";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Switch from "@mui/material/Switch";
import { Alert, Checkbox, Snackbar } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
import Tooltip from "@mui/material/Tooltip";
import Grid from "@mui/material/Grid";
import AddNotification from "./AddNotification";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import moment from "moment";
import io from "socket.io-client";
import axios from "axios";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const link = "https://investnow-backend.herokuapp.com";
const socket = io.connect(link);

function NotificationDialog(props) {
    const [updateNotification, setUpdateNotification] = React.useState(false);
    const [tabValue, setTabValue] = React.useState("1");
    const [sendNotify, setSendNotify] = React.useState(false);
    const [allNotifications, setAllNotifications] = React.useState([]);

    const handleCloseSnackbar = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setUpdateNotification(false);
    };

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const [open, setOpen] = React.useState(false);

    const handleCreateNotification = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCloseSendNotifySnackbar = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setSendNotify(false);
    };

    const [isNotificationOn, setIsNotificationOn] = React.useState(true);

    const getNotificationData = async () => {
        const notifications = await axios.get(link +"/notification/");      
        setAllNotifications(notifications.data.notification);
    }


    React.useEffect(() => {
        getNotificationData();
        
        socket.on("receive_notification", (data) => {
            getNotificationData();
        });

    }, []);

    const updatePreference = async (value) => {
        setIsNotificationOn(!value);
        setUpdateNotification(true);
    };

    const [toastMsg, setToastMsg] = React.useState("");
    const [hPosition, setHPosition] = React.useState("left");
    const [msgType, setMsgType] = React.useState("success");

    return (
        <div>
            <AddNotification open={open} handleClose={handleClose} setSendNotify={setSendNotify} setToastMsg={setToastMsg} setHPosition={setHPosition} setMsgType={setMsgType} />
            <Snackbar anchorOrigin={{ vertical: "bottom", horizontal: hPosition }} autoHideDuration={4000} open={sendNotify} onClose={handleCloseSendNotifySnackbar}>
                <Alert color="primary" variant="filled" severity={msgType}>
                    {toastMsg}
                </Alert>
            </Snackbar>
            <Dialog fullScreen open={props.open} onClose={props.handleClose} TransitionComponent={Transition}>
                <AppBar color="primary" position="sticky" elevation={0}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={props.handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            Notifications
                        </Typography>
                        <Typography>Off</Typography>
                        <Switch
                            // defaultChecked
                            color="default"
                            checked={isNotificationOn}
                            onClick={() => updatePreference(isNotificationOn)}
                            inputProps={{ "aria-label": "controlled" }}
                        />
                        <Snackbar autoHideDuration={4000} open={updateNotification} onClose={handleCloseSnackbar}>
                            <Alert color="primary" variant="filled" severity="success">
                                Notification preference updated successfully!
                            </Alert>
                        </Snackbar>
                        <Typography>On</Typography>

                        {
                            <Grid item>
                                <Tooltip title="Create Notifications">
                                    <IconButton color="inherit" onClick={handleCreateNotification}>
                                        <NotificationAddIcon />
                                    </IconButton>
                                </Tooltip>
                            </Grid>
                        }
                    </Toolbar>
                </AppBar>
                <TabContext value={tabValue}>
                    <AppBar component="div" position="static" elevation={0} sx={{ zIndex: 0 }}>
                        <TabList onChange={handleTabChange} textColor="inherit">
                            <Tab label="All Notifications" value="1" />
                            <Tab label="Starred" value="2" />
                            <Tab label="Sent Notifications" value="3" />
                        </TabList>
                    </AppBar>
                    {isNotificationOn && (
                        <TabPanel value="1">
                            {allNotifications.map((msg, idx) => (
                                <List>
                                    <ListItem button>
                                        <Checkbox
                                            checkedIcon={<StarIcon />}
                                            icon={<StarBorderIcon />}
                                            defaultChecked
                                        />
                                        <ListItemText primary={msg.type} secondary={msg.text} />
                                        <ListItemSecondaryAction>
                                            <Typography color="textSecondary" variant="body2">
                                                {moment(msg.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
                                            </Typography>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                    <Divider />
                                </List>
                            ))}
                        </TabPanel>
                    )}
                    <TabPanel value="2">
                        {
                            <List>
                                <ListItem button>
                                    <Checkbox
                                        checkedIcon={<StarIcon />}
                                        icon={<StarBorderIcon />}
                                        defaultChecked
                                    />
                                    <ListItemText primary="Information" secondary="New Opportunity" />
                                    <ListItemSecondaryAction>
                                        <Typography color="textSecondary" variant="body2">
                                            {moment().format("MMMM Do YYYY, h:mm:ss a")}
                                        </Typography>
                                    </ListItemSecondaryAction>
                                </ListItem>
                                <Divider />
                            </List>
                        }
                    </TabPanel>
                    {(
                        <TabPanel value="3">
                            {
                                <List>
                                    <ListItem button>
                                        <ListItemText primary="Information" secondary="New Opportunity" />
                                        <ListItemSecondaryAction>
                                            <Typography color="textSecondary" variant="body2">
                                                {moment().format("MMMM Do YYYY, h:mm:ss a")}
                                            </Typography>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                    <Divider />
                                </List>
                            }
                        </TabPanel>
                    )}
                </TabContext>
            </Dialog>
        </div>
    );
}

export default NotificationDialog;
