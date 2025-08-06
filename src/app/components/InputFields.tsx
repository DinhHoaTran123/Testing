"use client";

import { useState } from "react";

interface InputFieldsProps {
    defaultInput: {
        name: string;
        email: string;
        message: string;
    };
}

const InputFields = ({ defaultInput }: InputFieldsProps) => {
    const [formData, setFormData] = useState(defaultInput);

    return (
        <div className="bg-white p-4 rounded-xl shadow space-y-4">
            <h2 className="text-lg font-bold text-black">Form nhập liệu</h2>
            <input
                placeholder="Tên"
                className="w-full border px-3 py-2 rounded text-black"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
                placeholder="Email"
                className="w-full border px-3 py-2 rounded text-black"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <textarea
                placeholder="Lời nhắn"
                className="w-full border px-3 py-2 rounded text-black"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
        </div>
    );
};

export default InputFields;