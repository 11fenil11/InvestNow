// Author: Neelash Gulati
import StripeCheckout from 'react-stripe-checkout';
import { PayPalButton } from "react-paypal-button-v2";
import * as React from "react";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

// code reference: https://bobbyhadz.com/blog/react-center-div#:~:text=js%2C%20set%20its%20display%20property,be%20horizontally%20and%20vertically%20centered.

// code reference: https://www.npmjs.com/package/react-stripe-checkout  
// code reference: https://www.npmjs.com/package/react-paypal-button-v2 
function Stripe() {
    const tokenHandler = (token) => {
        console.log(token)
    }

    return (
        <div>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
            >
                <List>
                    <ListItem >
                        <Grid item>
                            <Card style={{ padding: '100px' }}>
                                <h4>Pay via Stripe!</h4>
                                <StripeCheckout
                                    stripeKey='pk_test_51KhfkiByi271jMp51eppuRvS61Dux0FO8MtUxcdlTm7Z2NR9ETgwbXUfLFeRkKl03TDQyFAXdNXe2knKazuDxHgw00FXpYcFEP'
                                    name="Stripe Payment"
                                    currency="CAD"
                                    amount="80900000"
                                    token={tokenHandler}
                                />
                            </Card>
                        </Grid>
                    </ListItem>
                    <ListItem>
                        <Grid item xs={12}>
                            <Card style={{ padding: '60px' }}>
                                <PayPalButton
                                    amount='809000'
                                    onSuccess={(details, data) => {
                                        alert("Transaction completed by " + details.payer.name.given_name);
                                    }}
                                    options={{
                                        clientId: "AfpljKUH7vOb3_rlggFawZCv0IPshPnZektATtuQFvZictOnP59IN1hrkLFma4cLlj-l4z5kG6PzT2JF"
                                    }}
                                />
                            </Card>
                        </Grid>
                    </ListItem>
                </List>
            </Box>
        </div>
    );
}

export default Stripe;
