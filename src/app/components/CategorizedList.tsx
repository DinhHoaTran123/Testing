export interface Tab {
    name: string;
    type: "table" | "input";
    data?: any[]; // Cho table
    defaultInput?: { name: string; value: string }[]; // Cho input
    pdfUrl?: string;
}

export interface Category {
    name: string;
    pdfUrl: string;
    tabs: Tab[];
}

type Props = {
    categories: Category[];
    activeCategoryIndex: number;
    onCategorySelect: (index: number) => void;
    onTabSelect: (catIndex: number, tabIndex: number) => void;
};

export default function CategorizedList({ categories, activeCategoryIndex, onCategorySelect, onTabSelect }: Props) {
    return (
        <div>
            {categories.map((category, catIdx) => (
                <div key={catIdx} className="mb-4">
                    <div
                        className={`cursor-pointer font-semibold text-md mb-1 ${
                            activeCategoryIndex === catIdx ? "text-blue-700" : "text-gray-800"
                        }`}
                        onClick={() => onCategorySelect(catIdx)}
                    >
                        {category.name}
                    </div>
                    {category.tabs.map((tab, tabIdx) => (
                        <div
                            key={tabIdx}
                            className="ml-4 cursor-pointer text-gray-700 hover:text-blue-600"
                            onClick={() => onTabSelect(catIdx, tabIdx)}
                        >
                            • {tab.name}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
