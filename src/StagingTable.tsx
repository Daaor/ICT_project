import { type IntakeRecord } from "./App";

type Props = {
    records: IntakeRecord[];
    onDeleteRecord: (id: string) => void;
}

export function StagingTable( {records, onDeleteRecord}: Props) {

    return(
        <div className = "w-full flex flex-col items-center">

            {records.length === 0 ? (
                <p>no records yet</p>
            ) : (
                <table className="w-fit text-left">
                    <thead>
                        <tr>
                            <th className="p-3 border">Full Name</th>
                            <th className="p-3 border">Government ID</th>
                            <th className="p-3 border">Email</th>
                            <th className="p-3 border">Phone Number</th>
                            <th className="p-3 border">Provider LGA</th>
                            <th className="p-3 border">Provider Name</th>
                            <th className="p-3 border">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {records.map((record) =>(
                            <tr key={record.id}>
                                <td className="p-3 border">{record.fullName}</td>
                                <td className="p-3 border">{record.govId}</td>
                                <td className="p-3 border">{record.email}</td>
                                <td className="p-3 border">{record.number}</td>
                                <td className="p-3 border">{record.lga}</td>
                                <td className="p-3 border">{record.provider}</td>
                                <td className="p-3 border">
                                    <button
                                        onClick={()=>{onDeleteRecord(record.id)}}
                                        className="px-4 py-2 rounded-full bg-red-500 text-white hover:bg-red-800"
                                     >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}