import { useState } from "react";

import { Button, Container, Grid } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Link } from "react-router-dom";
import { ProductService } from "../services/product.service";
import { useQuery } from "react-query";
import IProduct from "../interfaces/product";
import { useCart } from "../contexts/CartContext";

export default function ProductList(){
    const [products, setProducts] = useState([] as IProduct[]);

    const productService = new ProductService()

    const { addToCart } = useCart();

    useQuery({
        queryKey: ['get-products'],
        queryFn: () => productService.get(),
        onSuccess({data}) {
            console.log('products', data)
            setProducts(data)
        }
    })

    function handleAddToCart(product: IProduct){
        addToCart(product)
    }

    return (
        <Container>
            <Grid container>
                <Grid item xs={8}>
                    <h3>Product List</h3>
                </Grid>
                <Grid item xs={4}>
                    <Link to='/cart'>
                        <Button variant="contained">
                            Go to Cart
                        </Button>
                    </Link>
                </Grid>
            </Grid>
            <Grid container>
                <TableContainer>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell align="center">Name</TableCell>
                                <TableCell align="center">Price</TableCell>
                                <TableCell align="center">In Stock</TableCell>
                                <TableCell align="center">Category</TableCell>
                                <TableCell align="center">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {products.map((product) => (
                            <TableRow
                            key={product.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {product.id}
                                </TableCell>
                                <TableCell align="center">{product.name}</TableCell>
                                <TableCell align="center">{product.price}</TableCell>
                                <TableCell align="center">{product.available_stock}</TableCell>
                                <TableCell align="center">{product?.category?.name}</TableCell>
                                <TableCell align="center">
                                    <Grid container justifyContent={"space-around"}>
                                        <Link to={'/product-details/' + product.id}>
                                            <Button variant="text">
                                                View Details
                                            </Button>
                                        </Link>
                                        <Button variant="contained" onClick={() => handleAddToCart(product) }>
                                            Add to Cart
                                        </Button>
                                    </Grid>
                                </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Container>
    )
}