import { useState } from "react";

import { Button, Container, Grid } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { ProductService } from "../services/product.service";
import { useCart } from "../contexts/CartContext";
import IProduct from "../interfaces/product";

export default function ProductDetails(){
    const [product, setProduct] = useState({} as IProduct);
    
    const productService = new ProductService()

    const { id } = useParams()

    const { addToCart } = useCart();

    useQuery({
        queryKey: ['get-product'],
        queryFn: async () => await productService.find(id),
        onSuccess({data}) {
            setProduct(data)
        }
    })

    function handleAddToCart(product: IProduct){
        addToCart(product)
    }

    return (
        <Container>
            <Grid container>
                <Grid item xs={12} textAlign={'center'}>
                    <Link to='/'>
                        <Button variant="text">
                            Back to Products
                        </Button>
                    </Link>
                </Grid>
            </Grid>
            <Grid container>
                {product && (
                    <Grid item xs={12} textAlign={'center'}>
                        <h1>{product?.name}</h1>
                        <h3>{product?.price}</h3>
                        <h3>{product?.category?.name}</h3>
                        <Button variant="contained" onClick={() => handleAddToCart(product) }>
                            Add to Cart
                        </Button>
                    </Grid>
                )}
            </Grid>
        </Container>
    )
}