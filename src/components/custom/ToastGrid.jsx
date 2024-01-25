import "tui-grid/dist/tui-grid.css";
import Grid from "@toast-ui/react-grid";

const columns = [
  { name: "id", header: "ID" },
  { name: "name", header: "Name" },
];

const ToastGrid = function (data) {
  data = [
    { id: 1, name: "Editor" },
    { id: 2, name: "Grid" },
    { id: 3, name: "Chart" },
  ];

  return (
    <Grid
      data={data}
      columns={columns}
      rowHeight={25}
      bodyHeight={100}
      heightResizable={true}
      rowHeaders={["rowNum"]}
    />
  );
};

export default ToastGrid;
