// BillingAndAccounts.jsx
import { useState, useEffect } from "react";

import PageHeader from "../components/Layout/PageHeader";
import TableDataGrid from "../components/Tables/TableDataGrid";
import UserSelector from "../components/UserInputs/UserSelector";
import UserDatePicker from "../components/UserInputs/UserDatePicker";
import { getBillingAccounts } from "../services/mt5Service";
import { useAuth } from "../context/AuthContext";
import Loader from "../components/Loader";
import TableNoData from "../components/Tables/TableNoData";

const columns = [
  { field: "col1", headerName: "Account No./Login", flex: 1 },
  { field: "col2", headerName: "Account Size", flex: 1 },
  { field: "col3", headerName: "Profit/Loss", flex: 1 },
  { field: "col4", headerName: "Start Date", flex: 1 },
  {
    field: "col5",
    headerName: "Password",
    flex: 1,
    type: "password",
    sortable: false,
  },
  {
    field: "col6",
    headerName: "Investor Password",
    flex: 1,
    type: "password",
    sortable: false,
  },
  { field: "col7", headerName: "Status", flex: 1 },
  { field: "col8", headerName: "Platform", flex: 1 },
];

const statusOptions = [
  { value: "inactive", label: "Inactive" },
  { value: "active", label: "Active" },
  { value: "breached", label: "Breached" },
  { value: "funded", label: "Funded" },
];

const BillingAndAccounts = () => {
  const [allAccounts, setAllAccounts] = useState([]); // Store all fetched data
  const [rows, setRows] = useState([]); // Filtered and formatted data for display
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [dateValue, setDateValue] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const { user } = useAuth();

  // Fetch data only once when the component mounts
  useEffect(() => {
    const fetchBillingData = async () => {
      setLoading(true);
      try {
        const user_id = user.id;
        const limit = 10; // Adjust as needed
        const skip = 0; // Adjust for pagination if necessary

        const billingData = await getBillingAccounts(user_id, limit, skip);

        setAllAccounts(billingData.billing_accounts); // Store all accounts
      } catch (error) {
        setError(error);
        console.error("Error fetching billing data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBillingData();
  }, [user?.id]); // Only depends on user.id

  // Apply filters whenever selectedStatus or dateValue changes
  useEffect(() => {
    let filteredAccounts = allAccounts;

    // Apply Status Filter if selected
    if (selectedStatus) {
      filteredAccounts = filteredAccounts.filter(
        (account) => account.Status === selectedStatus.value
      );
    }

    // Apply Date Filter if selected
    if (dateValue) {
      const selectedDate = new Date(dateValue).toISOString().split("T")[0];
      filteredAccounts = filteredAccounts.filter((account) => {
        const accountDate = new Date(account["Create Date"])
          .toISOString()
          .split("T")[0];
        return accountDate === selectedDate;
      });
    }

    const formattedRows = filteredAccounts.map((account, index) => {
      const accountSize = account["Account Size"];
      const profitLoss = account["Profit/Loss"];

      // Correct profit by subtracting the account size
      const correctedProfitLoss = profitLoss - accountSize;

      return {
        id: index + 1,
        col1: account.Login,
        col2: `$${accountSize.toLocaleString()}`,
        col3: `$${correctedProfitLoss.toLocaleString()}`,
        col4: account["Create Date"]
          ? new Date(account["Create Date"]).toLocaleDateString()
          : "N/A",
        col5: account.Password,
        col6: account["Investor Password"],
        col7: account.Status,
        col8: account.Platform,
      };
    });

    setRows(formattedRows);
  }, [allAccounts, selectedStatus, dateValue]); // Depends on filters and allAccounts

  const handleStatusSelect = (selectedOption) => {
    setSelectedStatus(selectedOption);
  };

  const handleDateChange = (newValue) => {
    setDateValue(newValue);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col gap-[24px] lg:pt-[76px]">
      <PageHeader title="Billing & Accounts" />
      {error || rows.length === 0 ? (
        <TableNoData
          emptyMessage={
            // error ? "Error loading data" : "No trading accounts available"
            error
              ? "No trading accounts available"
              : "No trading accounts available"
          }
        />
      ) : (
        <>
          <div className="flex gap-4 justify-center w-full lg:justify-start lg:w-[35%]">
            <UserSelector
              options={statusOptions}
              placeholder="Status"
              onSelect={handleStatusSelect}
              isNovaTheme={true}
              value={selectedStatus}
            />
            <UserDatePicker
              value={dateValue}
              onChange={handleDateChange}
              placeholder="Date"
              isNovaTheme={true}
            />
          </div>
          <TableDataGrid rows={rows} columns={columns} height="auto" />
        </>
      )}
    </div>
  );
};

export default BillingAndAccounts;
