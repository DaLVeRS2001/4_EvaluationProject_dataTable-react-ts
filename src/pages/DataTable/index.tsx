//Other
import React, {useEffect, useState} from "react";

//Styles
import dtS from "./style.module.scss"

//Types
import {IDataTable} from "../../types/props";

//Redux
import {connect} from "react-redux";
import {RootReducers} from "../../redux/reducers";
import {IDataTableConnect} from "../../types/reducerTypes/dataTable";
import {changeTableOneEl, deleteTableOneEl, getAllTableData} from "../../redux/thunks/dataTableActions";
import {setCurrentPage} from "../../redux/thunks/paginationActions";

//Components
import Pagination from "../../components/Pagination";
import {MyHead} from "./MyHead";
import {MyBody} from "./MyBody";
import AddItemModal from "../../components/Modals/AddItemModal";



const DataTable:React.FC<IDataTable> =
    ({
         getAllTableData, changeTableOneEl,deleteTableOneEl, setCurrentPage,
         tableData, currentPage, pagination
    }) => {

    const [isModalOn, handleModal] =
        useState<{is: boolean, isCreate: boolean, id: number}>({is: false, isCreate: true, id: 0});

    const {from, to} = pagination;

    useEffect(() => {
        getAllTableData()
        //eslint-disable-next-line
    }, [])

    return <div style={isModalOn.is?{overflowY: "hidden", height: '95vh'}:{}}>

        <div className={dtS.newEl} onClick={() => handleModal({...isModalOn, is: !isModalOn.is})}>
            Добавить элемент
        </div>

        {isModalOn.is &&
				<AddItemModal
					isCreate={isModalOn.isCreate}
					handleItemModal={() => handleModal({...isModalOn, is: !isModalOn.is})}
                    id={isModalOn.id} changeTableOneEl={changeTableOneEl}
                />
        }

        {tableData.length > 0
            ? <table className={dtS.table}>
                <MyHead/>
                <MyBody
                    deleteTableOneEl={deleteTableOneEl}
                    handleModal={(id) => handleModal({...isModalOn, is: !isModalOn.is, isCreate: false, id})}
                    tableData={tableData} from={from} to={to}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                />
            </table>
            : <h4>В данный момент элементы отсутвуют, добавте их</h4>
        }

        {tableData.length > 25 && <Pagination arrL={tableData.length}/>}

    </div>
}


const mapStateToProps = (state: RootReducers): IDataTableConnect => ({
    tableData: state.dataTable.tableData,
    pagination: state.pagination.pagination,
    currentPage: state.pagination.pagination.currentPage
})

export default  connect(mapStateToProps, {
    getAllTableData, changeTableOneEl, deleteTableOneEl, setCurrentPage
})(DataTable)