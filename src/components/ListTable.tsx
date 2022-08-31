import * as React from "react";
// MUI
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
// interface
import { materialTableInfo, materialInfo } from "../const/materialListSetting";
import { cakeTableInfo, cakeInfo } from "../const/cakeListSetting";

// Props
type Props = {
  tableSetting: materialTableInfo[] | cakeTableInfo[];
  itemData: materialInfo[] | cakeInfo[];
  sellHandler?: () => void;
};

const ListTable: React.FC<Props> = ({ tableSetting, itemData, sellHandler }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          {tableSetting.map((column: materialTableInfo | cakeTableInfo) => (
            <TableCell align="center">{column.label}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {itemData.map((item: materialInfo | cakeInfo) => (
          <TableRow key={item.name}>
            {tableSetting.map(
              (column: materialTableInfo | cakeTableInfo, index: number) =>
                column.data === "sell" ? (
                  <TableCell align="center" component="th" scope="row">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={sellHandler}
                    >
                      1つ売る
                    </Button>
                  </TableCell>
                ) : column.data === "refill" ? (
                  <TableCell align="center" component="th" scope="row">
                    <Button
                      variant="contained"
                      color="primary"
                      // onClick={props.refillHandler}
                    >
                      1つ補充する
                    </Button>
                  </TableCell>
                ) : (
                  <TableCell align="center" component="th" scope="row">
                    {item[column.data]}
                  </TableCell>
                )
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ListTable;
