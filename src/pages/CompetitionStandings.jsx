import BasicInfoCard from "../components/Cards/BasicInfoCard";
import { SingleLineAreaChart } from "../components/Charts";
import PageHeader from "../components/Layout/PageHeader";
import TableDataGridHeading from "../components/Tables/TableDataGridHeading";
import TableDataGridHeadingFilters from "../components/Tables/TableDataGridHeadingFilters";

const rowsCompetitions = [
  {
    id: 1,
    col1: "Top Funded Trader",
    col2: "Bessie Cooper",
    col3: "19.47%",
    col4: "30%",
    col5: "$1,000",
  },
  {
    id: 2,
    col1: "2nd Place",
    col2: "Bessie Cooper",
    col3: "19.47%",
    col4: "30%",
    col5: "$1,000",
  },
  {
    id: 3,
    col1: "3rd Place",
    col2: "Bessie Cooper",
    col3: "19.47%",
    col4: "30%",
    col5: "$1,000",
  },
  {
    id: 4,
    col1: "4th Place",
    col2: "Bessie Cooper",
    col3: "19.47%",
    col4: "30%",
    col5: "$1,000",
  },
  {
    id: 5,
    col1: "5th Place",
    col2: "Bessie Cooper",
    col3: "19.47%",
    col4: "30%",
    col5: "$1,000",
  },
  {
    id: 6,
    col1: "6th Place",
    col2: "Bessie Cooper",
    col3: "19.47%",
    col4: "30%",
    col5: "$1,000",
  },
];

const rowsTrades = [
  {
    id: 1,
    col1: "15 May 2020 8:30 am",
    col2: "$1,000",
    col3: "15 May 2020 8:30 am",
    col4: "-$1,746.03",
    col5: "Self",
    col6: "GBPJPY",
    col7: "20.00",
    col8: "$1,746.03",
  },
  {
    id: 2,
    col1: "15 May 2020 8:30 am",
    col2: "$1,000",
    col3: "15 May 2020 8:30 am",
    col4: "-$1,746.03",
    col5: "Self",
    col6: "GBPJPY",
    col7: "20.00",
    col8: "$1,746.03",
  },
  {
    id: 3,
    col1: "15 May 2020 8:30 am",
    col2: "$1,000",
    col3: "15 May 2020 8:30 am",
    col4: "-$1,746.03",
    col5: "Self",
    col6: "GBPJPY",
    col7: "20.00",
    col8: "$1,746.03",
  },
  {
    id: 4,
    col1: "15 May 2020 8:30 am",
    col2: "$1,000",
    col3: "15 May 2020 8:30 am",
    col4: "-$1,746.03",
    col5: "Self",
    col6: "GBPJPY",
    col7: "20.00",
    col8: "$1,746.03",
  },
  {
    id: 5,
    col1: "15 May 2020 8:30 am",
    col2: "$1,000",
    col3: "15 May 2020 8:30 am",
    col4: "-$1,746.03",
    col5: "Self",
    col6: "GBPJPY",
    col7: "20.00",
    col8: "$1,746.03",
  },
  {
    id: 6,
    col1: "15 May 2020 8:30 am",
    col2: "$1,000",
    col3: "15 May 2020 8:30 am",
    col4: "-$1,746.03",
    col5: "Self",
    col6: "GBPJPY",
    col7: "20.00",
    col8: "$1,746.03",
  },
];

const columnsCompetitions = [
  { field: "col1", headerName: "Rank", flex: 1 },
  { field: "col2", headerName: "Name", flex: 1 },
  { field: "col3", headerName: "Return %", flex: 1 },
  { field: "col4", headerName: "% Back from 1st place", flex: 1 },
  { field: "col5", headerName: "Prize", flex: 1 },
];

const columnsTrades = [
  { field: "col1", headerName: "Open Time", flex: 1 },
  { field: "col2", headerName: "Open Price", flex: 1 },
  { field: "col3", headerName: "Close Time", flex: 1 },
  { field: "col4", headerName: "Close Price", flex: 1 },
  { field: "col5", headerName: "Type", flex: 1 },
  { field: "col6", headerName: "Symbol", flex: 1 },
  { field: "col7", headerName: "Volume", flex: 1 },
  { field: "col8", headerName: "Profit", flex: 1 },
];

const CompetitionStandings = () => {
  const handleSelectOne = (selectedOption) => {
    console.log(selectedOption);
  };

  return (
    <>
      <div className="flex flex-col gap-[16px] lg:pt-[76px]">
        <div id="info-cards" className="flex gap-4 flex-wrap md:flex-nowrap">
          <BasicInfoCard
            title="Finished"
            body="$300,000.00"
            isBrandBorder={true}
          />
          <BasicInfoCard title="Prize Pool" body="$306,000.79" />
          <BasicInfoCard title="Remaining Contestants" body="$8,000.84" />
          <BasicInfoCard title="Current Leader" body="Bessie Cooper" />
        </div>
        <TableDataGridHeading
          heading="Competition Standings"
          rows={rowsCompetitions}
          columns={columnsCompetitions}
          height="auto"
        />
        <PageHeader title="Competition Dashboard" />
        <div
          id="info-cards-chart"
          className="w-full flex justify-center lg:justify-between gap-4 flex-wrap lg:flex-nowrap"
        >
          <div
            id="info-cards"
            className="flex flex-col gap-2 w-full md:w-[47%] lg:w-[40%]"
          >
            <div className="flex justify-center gap-2">
              <BasicInfoCard
                title="Current Equity"
                body="$300,000.00"
                isBrandBorder={true}
              />
              <BasicInfoCard title="Current Balance" body="$306,000.79" />
            </div>
            <div className="flex justify-center gap-2">
              <BasicInfoCard title="Cumulative PnL" body="$306,000.79" />
              <BasicInfoCard title="% Return" body="$300,000.00" />
            </div>
            <div className="flex justify-center gap-2">
              <BasicInfoCard title="Highest Rank" body="$300,000.00" />
              <BasicInfoCard title="Most Traded Product" body="$306,000.79" />
            </div>
            <div className="flex justify-center gap-2">
              <BasicInfoCard title="Win Rate" body="$300,000.00" />
              <BasicInfoCard title="Loss Rate" body="$306,000.79" />
            </div>
          </div>
          <div className="w-full md:w-[47%] lg:w-[55%]">
            <SingleLineAreaChart />
          </div>
        </div>
        <TableDataGridHeadingFilters
          selectOnePlaceholder="Trader Name"
          selectOneOptions={["Bessie Cooper", "Option 2"]}
          selectOneHandler={handleSelectOne}
          heading="Closed Trades"
          rows={rowsTrades}
          columns={columnsTrades}
          height="auto"
        />
      </div>
    </>
  );
};

export default CompetitionStandings;
