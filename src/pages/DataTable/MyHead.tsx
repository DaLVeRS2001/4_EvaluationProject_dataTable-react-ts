import React from "react";
import CertainData from "../../services/getCertainData";

export const MyHead: React.FC = () => {
    const {tableHeaders} = new CertainData().getModel()

    return <thead>
        <tr>
            {tableHeaders.map((header, idx) => <th key={idx}>{header}</th>)}
        </tr>
    </thead>
}
