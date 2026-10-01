import { IntakeForm } from "./IntakeForm";
import { StagingTable } from "./StagingTable";
import { useState } from "react";

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

  const [batchRecords, setBatchRecords] = useState<IntakeRecord[]>([]);
  const handleAddRecord = (newRecord: Omit<IntakeRecord, "id">)=>{
    setBatchRecords(
      records => ([
        ...records,
        {
          ...newRecord, 
          id: crypto.randomUUID()
        }
      ])
    )
  }

  const handleDeleteRecord = (id: string) => {
      setBatchRecords(prevRecords => prevRecords.filter((record:IntakeRecord) => record.id !== id));
  }

  return(
    <div className="py-8 px-5 h-screen flex justify-between gap-5">
      <div className="w-1/3 rounded-xl p-6 shadow-lg">
        <IntakeForm onSubmitRecord={handleAddRecord} />
      </div>

      <div className="w-2/3 rounded-xl p-6 shadow-lg flex flex-col gap-5">
        <h2>Current Batch Records: {batchRecords.length}</h2>
        <StagingTable records={batchRecords} onDeleteRecord={handleDeleteRecord} />
      </div>
    </div>
  );
}