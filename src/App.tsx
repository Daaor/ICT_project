import { IntakeForm } from "./IntakeForm";
import { StagingTable } from "./StagingTable";
import { useState, useEffect } from "react";

export type IntakeRecord = {
  fullName: string,
  email: string,
  number: string,
  govId: string,
  lga: string,
  provider: string,
  id: string
}


export default function App() {

  const [batchRecords, setBatchRecords] = useState<IntakeRecord[]>(() => {
    const savedData = localStorage.getItem("intakeRecords");
    return savedData ? JSON.parse(savedData): [];
  });

  const handleAddRecord = (newRecord: Omit<IntakeRecord, "id">)=>{              // Omit excludes id property from the IntakeRecordType so it can be added per each record input with a unique id.
    setBatchRecords(          // The ... (spread operator) is used to disassemble existing records, and add a new one alongside them. not using this would mean the new record is added outside the previously existing records.
      records => ([
        ...records,
        {
          ...newRecord, 
          id: crypto.randomUUID()       // Generates a unique ID for each record added into the batchRecords array. This is important for React to be able to identify each record uniquely, especially when rendering lists.
        }
      ])
    )
  };

  const handleDeleteRecord = (id: string) => {        // This function is used to delete a record from the batchRecords array based on its unique id. It filters out the record with the matching id and updates the state with the remaining records.
      setBatchRecords(prevRecords => prevRecords.filter((record:IntakeRecord) => record.id !== id));
  };

  const handleRecordDownload = () => {
    const jsonString = JSON.stringify(batchRecords);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "IntakeRecords.json";
    link.click();
    URL.revokeObjectURL(url);
  };

  useEffect(
    () => {
      localStorage.setItem("intakeRecords", JSON.stringify(batchRecords));
    }, 
    [batchRecords]
  );

  return(
    <div className="py-8 px-5 h-screen flex justify-between gap-5">
      <div className="w-1/3 rounded-xl p-6 shadow-lg">
        <IntakeForm onSubmitRecord={handleAddRecord} />
      </div>

      <div className="w-2/3 rounded-xl p-6 shadow-lg flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h2>Current Batch Records: {batchRecords.length}</h2>
        <button onClick={handleRecordDownload} className="w-fit px-5 py-3 rounded-full bg-green-500 text-white hover:bg-green-700">Download JSON</button>
      </div>
        <StagingTable records={batchRecords} onDeleteRecord={handleDeleteRecord} />
      </div>
    </div>
  );
}