import "./styles.css";
import {
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
  TableHeadCell
} from "./Table/Table";

import { IData } from "./interface/IData";

import { ITableCellRenderProps } from "./Table/interface/ITableCell";

function generateData(count: Number): IData {
  const result = [];

  for (let idx = 1; idx <= count; idx++) {
    result.push({ a: `cell_${idx}_1`, b: `cell_${idx}_2`, c: `cell_${idx}_3` });
  }

  return result;
}

const TABLE_DATA = generateData(10);

function MyContent(props: ITableCellRenderProps) {
  return <span>last-{props.item?.c}</span>;
}

export default function App() {
  return (
    <div className="App">
      <Table
        data={TABLE_DATA}
        columns={[{ width: "1fr" }, { width: "1fr" }, { width: "1fr" }]}
      >
        <TableHead>
          <TableRow>
            <TableHeadCell>
              <div>column "a"</div>
            </TableHeadCell>
            <TableHeadCell>
              <div>column "b"</div>
            </TableHeadCell>
            <TableHeadCell>
              <div>column "c"</div>
            </TableHeadCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow>
            <TableCell displayProperty="a" />
            <TableCell displayProperty="b" />
            <TableCell>
              <MyContent />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
