// AffiliatesPortal.jsx

import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  affiliateResults,
  affiliateReferredClient,
} from "../services/userService";
import { getAffiliateWithdrawals } from "../services/withdrawalService";
import affiliateBg from "../assets/images/affiliateBg.png";
import AffiliateHeroCard from "../components/PageHeroCards/AffiliateHeroCard";
import TableDataGrid from "../components/Tables/TableDataGrid";
import PageHeader from "../components/Layout/PageHeader";
import BasicInfoCardPlus from "../components/Cards/BasicInfoCardPlus";
import BasicInfoCard from "../components/Cards/BasicInfoCardPlus";
import Loader from "../components/Loader";
import TableNoData from "../components/Tables/TableNoData";

const columnsClients = [
  { field: "col1", headerName: "Client’s Name", flex: 1 },
  { field: "col2", headerName: "Order ID", flex: 1 },
  { field: "col3", headerName: "Amount", flex: 1 },
  { field: "col4", headerName: "Purchase Date", flex: 1 },
  { field: "col5", headerName: "Plan Purchased", flex: 1 },
  { field: "col6", headerName: "Affiliate Commission", flex: 1 },
  { field: "col7", headerName: "Affiliate Rate", flex: 1 },
  { field: "col8", headerName: "Date", flex: 1 },
];

const columnsPayout = [
  { field: "col1", headerName: "Reference", flex: 1 },
  { field: "col2", headerName: "Amount", flex: 1 },
  { field: "col3", headerName: "Status", flex: 1 },
  { field: "col4", headerName: "Date", flex: 1 },
];

