import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';

function createData(marca, modelo, anoFab, anoMod, preco) {
  return { marca, modelo, anoFab, anoMod, preco };
}

const rows = [
  createData("Nissan", "Sentra SL", "2014", "2015", "R$ 58.900,00"),
  createData("Mitsubishi", "Lancer GT", "2012", "2013", "R$ 55.900,00"),
  createData("Honda", "Civic TypeR", "2016", "2016", "R$ 73.900,00"),
  createData("Toyota", "Corolla Altis", "2013", "2014", "R$ 66.900,00"),
  createData("Hyundai", "Sonata", "2014", "2015", "R$ 71.900,00"),
];

const CarsTable = () => {
  return (
    <div style={{ margin: "20px" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 1500 }}>
          <TableHead>
            <TableRow>
              <TableCell>Marca</TableCell>
              <TableCell align="center">Modelo</TableCell>
              <TableCell align="center">Ano de fabricação</TableCell>
              <TableCell align="center">Ano de modelo</TableCell>
              <TableCell align="center">Preço</TableCell>
              <TableCell align="right">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.marca}>
                <TableCell>{row.marca}</TableCell>
                <TableCell align="center">{row.modelo}</TableCell>
                <TableCell align="center">{row.anoFab}</TableCell>
                <TableCell align="center">{row.anoMod}</TableCell>
                <TableCell align="center">{row.preco}</TableCell>
                <TableCell align="right">
                  <Button variant="contained">Editar</Button>
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CarsTable;
