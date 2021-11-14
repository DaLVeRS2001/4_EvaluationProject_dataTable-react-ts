//Other
import React, {useEffect} from "react";
import getMedias from "../../services/getMedias";
import CertainData from "../../services/getCertainData";

//Assets
import trash from "../../assets/trash.svg"

//Types
import {IMyBody} from "../../types/props";
import {TableDataOne} from "../../types/reducerTypes/dataTable";

//Components
import {MyHead} from "./MyHead";

//Styles
import dtS from "./style.module.scss"


export const MyBody: React.FC<IMyBody> =
    ({
         tableData, to, from, currentPage,
         handleModal, deleteTableOneEl, setCurrentPage, width
     }) => {

        const {statusTypes} = new CertainData().getModel(),
            parsedArr = tableData.slice(from, to),
            {maxWidthMedias} = getMedias()

        const deleteEl = (e: React.MouseEvent<HTMLImageElement>, id: any) => {
            e.stopPropagation()
            deleteTableOneEl(id)
        }

        useEffect(() => {
            !parsedArr.length && setCurrentPage(currentPage - 1)
            //eslint-disable-next-line
        }, [parsedArr])

        const getTableDates = (data: TableDataOne, statusColor: string | undefined) => <>
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
        </>

        if (width && width <= maxWidthMedias[1]) return <table className={dtS.table}>
            {parsedArr.map((data, idx) => {
                const statusColor = statusTypes.find(type => type.type === data.status)?.color

                return <tbody data-main={true} onClick={() => handleModal(data.id)} key={idx}>
                <MyHead width={width}/>
                <tr>{getTableDates(data, statusColor)}</tr>
                </tbody>
            })}
        </table>


        return <tbody className={dtS.table}>
        {parsedArr.map((data, idx) => {
            const statusColor = statusTypes.find(type => type.type === data.status)?.color

            return <tr onClick={() => handleModal(data.id)} key={idx}>
                {getTableDates(data, statusColor)}
            </tr>
        })}
        </tbody>

    }