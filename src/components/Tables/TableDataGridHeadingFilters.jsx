import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Chip } from "@mui/material";
import caretUp from "../../assets/icons/caretUp.svg";
import { getChipType } from "../../utils/chipUtils";
import UserSearchField from "../UserInputs/UserSearchField";
import UserSelector from "../UserInputs/UserSelector";
import UserDatePicker from "../UserInputs/UserDatePicker";
import UserTimePicker from "../UserInputs/UserTimePicker";

const TableDataGridHeadingFilters = ({
  selectOneOptions,
  selectOnePlaceholder = "Select",
  selectOneHandler,
  selectTwoOptions,
  selectTwoPlaceholder = "Select",
  selectTwoHandler,
  dateValue,
  dateHandler,
  datePlaceholder = "Select Date",
  timeValue,
  timeHandler,
  timePlaceholder = "Select Time",
  timeValueTwo,
  timeHandlerTwo,
  timePlaceholderTwo = "Select Time",
  heading,
  rows,
  columns,
  height = "80vh",
  width = "100%",
}) => {
  const [isTableVisible, setIsTableVisible] = useState(true);
  const [isTimeDiv, setIsTimeDiv] = useState(false);

  const toggleTableVisibility = () => {
    setIsTableVisible(!isTableVisible);
  };

  const renderCellWithChip = (params) => {
    const chipType = getChipType(params.value);
    if (chipType) {
      return (
        <Chip
          label={params.value}
          variant="outlined"
          sx={{
            color: chipType === "positive" ? "#0A761B" : "#C51918",
            fontFamily: "Arial",
            fontSize: "12px",
            fontWeight: 400,
            background: chipType === "positive" ? "#F0FAF4" : "#D974F3",
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

  const countFields = () => {
    let count = 0;
    let timefieldCount = 0;
    if (selectOneOptions?.length > 0) count++;
    if (selectTwoOptions?.length > 0) count++;
    if (dateHandler) count++;
    if (timeHandler) {
      count++;
      timefieldCount++;
    }
    if (timeHandlerTwo) {
      count++;
      timefieldCount++;
    }

    return { count, timefieldCount };
  };

  const { count, timefieldCount } = countFields();

  let fieldWidth = "70%";
  if (count === 1) {
    fieldWidth = "25%";
  } else if (count === 2) {
    fieldWidth = "50%";
  }

  useEffect(() => {
    if (timefieldCount === 2) {
      setIsTimeDiv(true);
    } else {
      setIsTimeDiv(false);
    }
  }, [timefieldCount]);

  return (
    <div
      className="p-8 border border-custom-border bg-sidebar text-white rounded-2xl"
      style={{
        backdropFilter: "blur(1.9px)",
        WebkitBackdropFilter: "blur(1.9px)",
        // padding: "24px",
      }}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-[28px] text-white">{heading}</h2>
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
      <div className="flex flex-wrap lg:flex-nowrap justify-between gap-2 lg:gap-8 items-center my-[15px] lg:my-[35px]">
        <div
          className={`w-full lg:w-[${fieldWidth}] flex flex-wrap sm:flex-nowrap gap-4 items-center`}
        >
          {selectOneOptions?.length > 0 && (
            <UserSelector
              options={selectOneOptions}
              placeholder={selectOnePlaceholder}
              onSelect={selectOneHandler}
            />
          )}
          {selectTwoOptions?.length > 0 && (
            <UserSelector
              options={selectTwoOptions}
              placeholder={selectTwoPlaceholder}
              onSelect={selectTwoHandler}
            />
          )}
          {dateHandler && (
            <UserDatePicker
              value={dateValue}
              onChange={dateHandler}
              placeholder={datePlaceholder}
            />
          )}
          <div
            className={` ${
              isTimeDiv
                ? "flex justify-between gap-4 sm:gap-2 items-center"
                : ""
            }`}
          >
            {timeHandler && (
              <UserTimePicker
                value={timeValue}
                onChange={timeHandler}
                placeholder={timePlaceholder}
              />
            )}
            {timeHandlerTwo && (
              <UserTimePicker
                value={timeValueTwo}
                onChange={timeHandlerTwo}
                placeholder={timePlaceholderTwo}
              />
            )}
          </div>
        </div>
        <div className="w-full lg:w-[25%]">
          <UserSearchField />
        </div>
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
              background: "#182230",
              color: "black",
              backdropFilter: "blur(1.9px)",
              WebkitBackdropFilter: "blur(1.9px)",
              //   "& .MuiDataGrid-root": {
              //   },
              "& .MuiDataGrid-virtualScroller": {
                borderTopLeftRadius: "8px !important",
                borderTopRightRadius: "8px !important",
              },
              "& .MuiDataGrid-scrollbarFiller": {
                background: "#01FF9D",
              },
              "& .MuiDataGrid-columnHeader": {
                background: "#01FF9D",
                height: "40px !important",
                paddingBottom: "16px",
              },
              "& .MuiDataGrid-columnHeaders": {
                background: "#01FF9D",
                height: "55px",
                paddingY: "16px",
              },
              "& .MuiDataGrid-columnHeaderTitle": {
                background: "#01FF9D",
                lineHeight: "40px",
              },
              "& .MuiDataGrid-columnHeaderTitleContainer": {
                background: "#01FF9D",
                height: "40px",
              },
              "& .MuiDataGrid-columnHeaderDraggableContainer": {
                height: "40px",
                background: "#01FF9D",
                color: "black",
                display: "flex",
                alignItems: "center",
                fontSize: "1rem",
                fontWeight: 400,
              },
              "& .MuiDataGrid-cell": {
                color: "white",
                borders: "none",
              },
              "& .MuiDataGrid-row": {
                borderBottom: "1px solid #D974F3",
                fontSize: "14px",
              },
              "& .MuiTablePagination-root": {
                color: "white",
              },
              "& .MuiDataGrid-footerContainer, MuiDataGrid-withBorderColor": {
                borderTop: "none",
              },
              "& .MuiButtonBase-root, .MuiSvgIcon-root": {
                color: "white",
              },
              "& .MuiSelect-select-MuiInputBase-input": { fontSize: "12px" },
            }}
          />
        </div>
      )}
    </div>
  );
};

export default TableDataGridHeadingFilters;
