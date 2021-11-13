import React, {useEffect} from "react";
import CertainData from "../../services/getCertainData";
import trash from "../../assets/trash.svg"
import {IMyBody} from "../../types/props";


export const MyBody: React.FC<IMyBody> =
    ({
         tableData, to, from, currentPage,
         handleModal, deleteTableOneEl, setCurrentPage
     }) => {

        const {statusTypes} = new CertainData().getModel(),
            parsedArr = tableData.slice(from, to);

        const deleteEl = (e: React.MouseEvent<HTMLImageElement>, id: any) => {
            e.stopPropagation()
            deleteTableOneEl(id)
        }

        useEffect(() => {
            !parsedArr.length && setCurrentPage(currentPage - 1)
            //eslint-disable-next-line
        }, [parsedArr])


        return <tbody>
            {parsedArr.map((data, idx) => {
                const statusColor = statusTypes.find(type => type.type === data.status)?.color

                return <tr onClick={() => handleModal(data.id)} key={idx}>
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
                    <td>
                        <img
                            onClick={(e) => deleteEl(e, data.id)}
                            style={{cursor: "pointer"}} width={32} height={32} src={trash} alt="delete"
                        />
                    </td>
                </tr>
            })}
        </tbody>
    }