const AffiliatesPortal = () => {
  const [affiliateData, setAffiliateData] = useState({
    last30Days: { referrals: 0, visits: 0, conversionRate: "0" },
    allTime: {
      referrals: 0,
      visits: 0,
      conversionRate: "0",
      paidReferrals: "0",
      paidEarnings: "0",
      unpaidEarnings: "0",
    },
  });

  const [clientsReferred, setClientsReferred] = useState([]);
  const [payoutRequests, setPayoutRequests] = useState([]);
  const [errorAffiliate, setErrorAffiliate] = useState(null);
  const [errorClients, setErrorClients] = useState(null);
  const [errorPayouts, setErrorPayouts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseResults = await affiliateResults();
        if (responseResults.success) {
          const { last30Days = {}, allTime = {} } = responseResults.data;
          setAffiliateData({
            last30Days: {
              referrals: last30Days.referrals || 0,
              visits: last30Days.visits || 0,
              conversionRate: last30Days.conversionRate || "0",
            },
            allTime: {
              referrals: allTime.referrals || 0,
              visits: allTime.visits || 0,
              conversionRate: allTime.conversionRate || "0",
              paidReferrals: allTime.paidReferrals || 0,
              paidEarnings: allTime.paidEarnings || 0,
              unpaidEarnings: allTime.unpaidEarnings || 0,
            },
          });
        } else {
          setErrorAffiliate("Failed to fetch affiliate results.");
        }
      } catch (error) {
        setErrorAffiliate(
          "Failed to fetch affiliate results. Please try again."
        );
      }

      try {
        const responseReferred = await affiliateReferredClient();
        if (responseReferred.success) {
          const apiClients = responseReferred.data;
          const referredUsers = apiClients.flatMap(
            (client) => client.referredUserID
          );
          let idCounter = 1;
          const mappedClients = referredUsers.flatMap((user) => {
            if (user.payments && user.payments.length > 0) {
              return user.payments.map((payment) => ({
                id: idCounter++,
                col1: `${user.firstName} ${user.lastName}` || "-",
                col2: payment.orderID || "-",
                col3: `$${parseFloat(payment.amount).toLocaleString()}` || "$0",
                col4: new Date(payment.purchaseDate).toLocaleString() || "-",
                col5: payment.planPurchased || "-",
                col6:
                  `$${parseFloat(user.affiliateCommission).toLocaleString()}` ||
                  "$0",
                col7: user.affiliateRate || "0%",
                col8: new Date(user.created_at).toLocaleString() || "-",
              }));
            } else {
              return {
                id: idCounter++,
                col1: `${user.firstName} ${user.lastName}` || "-",
                col2: "-",
                col3: "-",
                col4: "-",
                col5: "-",
                col6:
                  `$${parseFloat(user.affiliateCommission).toLocaleString()}` ||
                  "$0",
                col7: user.affiliateRate || "0%",
                col8: new Date(user.created_at).toLocaleString() || "-",
              };
            }
          });

          setClientsReferred(mappedClients);
        } else {
          setErrorClients("Failed to fetch referred clients.");
        }
      } catch (error) {
        setErrorClients("Failed to fetch referred clients. Please try again.");
      }

      try {
        const responseWithdrawals = await getAffiliateWithdrawals();
        if (responseWithdrawals.success) {
          const apiWithdrawals = responseWithdrawals.withdrawals;
          let idCounter = 1;
          const mappedWithdrawals = apiWithdrawals.map((withdrawal) => ({
            id: idCounter++,
            col1: withdrawal._id || "-",
            col2:
              `$${parseFloat(withdrawal.withdrawalAmount).toLocaleString()}` ||
              "$0",
            col3: withdrawal.status || "-",
            col4: new Date(withdrawal.created_at).toLocaleString() || "-",
          }));

          setPayoutRequests(mappedWithdrawals);
        } else {
          setErrorPayouts("Failed to fetch payout requests.");
        }
      } catch (error) {
        setErrorPayouts("Failed to fetch payout requests. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full">
        <Loader />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-[24px] lg:pt-[10px]">
      <AffiliateHeroCard
        title="Affiliate Section"
        description="Here you can withdraw your accepted Affiliate Commissions and find the history of your payouts. All Referrals are reviewed by the 15th of the following month."
        bgImage={affiliateBg}
        lineBreakAfterPeriod={true}
      />
      {/* Last 30 Days Summary */}
      <div className="lg:mt-[12px]">
        <PageHeader title="Last 30 Days" />
      </div>
      <div className="flex w-full flex-wrap lg:flex-nowrap gap-4 ">
        <BasicInfoCardPlus
          title="Referrals"
          body={affiliateData.last30Days.referrals}
          // differenceAmount="(1.23%)"
          isPlainBorder={true}
        />
        <BasicInfoCardPlus
          title="Visits"
          body={affiliateData.last30Days.visits}
          // differenceAmount="(1.23%)"
          isPlainBorder={true}
        />
        <BasicInfoCardPlus
          title="Conversion Rate"
          body={`${affiliateData.last30Days.conversionRate}%`}
          // differenceAmount="(1.23%)"
          isPlainBorder={true}
        />
      </div>
      {/* All Time Summary */}
      <PageHeader title="All Time" />
      <div className="flex w-full flex-col flex-wrap lg:flex-nowrap gap-2">
        <div className="flex w-full flex-wrap lg:flex-nowrap gap-4">
          <BasicInfoCard
            title="Referrals"
            body={affiliateData.allTime.referrals}
            isPlainBorder={true}
          />
          <BasicInfoCard 
            title="Visits" 
            body={affiliateData.allTime.visits}
            isPlainBorder={true}
            />
          <BasicInfoCard
            title="Conversion Rate"
            body={`${affiliateData.allTime.conversionRate}%`}
            isPlainBorder={true}
          />
        </div>
        <div className="flex w-full flex-wrap lg:flex-nowrap gap-4">
          <BasicInfoCardPlus
            title="Paid Referrals"
            body={`$${parseFloat(
              affiliateData.allTime.paidReferrals
            ).toLocaleString()}`}
            isPlainBorder={true}
            // differenceAmount="(1.23%)"
          />
          <BasicInfoCardPlus
            title="Paid Earnings"
            body={`$${parseFloat(
              affiliateData.allTime.paidEarnings
            ).toLocaleString()}`}
            isPlainBorder={true}
            // differenceAmount="(1.23%)"
          />
          <BasicInfoCardPlus
            title="Unpaid Earnings"
            body={`$${parseFloat(
              affiliateData.allTime.unpaidEarnings
            ).toLocaleString()}`}
            isPlainBorder={true}
            // differenceAmount="(1.23%)"
          />
        </div>
      </div>
      {/* Clients Referred Table */}
      <PageHeader title="Clients Referred" />
      {errorClients || clientsReferred.length === 0 ? (
        <TableNoData emptyMessage={"No clients referred"} />
      ) : (
        <TableDataGrid
          rows={clientsReferred}
          columns={columnsClients}
          height="auto"
        />
      )}
      {/* Display Payout Requests Table */}
      <PageHeader title="Payout Requests" />
      {errorPayouts || payoutRequests.length === 0 ? (
        <TableNoData emptyMessage={"No payout requests"} />
      ) : (
        <TableDataGrid
          rows={payoutRequests}
          columns={columnsPayout}
          height="auto"
        />
      )}
    </div>
  );
};

export default AffiliatesPortal;
