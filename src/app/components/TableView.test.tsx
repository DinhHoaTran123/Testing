import React from "react";
import { render, screen } from "@testing-library/react";
import TableView from "../components/TableView";

describe("TableView", () => {
    it("renders table with headers and data", () => {
        const data = [
            { name: "John", age: 30 },
            { name: "Jane", age: 28 },
        ];
        render(<TableView tabName="Test Table" data={data} />);

        expect(screen.getByText("name")).toBeInTheDocument();
        expect(screen.getByText("John")).toBeInTheDocument();
        expect(screen.getByText("Jane")).toBeInTheDocument();
    });

    it("renders message when no data", () => {
        render(<TableView tabName="Empty Table" data={[]} />);
        expect(screen.getByText(/Không có dữ liệu/)).toBeInTheDocument();
    });
});
