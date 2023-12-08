import { Button, Container, Grid } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useCart } from "../contexts/CartContext";
import { Link } from "react-router-dom";

export default function Cart(){
    const { cartItems, clearCart } = useCart();

    function handleClearCart() {
        clearCart()
    }

    return (
        <Container>
            <Grid container>
                <Grid item xs={8}>
                    <h3>Cart</h3>
                </Grid>
                <Grid item xs={2}>
                    <Link to="/">
                        <Button variant="contained">
                            Back to Products
                        </Button>
                    </Link>
                </Grid>
                <Grid item xs={2}>
                    <Button variant="contained" color="error" onClick={handleClearCart}>
                        Clear Cart
                    </Button>
                </Grid>
            </Grid>
            <Grid container>
                <TableContainer>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>id</TableCell>
                                <TableCell align="center">Name</TableCell>
                                <TableCell align="center">Price</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {cartItems.map((item) => (
                            <TableRow key={item.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">{item.id}</TableCell>
                                <TableCell align="center">{item.name}</TableCell>
                                <TableCell align="center">{item.price}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Container>
    )
}