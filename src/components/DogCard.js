import React from "react";
import { Card, CardMedia, Grid, Button, CardActions } from '@mui/material';


const DogCard = ({
    ImageUri,
    ModalHandler,
    CanOpenModal = true
}) => {


    return (
        <Grid item xs={7} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 300, alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
                <CardMedia
                    component="img"
                    src={ImageUri}
                    sx={{ height: 200 }}
                    onLoad={()=>{}}
                />
                {CanOpenModal
                    ?
                    <CardActions>
                        <Button onClick={() => ModalHandler(ImageUri)} size="small">Learn More</Button>
                    </CardActions>
                    :
                    null
                }

            </Card>
        </Grid>
    );
};

export default DogCard;