import { useState } from "react"
import { IntakeForm } from "./IntakeForm"
import { StagingTable } from "./StagingTable";

export type IntakeRecord = {
  fullName: string,
  govId: string,
  email: string,
  phone: string,
  lga: string,
  providerName: string;
};

export default function App() {

  const [batchRecords, setBatchRecords] = useState<IntakeRecord[]>([])

  const handleAddRecord = (newRecord: IntakeRecord) => {
    setBatchRecords(prevRecords => [...prevRecords, newRecord]);
  };

  const handleExportBatch = () => {
    if (batchRecords.length === 0) return;
    const jsonString = JSON.stringify(batchRecords, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;

    link.download = `intake_batch_${new Date().getTime()}.json`

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
};


  return (
    <div className="flex p-6 h-screen bg-gray-300 gap-6">
      <div className="w-1/3 bg-white p-6 rounded-xl shadow-sm">
        <IntakeForm onSubmitRecord={handleAddRecord} />
      </div>

      <div className="w-2/3 bg-white p-6 rounded-xl shadow-sm">
        <div className="flex justify-between items-center mb-4 border-b pb-2">
          <h2 className="text-xl font-bold">
            Staging Table ({batchRecords.length} records)
          </h2>
          <button 
            onClick={handleExportBatch}
            disabled={batchRecords.length === 0}
            className="bg-green-600 text-white px-4 py-2 rounded-lg font-bold disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Export to JSON
          </button>
        </div>
        {/* table goes here */}
      <StagingTable records={batchRecords} />
      </div>
    </div>
  )
}