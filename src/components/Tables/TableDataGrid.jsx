import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Chip } from "@mui/material";
import PasswordCell from "./PasswordCell";
import { getChipType } from "../../utils/chipUtils";

const TableDataGrid = ({ rows, columns, height = "80vh", width = "100%" }) => {
  const renderCell = (params) => {
    if (params.colDef.type === "password") {
      return <PasswordCell value={params.value} />;
    }

    const chipType = getChipType(params.value);
    if (chipType) {
      return (
        <Chip
          label={params.value}
          sx={{
            color: chipType === "active" ? "#0A761B" : "#F708DF",
            fontFamily: "Arial",
            fontSize: "12px",
            textTransform: "Capitalize",
            fontWeight: 400,
            background:
              chipType === "active" ? "#F0FAF4" : "rgba(104, 67, 225, 0.20)",
          }}
        />
      );
    }

    return params.value;
  };

  const modifiedColumns = columns.map((column) => ({
    ...column,
    renderCell,
  }));

  return (
    <div style={{ height, width }}>
      <DataGrid
        rows={rows}
        columns={modifiedColumns}
        // pagination
        // pageSize={10}
        // rowsPerPageOptions={[10, 20, 50]}
        sx={{
          border: "none",
          background: "#040a25",
          color: "white",
          backdropFilter: "blur(1.9px)",
          WebkitBackdropFilter: "blur(1.9px)",
          "& .MuiDataGrid-virtualScroller": {
            borderRadius: "8px !important",
          },
          "& .MuiDataGrid-scrollbarFiller": {
            background: "#2A80B3",
          },
          "& .MuiDataGrid-columnHeader": {
            background: "#2A80B3",
            height: "40px !important",
          },
          "& .MuiDataGrid-columnHeaders": {
            background: "#2A80B3",
            height: "55px",
            paddingY: "16px"
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            background: "#2A80B3",
            lineHeight: "40px",
          },
          "& .MuiDataGrid-columnHeaderTitleContainer": {
            background: "#2A80B3",
            height: "40px",
          },
          "& .MuiDataGrid-columnHeaderDraggableContainer": {
            height: "40px",
            background: "#2A80B3",
            color: "white",
            display: "flex",
            alignItems: "center",
            fontSize: "18px",
            fontWeight: 400
          },
          "& .MuiDataGrid-cell": {
            color: "white",
            borders: "none",
            display: "flex",
            alignItems: "center",
          },
          "& .MuiDataGrid-row": {
            borderBottom: "1px solid #2A80B3",
            fontSize: "14px",
          },
          "& .MuiTablePagination-root": {
            color: "white",
          },
          "& .MuiDataGrid-footerContainer, MuiDataGrid-withBorderColor": {
            borderTop: "none",
          },
          "& .MuiButtonBase-root, .MuiSvgIcon-root": {
            color: "white"
          },
          "& .MuiSelect-select-MuiInputBase-input": { fontSize: "12px" },
        }}
      />
    </div>
  );
};

export default TableDataGrid;
