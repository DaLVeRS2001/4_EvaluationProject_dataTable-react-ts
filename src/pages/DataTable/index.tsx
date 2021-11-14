//Other
import React, {CSSProperties, useEffect, useState} from "react";

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
import getMedias from "../../services/getMedias";



const DataTable:React.FC<IDataTable> =
    ({
         getAllTableData, changeTableOneEl,deleteTableOneEl, setCurrentPage,
         tableData, currentPage, pagination, width
     }) => {

        const [isModalOn, handleModal] =
            useState<{ is: boolean, isCreate: boolean, id: number }>({is: false, isCreate: true, id: 0});

        const {from, to} = pagination,
            {maxWidthMedias} = getMedias(),
            noScroll: CSSProperties | undefined = isModalOn.is ?
                {overflowY: "scroll", width: '98%', position: 'fixed'} : {}

        useEffect(() => {
            getAllTableData()
            //eslint-disable-next-line
        }, [])

        return <div>
            <div className={dtS.newEl} onClick={() => handleModal({...isModalOn, is: !isModalOn.is})}>
                Добавить элемент
            </div>

            {isModalOn.is &&
						<AddItemModal
							isCreate={isModalOn.isCreate}
							handleItemModal={() => handleModal({...isModalOn, is: !isModalOn.is, isCreate: true})}
							id={isModalOn.id} changeTableOneEl={changeTableOneEl}
						/>
            }

            {tableData.length > 0
                ? (width > maxWidthMedias[1]
                        ? <table style={noScroll} className={dtS.table}>
                            <MyHead/>
                            <MyBody
                                deleteTableOneEl={deleteTableOneEl}
                                handleModal={(id) => handleModal({
                                    ...isModalOn,
                                    is: !isModalOn.is,
                                    isCreate: false,
                                    id
                                })}
                                tableData={tableData} from={from} to={to} setCurrentPage={setCurrentPage}
                                currentPage={currentPage}
                            />
                        </table>
                        : <div style={noScroll}>
                            <MyBody
                                deleteTableOneEl={deleteTableOneEl}
                                handleModal={(id) => handleModal({
                                    ...isModalOn,
                                    is: !isModalOn.is,
                                    isCreate: false,
                                    id
                                })}
                                tableData={tableData} from={from} to={to} setCurrentPage={setCurrentPage}
                                currentPage={currentPage} width={width}
                            />
                        </div>
                )
                : <h4>В данный момент элементы отсутвуют, добавте их</h4>
            }

            {tableData.length > 25 && <Pagination arrL={tableData.length}/>}
        </div>
}


const mapStateToProps = (state: RootReducers): IDataTableConnect => ({
    tableData: state.dataTable.tableData,
    pagination: state.pagination.pagination,
    currentPage: state.pagination.pagination.currentPage,
    width: state.app.width
})

export default  connect(mapStateToProps, {
    getAllTableData, changeTableOneEl, deleteTableOneEl, setCurrentPage
})(DataTable)