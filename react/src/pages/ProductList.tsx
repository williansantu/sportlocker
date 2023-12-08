import { useState } from "react";

import { Button, Container, Grid } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Link } from "react-router-dom";

export default function ProductList(){
    const [products, setProducts] = useState([]);

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
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {products.map((product) => (
                        <TableRow
                        key={product.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {product.name}
                        </TableCell>
                        <TableCell align="right">{product.calories}</TableCell>
                        <TableCell align="right">{product.fat}</TableCell>
                        <TableCell align="right">{product.carbs}</TableCell>
                        <TableCell align="right">{product.protein}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </Grid>
        </Container>
    )
}