//Other
import React, {useEffect, useState} from "react";

//style
import pS from "./style.module.scss"

//redux
import {connect} from "react-redux";
import {RootReducers} from "../../redux/reducers";
import {IPaginationConnect} from "../../types/reducerTypes/pagination";
import {setCurrentPage, setElemsCountShown} from "../../redux/thunks/paginationActions";

//types
import {IPagination, TPageSwitchers} from "../../types/props";

//assets
import dblArrow from "./assets/dblArrow.png"
import arrow from "./assets/arrow.png"
import dropArrow from "./assets/downArrow.png"
import arrowBlue from "./assets/arrowBlue.png"
import dblArrowBlue from "./assets/dblArrowBlue.png"




const Pagination: React.FC<IPagination> =
    ({arrL, pagination,setCurrentPage, setElemsCountShown}) => {

    const {elemCountShown, currentPage, from, to} = pagination,
        pagesCount: number = Math.ceil(arrL / elemCountShown),
        [isOpenDrop, setDrop] = useState<boolean>(false);

    const elemsCountShownArr: number[] = [25, 50, 75],
        pConditions: boolean[] = [currentPage < pagesCount, currentPage > 1],
        arrowConditions: string[] = [
            pConditions[0]?arrowBlue:arrow, pConditions[0]?dblArrowBlue:dblArrow,
            pConditions[1]?arrowBlue:arrow, pConditions[1]?dblArrowBlue:dblArrow
        ],
        pageSwitchers: TPageSwitchers = {
            page: <div className={pS.pagination__page}><span>{currentPage}</span></div>,
            switchers: [
                {type: 'first', src: arrowConditions[3], alt: '<<'}, {type: 'prev', src: arrowConditions[2], alt: '<'},
                {type: 'next', src: arrowConditions[0], alt: '>'}, {type: 'last', src: arrowConditions[1], alt: '>>'}
            ]
        };

    const handler = (actionType: 'prev' | 'next' | 'first' | 'last'): void => {
        switch (actionType){
            case "first":
                pConditions[1] && setCurrentPage(1)
                break;
            case "last":
                pConditions[0] && setCurrentPage(pagesCount)
                break;
            case "next":
                pConditions[0] && setCurrentPage(currentPage+1)
                break;
            case "prev":
                pConditions[1] && setCurrentPage(currentPage-1)
                break
        }
    }

    const onDropdown = (elemCountShown: number): void => {
        setElemsCountShown(elemCountShown)
        setDrop(!isOpenDrop)
    }

    useEffect(() => {
        setCurrentPage(1)
        setElemsCountShown(elemCountShown)
        //eslint-disable-next-line
    }, [])

    return <div className={pS.pagination}>
        <span>записи {from + 1}-{to}</span>

        <div className={pS.pagination__pageSwitcher}>
            {pageSwitchers.switchers.map((el, idx)=> <React.Fragment  key={idx}>
                <div className={pS[`pagination__${el.type}`]} onClick={() => handler(el.type)}>
                    <img alt={el.alt} src={el.src}/>
                </div>
                {idx === 1 && pageSwitchers.page}
            </React.Fragment>)}
        </div>

        <span>по</span>

        <div className={pS.pagination__elemCountDrop}>
            <div className={pS.pagination__dropControl} onClick={() => setDrop(!isOpenDrop)}>
                <span>{elemCountShown}</span>
                <img src={dropArrow} alt="↓" style={isOpenDrop ? {transform: "scale(-1)"} : {}}/>
            </div>
            <div className={pS.pagination__dropItems} hidden={!isOpenDrop}>
                {elemsCountShownArr.map((el, idx)=>
                    <div key={idx} onClick={() => onDropdown(el)}>{el}</div>)}
            </div>
        </div>

        <span>записей</span>
    </div>
}

const mapStateToProps = (state: RootReducers): IPaginationConnect => ({
    pagination: state.pagination.pagination
})

export default connect(mapStateToProps, {setCurrentPage, setElemsCountShown})(Pagination)