import type { IntakeRecord } from "./App";

type Props = {
    records: IntakeRecord[];
};

export function StagingTable({records}: Props) {
    return (
        <div className="w-full">

            <h2>
                Staging Table ({records.length} records ready.)
            </h2>
            {records.length === 0 ? (
                <p className="italic text-gray-600">No records have been uploaded at this time</p>
            ) : (
                <table className="w-fit text-left">
                    <thead>
                        <tr>
                            <th className="p-3 border">Gov Id</th>
                            <th className="p-3 border">Full Name</th>
                            <th className="p-3 border">Provider LGA</th>
                            <th className="p-3 border">Provider Name</th>
                        </tr>
                    </thead>

                    <tbody>
                        {records.map((record, index)=>(
                            <tr key={index}>
                                <td className="p-3 border">{record.fullName}</td>
                                <td className="p-3 border">{record.govId}</td>
                                <td className="p-3 border">{record.lga}</td>
                                <td className="p-3 border">{record.providerName}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

        </div>
    );
}