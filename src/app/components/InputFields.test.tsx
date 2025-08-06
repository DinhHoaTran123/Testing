import React from "react";
import InputFields from "../components/InputFields";
import {fireEvent, render} from "@testing-library/react";

describe("InputFields", () => {
    it("renders input fields and handles changes", () => {
        const defaultInput = [
            { name: "Họ tên", value: "Hoàng" },
            { name: "Tuổi", value: "24" },
        ];
        render(<InputFields tabName="Test Tab" defaultInput={defaultInput} />);

        const inputs = screen.getAllByRole("textbox");
        expect(inputs).toHaveLength(2);
        expect(inputs[0]).toHaveValue("Hoàng");

        fireEvent.change(inputs[0], { target: { value: "Long" } });
        expect(inputs[0]).toHaveValue("Long");
    });

    it("has submit button", () => {
        render(<InputFields tabName="Test Tab" defaultInput={[]} />);
        expect(screen.getByText("Gửi dữ liệu")).toBeInTheDocument();
    });
});
