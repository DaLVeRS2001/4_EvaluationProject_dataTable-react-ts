import React, {useState} from "react";
import pS from "./style.module.scss"
import dblArrow from "../../assets/dblArrow.png"
import arrow from "../../assets/arrow.png"
import dropArrow from "../../assets/downArrow.png"


interface IPagination {
    arr: any
}

const Pagination: React.FC<IPagination> = ({arr}) => {


    const [elemCount, setElemCount] = useState(25),
        [currentPage, setCurrentPage] = useState(1),
        [pagination, updatePagination] = useState({
            from: elemCount * (currentPage - 1), to: elemCount * currentPage
        }),
        pagesCount = Math.ceil(arr.length / elemCount),
        [isOpenDrop, setDrop] = useState(false)



    const handler = (actionType: 'prev' | 'next' | 'first' | 'last'): void => {
        switch (actionType){
            case "first":
                setCurrentPage(1)
                break;
            case "last":
                setCurrentPage(pagesCount)
                break;
            case "next":
                setCurrentPage(currentPage+1)
                break;
            case "prev":
                setCurrentPage(currentPage-1)
                break
        }
    }

    const onDropdown = (elemCount: number): void => {
        setElemCount(75)
        setDrop(!isOpenDrop)
    }



        return <div className={pS.pagination}>

            <span>записи {pagination.from+1}-{pagination.to}</span>
            <div className={pS.pagination__pageSwitcher}>
              <div className={pS.pagination__first}>
                  <img alt='<<' src={dblArrow} />
              </div>
                <div className={pS.pagination__prev}>
                    <img alt='<' src={arrow} />
                </div>
                <div className={pS.pagination__page}><span>{currentPage}</span></div>
                <div className={pS.pagination__next}>
                    <img alt='>' src={arrow} />
                </div>
                <div className={pS.pagination__last}>
                    <img alt='>>' src={dblArrow} />
                </div>
            </div>
            <span>по</span>
            <div className={pS.pagination__elemCountDrop}>
                <div className={pS.pagination__dropControl} onClick={()=> setDrop(!isOpenDrop)}>
                    <span>{elemCount}</span>
                    <img src={dropArrow} alt="↓" style={isOpenDrop ? {transform: "scale(-1)"}: {}}/>
                </div>
                <div className={pS.pagination__dropItems} hidden={!isOpenDrop}>
                    <div onClick={()=> setElemCount(25)}>25</div>
                    <div onClick={()=> setElemCount(50)}>50</div>
                    <div onClick={()=> setElemCount(75)}>75</div>
                </div>
            </div>
            <span>записей</span>
        </div>
}


export default Pagination