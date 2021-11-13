//Other
import React, {useEffect} from "react";

//Styles
import dtS from "./style.module.scss"

//Types
import {IDataTable} from "../../types/props";

//Redux
import {connect} from "react-redux";
import {RootReducers} from "../../redux/reducers";
import {IDataTableConnect} from "../../types/reducerTypes/dataTable";
import {getAllTableData} from "../../redux/thunks/dataTableActions";

//Components
import Pagination from "../../components/Pagination";
import {MyHead} from "./MyHead";
import {MyBody} from "./MyBody";


const DataTable:React.FC<IDataTable> = ({getAllTableData, tableData, pagination}) => {

    const {from, to} = pagination

    useEffect(() => {
        getAllTableData()
        //eslint-disable-next-line
    }, [])

    return <>
        <table className={dtS.table}>
            <MyHead/>
            <MyBody tableData={tableData} from={from} to={to}/>
        </table>

        <Pagination arrL={tableData.length}/>
    </>
}


const mapStateToProps = (state: RootReducers): IDataTableConnect => ({
    tableData: state.dataTable.tableData,
    pagination: state.pagination.pagination
})

export default  connect(mapStateToProps, {getAllTableData})(DataTable)