import React from "react";
import CertainData from "../../services/getCertainData";
import getMedias from "../../services/getMedias";

export const MyHead: React.FC<{width?: number}> = ({width}) => {
    const {tableHeaders} = new CertainData().getModel(),
        {maxWidthMedias} = getMedias()

    if (width && width <= maxWidthMedias[1]) return <tr>
         {tableHeaders.map((header, idx) => <th key={idx}>{header}</th>)}
    </tr>

    return <thead>
         <tr>
             {tableHeaders.map((header, idx) => <th key={idx}>{header}</th>)}
         </tr>
    </thead>
}