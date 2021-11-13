import React from "react";
import CertainData from "../../services/getCertainData";
import {IMyBody} from "../../types/props";


export const MyBody: React.FC<IMyBody> = ({tableData, to, from}) => {
    const {statusTypes} = new CertainData().getModel(),
        parsedArr = tableData.slice(from, to)

    return <tbody>
    {parsedArr.map((data, idx) => {
        const statusColor = statusTypes.find(type=> type.type === data.status)?.color

        return <tr key={idx}>
            <td>
                <span>{data.date.number}</span>
                <span>{data.date.date}</span>
            </td>
            <td>
                <span>{data.aboutTask.taskType}</span>
                <span>{data.aboutTask.author}</span>
            </td>
            <td>
                <span>{data.aboutAccount.account}</span>
                <span>{data.aboutAccount.terminal}</span>
            </td>
            <td>
                <div style={{background: `${statusColor}`}}>
                    {data.status}
                </div>
            </td>
        </tr>
    })}
    </tbody>
}
