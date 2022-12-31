import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useEffect, useState } from "react";
import axios from "axios";

export default function StickyHeadTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <Paper className="paper">
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table
          stickyHeader
          aria-label="sticky table"
          sx={{
            textAlign: "center",
          }}
        >
          <TableHead>
            <TableCell
              sx={{
                backgroundColor: "grey",
                color: "white",
              }}
            >
              User Id
            </TableCell>
            <TableCell>ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Completed</TableCell>
          </TableHead>
          {data.slice(0, 20).map((post) => {
            const { userId, id, title, completed } = post;
            return (
              <TableBody>
                <TableRow>
                  <TableCell
                    sx={{
                      backgroundColor: "red",
                    }}
                  >
                    {id}
                  </TableCell>

                  <TableCell
                    sx={{
                      backgroundColor: "yellow",
                    }}
                  >
                    {userId}
                  </TableCell>
                  <TableCell
                    sx={{
                      backgroundColor: "green",
                    }}
                  >
                    {title}
                  </TableCell>
                  <TableCell
                    sx={{
                      backgroundColor: "orange",
                    }}
                  >
                    {completed.toString()}
                  </TableCell>
                </TableRow>
              </TableBody>
            );
          })}
        </Table>
      </TableContainer>
    </Paper>
  );
}
