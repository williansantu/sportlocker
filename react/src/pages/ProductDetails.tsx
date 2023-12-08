import { useState } from "react";

import { Button, Container, Grid } from "@mui/material";
import { useParams } from "react-router-dom";

export default function ProductDetails(){
    const [product, setProduct] = useState({});

    const { id } = useParams()

    return (
        <Container>
            <Grid container>
                <Grid item xs={8}>
                    <h3>Product List</h3>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained">
                        Go to Cart
                    </Button>
                </Grid>
            </Grid>
            <Grid container>
                <h1>Product Detail</h1>
            </Grid>
        </Container>
    )
}