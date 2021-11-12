import {IDataTable} from "../../types/props";
import dtS from "./style.module.scss"
import React, {useEffect} from "react";
import CertainData from "../../services/getCertainData";
import {connect} from "react-redux";
import {RootReducers} from "../../redux/reducers";
import {IDataTableConnect} from "../../types/reducerTypes/dataTable";
import {getAllTableData} from "../../redux/thunks/dataTableActions";
import Pagination from "../../components/Pagination";
import dataTable from "../../API/dataTable";


const DataTable:React.FC<IDataTable> = ({getAllTableData, tableData}) => {

    const {statusTypes, tableHeaders} = new CertainData().getModel()

    useEffect(()=> {
        getAllTableData()
        //eslint-disable-next-line
    }, [])

    return <React.Fragment>
        <table className={dtS.table}>
            <thead>
            <tr>
                {tableHeaders.map((header) => <th>{header}</th>)}
            </tr>
            </thead>
            <tbody>
            {tableData.map((data, idx) => {
                const statusColor = statusTypes.find(type=> type.type === data.status)?.color

                return <tr>
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
        </table>
        <Pagination arr={dataTable}/>
    </React.Fragment>
}


const mapStateToProps = (state: RootReducers): IDataTableConnect => ({
    tableData: state.dataTable.tableData
})

export default  connect(mapStateToProps, {getAllTableData})(DataTable)