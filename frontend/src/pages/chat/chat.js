/*
Author: Parampal Singh
*/

/* code references
https://mui.com/material-ui/react-avatar/
https://mui.com/material-ui/react-avatar/
https://mui.com/material-ui/material-icons/?query=send&selected=Send
*/
import * as React from "react";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import SendIcon from '@mui/icons-material/Send';
import Fab from '@mui/material/Fab';
import { deepOrange} from '@mui/material/colors';
import { Typography } from "@mui/material";


const gridBorder = {
    borderRight: '1px solid #e0e0e0'
};

const gridMsg = {
    height: '70vh',
    overflowY: 'auto'
};

function Chat() {

    return (
        <div>
            <Grid container component={Card}>
                <Grid item xs={3} sx={gridBorder}>
                    <List>
                        <ListItem button>
                            <ListItemIcon>
                                <Avatar sx={{ bgcolor: deepOrange[500] }} variant="rounded">NG</Avatar>
                            </ListItemIcon>
                            <ListItemText>Neelansh Gulati</ListItemText>
                        </ListItem>
                    </List>
                    <Divider />
                    <Grid item xs={12} style={{ padding: '10px' }}>
                        <TextField label="Search" variant="outlined" fullWidth />
                    </Grid>
                    <Divider />
                    <List>
                        <ListItem button>
                            <ListItemIcon>
                                <Avatar sx={{ bgcolor: "#1976d2" }} variant="rounded">PS</Avatar>
                            </ListItemIcon>
                            <ListItemText>Parampal Singh</ListItemText>
                            <ListItemText secondary="online" align="right"></ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <Avatar sx={{ bgcolor: "#1976d2" }} variant="rounded">JP</Avatar>
                            </ListItemIcon>
                            <ListItemText>Jenish Patel</ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <Avatar sx={{ bgcolor: "#1976d2" }} variant="rounded">FP</Avatar>
                            </ListItemIcon>
                            <ListItemText>Fenil Parmar</ListItemText>
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={9}>
                    <List sx={gridMsg}>
                        <ListItem>
                            <Grid item xs={12} align="right">
                                <Card sx={{ width: 600 }}>Hi, How are you? <Typography sx={{ fontSize: 13 }}>09:30</Typography></Card>
                            </Grid>
                        </ListItem>
                        <ListItem>
                            <Grid item xs={12}>
                                <Card sx={{ width: 600 }}>Hi, I am doing good, What about you?<Typography sx={{ fontSize: 13 }}>09:31</Typography></Card>
                            </Grid>
                        </ListItem>
                        <ListItem>
                            <Grid item xs={12} align="right">
                                <Card sx={{ width: 600 }}>I am doing good too. Can we setup a call to discuss about your company?<Typography sx={{ fontSize: 13 }}>09:38</Typography></Card>
                            </Grid>
                        </ListItem>
                    </List>
                    <Divider />
                    <Grid container style={{ padding: '15px' }}>
                        <Grid item xs={11}>
                            <TextField label="Message" fullWidth />
                        </Grid>
                        <Grid xs={1} align="right">
                            <Fab color="primary" aria-label="add"><SendIcon /></Fab>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default Chat;
