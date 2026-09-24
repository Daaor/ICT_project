import { useState, type SubmitEvent, type ChangeEvent } from "react";

// 1. Define the walkie-talkie (Props)
type Props = {
    onSubmitRecord: (record: any) => void;
};

// 2. Accept the walkie-talkie in the function signature
export function IntakeForm({ onSubmitRecord }: Props) {

    const [formData, setFormData] = useState({
        fullName: "",
        govId: "",
        email: "",
        phone: "",
        lga: "",
        providerName: ""
    });

    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        // 3. Execute: Send the completed object UP to App.tsx
        onSubmitRecord(formData);

        // 4. Clear the state so the form empties out for the next entry
        setFormData({
            fullName: "",
            govId: "",
            email: "",
            phone: "",
            lga: "",
            providerName: ""
        });
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const fieldName = e.target.name;
        const newValue = e.target.value;
        setFormData(prevData => ({
            ...prevData,
            [fieldName]: newValue
        }));
    };

    return(
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            
            <div className="flex gap-2 items-center justify-between">
                <label htmlFor="fullName">Full Name:</label>
                <input
                    required
                    type="text"
                    placeholder="e.g Daaor Praise Ayomide."
                    id="fullName" className="border border-gray-200 rounded-lg py-2 px-4"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                />
            </div>

            <div className="flex gap-2 items-center justify-between">
                <label htmlFor="email">Email:</label>
                <input
                    required
                    type="text"
                    placeholder="e.g praise123@gmail.com."
                    id="email" className="border border-gray-200 rounded-lg py-2 px-4"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>

            <div className="flex gap-2 items-center justify-between">
                <label htmlFor="govId">Government ID:</label>
                <input
                    required
                    type="text"
                    placeholder="e.g CS****."
                    id="govId" className="border border-gray-200 rounded-lg py-2 px-4"
                    name="govId"
                    value={formData.govId}
                    onChange={handleChange}
                />
            </div>

            <div className="flex gap-2 items-center justify-between">
                <label htmlFor="phone">Phone Number:</label>
                <input
                    required
                    type="text"
                    placeholder="e.g 08023145679"
                    id="phone" className="border border-gray-200 rounded-lg py-2 px-4"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                />
            </div>

            <div className="flex gap-2 items-center justify-between">
                <label htmlFor="lga">LGA:</label>
                <input
                    required
                    type="text"
                    placeholder="e.g Ikeja."
                    id="lga" className="border border-gray-200 rounded-lg py-2 px-4"
                    name="lga"
                    value={formData.lga}
                    onChange={handleChange}
                />
            </div>

            <div className="flex gap-2 items-center justify-between">
                <label htmlFor="providerName">Provider Name:</label>
                <input
                    required
                    type="text"
                    placeholder="e.g Mainland Clinic."
                    id="providerName" className="border border-gray-200 rounded-lg py-2 px-4"
                    name="providerName"
                    value={formData.providerName}
                    onChange={handleChange}
                />
            </div>

            <button type="submit" className="px-4 py-2 rounded-lg bg-blue-400 w-fit text-white">Submit</button>
        </form>
    );
}