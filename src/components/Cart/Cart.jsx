import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
//custom
import { useCart } from "../../contexts/CartContextProvider";
import { Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { getCart, cart, changeProductCount, deleteProductInCart } = useCart();

  React.useEffect(() => {
    getCart();
  }, []);

  function cartCleaner() {
    localStorage.clear();
    getCart();
  }

  const navigate = useNavigate();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Picture</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Count</TableCell>
            <TableCell align="right">Sub Price</TableCell>
            <TableCell align="right">---</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart?.products.map(row => (
            <TableRow
              key={row.item.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell>
                <img src={row.item.picture} alt="" width="50" />
              </TableCell>
              <TableCell align="right">{row.item.name}</TableCell>
              <TableCell align="right">{row.item.type}</TableCell>
              <TableCell align="right">{row.item.price}</TableCell>
              <TableCell align="right">
                <TextField
                  type="number"
                  value={row.count}
                  onChange={e =>
                    changeProductCount(e.target.value, row.item.id)
                  }
                />
              </TableCell>
              <TableCell align="right">{row.subPrice}</TableCell>
              <TableCell align="right">
                <button onClick={() => deleteProductInCart(row.item.id)}>
                  Delete From Cart
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Typography variant="h6" component="div">
        Total Price: {cart?.totalPrice}
        {/* оплата */}
        <Button
          onClick={() => {
            cartCleaner();
            navigate("/paid");
          }}>
          BUY NOW
        </Button>
      </Typography>
    </TableContainer>
  );
}
