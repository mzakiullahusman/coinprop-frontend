import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Chip } from "@mui/material";
import caretUp from "../../assets/icons/caretUp.svg";
import { getChipType } from "../../utils/chipUtils";

const TableDataGridHeading = ({
  heading,
  rows,
  columns,
  height = "80vh",
  width = "100%",
}) => {
  const [isTableVisible, setIsTableVisible] = useState(true);

  const toggleTableVisibility = () => {
    setIsTableVisible(!isTableVisible);
  };

  const renderCellWithChip = (params) => {
    const chipType = getChipType(params.value);
    if (chipType) {
      return (
        <Chip
          label={params.value}
          sx={{
            color: chipType === "positive" ? "#0A761B" : "#F708DF",
            fontFamily: "Arial",
            fontSize: "12px",
            fontWeight: 400,
            background:
              chipType === "positive" ? "#F0FAF4" : "rgba(104, 67, 225, 0.20)",
          }}
        />
      );
    }
    return params.value;
  };

  const modifiedColumns = columns.map((column) => ({
    ...column,
    renderCell: renderCellWithChip,
  }));

  return (
    <div
      style={{
        borderRadius: "12px",
        background: "#11152e",
        color: "white",
        backdropFilter: "blur(1.9px)",
        WebkitBackdropFilter: "blur(1.9px)",
        padding: "24px",
      }}
    >
      <div className="flex justify-between items-center p-3.5">
        <h2 className="text-[24px] font-semibold text-white">{heading}</h2>
        <img
          src={caretUp}
          alt="expand-collapse-icon"
          onClick={toggleTableVisibility}
          style={{
            transform: `rotate(${isTableVisible ? 0 : 180}deg)`,
            transition: "transform 0.3s ease",
            cursor: "pointer",
          }}
        />
      </div>
      {isTableVisible && (
        <div
          style={{
            height,
            width,
          }}
        >
          <DataGrid
            rows={rows}
            columns={modifiedColumns}
            sx={{
              border: "none",
              background: "#040a25",
              color: "white",
              backdropFilter: "blur(1.9px)",
              WebkitBackdropFilter: "blur(1.9px)",
              //   "& .MuiDataGrid-root": {
              //   },
              "& .MuiDataGrid-virtualScroller": {
                borderRadius: "8px !important",
              },
              "& .MuiDataGrid-scrollbarFiller": {
                background: "#2A80B3",
              },
              "& .MuiDataGrid-columnHeader": {
                background: "#2A80B3",
                height: "40px !important",
                paddingBottom: "16px"
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
      )}
    </div>
  );
};

export default TableDataGridHeading;
