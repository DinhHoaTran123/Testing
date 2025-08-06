import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CategorizedList from "../components/CategorizedList";
import { Category } from "../types";

const mockCategories: Category[] = [
    {
        name: "Loại A",
        pdfUrl: "/pdfs/a.pdf",
        tabs: [
            { name: "Tab A1", type: "table", data: [] },
            { name: "Tab A2", type: "input", defaultInput: [] },
        ],
    },
];

describe("CategorizedList", () => {
    it("renders categories and tabs", () => {
        render(
            <CategorizedList
                categories={mockCategories}
                activeCategoryIndex={0}
                onCategorySelect={() => {}}
                onTabSelect={() => {}}
            />
        );
        expect(screen.getByText("Loại A")).toBeInTheDocument();
        expect(screen.getByText("• Tab A1")).toBeInTheDocument();
        expect(screen.getByText("• Tab A2")).toBeInTheDocument();
    });

    it("calls onCategorySelect when category is clicked", () => {
        const onCategorySelect = jest.fn();
        render(
            <CategorizedList
                categories={mockCategories}
                activeCategoryIndex={0}
                onCategorySelect={onCategorySelect}
                onTabSelect={() => {}}
            />
        );
        fireEvent.click(screen.getByText("Loại A"));
        expect(onCategorySelect).toHaveBeenCalledWith(0);
    });

    it("calls onTabSelect when tab is clicked", () => {
        const onTabSelect = jest.fn();
        render(
            <CategorizedList
                categories={mockCategories}
                activeCategoryIndex={0}
                onCategorySelect={() => {}}
                onTabSelect={onTabSelect}
            />
        );
        fireEvent.click(screen.getByText("• Tab A1"));
        expect(onTabSelect).toHaveBeenCalledWith(0, 0);
    });
});
