import { useState, type ChangeEvent, type SubmitEvent }  from "react";
import type { IntakeRecord } from "./App";

type Props = {
    onSubmitRecord: (record: Omit<IntakeRecord, "id">) => void;
}

export function IntakeForm( {onSubmitRecord}: Props ) {

    const [input, setInput] = useState({
        fullName: "",
        email: "",
        number: "",
        govId: "",
        lga: "",
        provider: ""
    });

    const handleState = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;
        setInput(values => ({...values, [name]:value}))
    }

    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmitRecord(input);
        setInput({ fullName: "", email: "", number: "", govId: "", lga: "", provider: "" });
    }

    return(
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">       {/* This is basically the form on the LHS of the screen */}
            <div className="flex items-center justify-between">                
                <label htmlFor="fullName">Full Name:</label>
                <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={input.fullName} 
                    onChange={handleState}
                    placeholder="John Doe" 
                    className="px-4 py-2 rounded-lg border border-gray-100" />
            </div>

            <div className="flex items-center justify-between">                
                <label htmlFor="email">Email:</label>
                <input 
                    type="text" 
                    id="email"
                    name="email"
                    value={input.email}
                    onChange={handleState}
                    placeholder="johndoe@gmail.com" 
                    className="px-4 py-2 rounded-lg border border-gray-100" />
            </div>

            <div className="flex items-center justify-between">                
                <label htmlFor="number">Phone Number:</label>
                <input 
                    type="text" 
                    id="number"
                    name="number"
                    value={input.number}
                    onChange={handleState}
                    placeholder="08012345678" 
                    className="px-4 py-2 rounded-lg border border-gray-100" />
            </div>

            <div className="flex items-center justify-between">                
                <label htmlFor="govId">Government ID:</label>
                <input 
                    type="text" 
                    id="govId"
                    name="govId"
                    value={input.govId}
                    onChange={handleState}
                    placeholder="CS12345" 
                    className="px-4 py-2 rounded-lg border border-gray-100" />
            </div>

            <div className="flex items-center justify-between">                
                <label htmlFor="lga">Local Government Area:</label>
                <input 
                    type="text" 
                    id="lga"
                    name="lga"
                    value={input.lga}
                    onChange={handleState}
                    placeholder="Akure South" 
                    className="px-4 py-2 rounded-lg border border-gray-100" />
            </div>

            <div className="flex items-center justify-between">                
                <label htmlFor="provider">Provider Name:</label>
                <input 
                    type="text" 
                    id="provider"
                    name="provider"
                    value={input.provider}
                    onChange={handleState}
                    placeholder="Sckye Hospital" 
                    className="px-4 py-2 rounded-lg border border-gray-100" />
            </div>

            <button type="submit" className="w-fit px-5 py-3 rounded-lg bg-green-500 text-white hover:bg-green-700">Submit</button>
        </form>
    );
}