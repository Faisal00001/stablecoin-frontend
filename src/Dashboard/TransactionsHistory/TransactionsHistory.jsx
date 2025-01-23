import { useState } from "react";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";

const dummyData = [
    {
        id: 1,
        date: "2025-01-01",
        type: "mint",
        status: "completed",
        details: {
            transactionId: "TXN-1001",
            merchantReference: "MR-1111",
            yield: "4.5%",
        },
    },
    {
        id: 2,
        date: "2025-01-05",
        type: "withdraw",
        status: "pending",
        details: {
            transactionId: "TXN-1002",
            merchantReference: "MR-2222",
            yield: "N/A",
        },
    },
    {
        id: 3,
        date: "2025-01-10",
        type: "transfer",
        status: "failed",
        details: {
            transactionId: "TXN-1003",
            merchantReference: "MR-3333",
            yield: "N/A",
        },
    },
    {
        id: 4,
        date: "2025-01-12",
        type: "mint",
        status: "completed",
        details: {
            transactionId: "TXN-1004",
            merchantReference: "MR-4444",
            yield: "3.8%",
        },
    },
    {
        id: 5,
        date: "2025-01-15",
        type: "withdraw",
        status: "completed",
        details: {
            transactionId: "TXN-1005",
            merchantReference: "MR-5555",
            yield: "2.1%",
        },
    },
];

const exportToCSV = (data) => {
    const headers = ["Transaction ID", "Merchant Reference Number", "Yield", "Date", "Type", "Status"];
    const rows = data.map((transaction) => [
        transaction?.details?.transactionId || "",
        transaction?.details?.merchantReference || "",
        transaction?.details?.yield || "",
        transaction.date,
        transaction.type,
        transaction.status,
    ]);
    const csvContent = [headers, ...rows]
        .map((row) => row.join(","))
        .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "transactions.csv");
};

const downloadPDFReceipt = (transaction) => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Transaction Receipt", 10, 10);

    doc.setFontSize(12);
    doc.text(`Transaction ID: ${transaction.details.transactionId}`, 10, 30);
    doc.text(`Merchant Reference: ${transaction.details.merchantReference}`, 10, 40);
    doc.text(`Yield: ${transaction.details.yield}`, 10, 50);
    doc.text(`Date: ${transaction.date}`, 10, 60);
    doc.text(`Type: ${transaction.type}`, 10, 70);
    doc.text(`Status: ${transaction.status}`, 10, 80);

    doc.save(`${transaction.details.transactionId}-receipt.pdf`);
};

const TransactionsHistory = () => {
    const [filters, setFilters] = useState({
        dateRange: { from: "", to: "" },
        transactionType: "",
        status: "",
    });

    const handleApplyFilters = (newFilters) => {
        setFilters(newFilters);
    };

    const filteredData = dummyData.filter((item) => {
        const { dateRange, transactionType, status } = filters;
        const withinDateRange =
            (!dateRange.from || new Date(item.date) >= new Date(dateRange.from)) &&
            (!dateRange.to || new Date(item.date) <= new Date(dateRange.to));
        const matchesType = !transactionType || item.type === transactionType;
        const matchesStatus = !status || item.status === status;
        return withinDateRange && matchesType && matchesStatus;
    });

    return (
        <div>
            <div className="min-h-screen p-6">
                <h1 className="text-2xl font-bold mb-4">Transaction</h1>
                <FilterOptions onApplyFilters={handleApplyFilters} />
                <div className="mt-10">
                    <div className="flex items-center justify-between">
                        <h3 className="text-2xl  font-bold">Transaction History</h3>
                        <button
                            onClick={() => exportToCSV(filteredData)}
                            className="px-4 py-2 bg-black text-white rounded"
                        >
                            Export to CSV
                        </button>
                    </div>
                </div>

                <div className="mt-6">
                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th className="px-6 py-3">Transaction ID</th>
                                    <th className="px-6 py-3">Merchant Reference</th>
                                    <th className="px-6 py-3">Yield</th>
                                    <th className="px-6 py-3">Date</th>
                                    <th className="px-6 py-3">Type</th>
                                    <th className="px-6 py-3">Status</th>
                                    <th className="px-6 py-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredData.length > 0 ? (
                                    filteredData.map((transaction) => (
                                        <tr
                                            key={transaction.id}
                                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                        >
                                            <td className="px-6 py-4">
                                                {transaction?.details?.transactionId}
                                            </td>
                                            <td className="px-6 py-4">
                                                {transaction?.details?.merchantReference}
                                            </td>
                                            <td className="px-6 py-4">
                                                {transaction?.details?.yield}
                                            </td>
                                            <td className="px-6 py-4">{transaction.date}</td>
                                            <td className="px-6 py-4">{transaction.type}</td>
                                            <td className="px-6 py-4">{transaction.status}</td>
                                            <td className="px-6 py-4">
                                                <button
                                                    onClick={() => downloadPDFReceipt(transaction)}
                                                    className="px-4 py-2 bg-blue-800 text-white rounded"
                                                >
                                                    Download Receipt
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr className="bg-white">
                                        <td
                                            colSpan="7"
                                            className="px-6 py-4 text-center text-gray-500"
                                        >
                                            No transaction found
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

const FilterOptions = ({ onApplyFilters }) => {
    const [dateRange, setDateRange] = useState({ from: "", to: "" });
    const [transactionType, setTransactionType] = useState("");
    const [status, setStatus] = useState("");

    const handleApplyFilters = () => {
        onApplyFilters({ dateRange, transactionType, status });
    };

    return (
        <div className="p-6 rounded-lg space-y-4 max-w-sm border-[1px] border-gray-200 mx-auto">
            <div>
                <label className="block text-sm font-medium text-gray-700">Date Range</label>
                <div className="flex items-center space-x-2 mt-1">
                    <input
                        type="date"
                        value={dateRange.from}
                        onChange={(e) =>
                            setDateRange((prev) => ({ ...prev, from: e.target.value }))
                        }
                        className="border border-gray-300 rounded-md p-2 w-full"
                    />
                    <input
                        type="date"
                        value={dateRange.to}
                        onChange={(e) =>
                            setDateRange((prev) => ({ ...prev, to: e.target.value }))
                        }
                        className="border border-gray-300 rounded-md p-2 w-full"
                    />
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">
                    Transaction Type
                </label>
                <select
                    value={transactionType}
                    onChange={(e) => setTransactionType(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-white"
                >
                    <option value="">All</option>
                    <option value="mint">Mint</option>
                    <option value="withdraw">Withdraw</option>
                    <option value="transfer">Transfer</option>
                </select>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Status</label>
                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-white"
                >
                    <option value="">All</option>
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                    <option value="failed">Failed</option>
                </select>
            </div>
            <div>
                <button
                    onClick={handleApplyFilters}
                    className="w-full bg-black text-white py-2 px-4 rounded-md"
                >
                    Apply Filters
                </button>
            </div>
        </div>
    );
};

export default TransactionsHistory;
