import React, { lazy } from "react";
import { Card, CardMedia, Grid, Button, CardActions } from '@mui/material';


const DogCard = ({
    ImageUri,
    index
}) => {
    return (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card sx={{ maxWidth: 300, alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
                <CardMedia
                    component="img"
                    src={ImageUri}
                    sx={{ height: 200 }}
                    loading={lazy}
                />
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default DogCard;