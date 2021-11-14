//Other
import React, {useEffect, useState} from "react";
import {useTableValidation} from "../../../hooks/useTableValidation";
import CertainData from "../../../services/getCertainData";

//Redux
import {connect} from "react-redux";
import {RootReducers} from "../../../redux/reducers";
import {
    addTableOneEl,
    changeField,
    clearTableFields,
    getTableOneEl
} from "../../../redux/thunks/dataTableActions";

//Types
import {IAddItemModal, ModalField} from "../../../types/props";
import {IAddItemConnect} from "../../../types/reducerTypes/dataTable";

//Styles
import studModalS from "./style.module.scss"

//Components
import CustomModal from "../#CustomModal";
import ModalInput from "../../ModalInput";


const AddItemModal: React.FC<IAddItemModal> =
    ({
         tableDataOne, changeField, isCreate, id,
         handleItemModal, getTableOneEl, clearTableFields, changeTableOneEl, addTableOneEl
     }) => {

        const [isStatusOn, handleStatus] = useState<boolean>(false),
            {statusTypes} = new CertainData().getModel(),
            {vErrors, handleSub} = useTableValidation(tableDataOne)

        const modalFields: ModalField[] = [
            {
                title: 'Номер', type: 'text', name: 'number', fieldError: vErrors.number,
                ph: 'Ввведите номер (№5094)', value: tableDataOne.date.number,
                handler: (val) => changeField<'number'>(val, "date", "number"),
            },
            {
                title: 'Дата', type: 'date', name: 'date', fieldError: vErrors.date,
                ph: 'Ввведите дату', value: tableDataOne.date.date,
                handler: (val)=> changeField<'date'>(val, "date", "date"),
            },
            {
                title: 'Тип задания', type: 'text', name: 'taskType', fieldError: vErrors.taskType,
                ph: 'Ввведите тип задания', value: tableDataOne.aboutTask.taskType,
                handler: (val)=> changeField<'taskType'>(val, "aboutTask", "taskType"),
            },
            {
                title: 'Автор', type: 'text', name: 'author', fieldError: vErrors.author,
                ph: 'Ввведите имя автора', value: tableDataOne.aboutTask.author,
                handler: (val)=> changeField<'author'>(val, "aboutTask", "author"),
            },
            {
                title: 'Аккаунт', type: 'text', name: 'account', fieldError: vErrors.account,
                ph: 'Ввведите имя аккаунта(ов)', value: tableDataOne.aboutAccount.account,
                handler: (val)=> changeField<'account'>(val, "aboutAccount", "account"),
            },
            {
                title: 'Терминал', type: 'text', name: 'terminal', fieldError: vErrors.terminal,
                ph: 'Ввведите терминал', value: tableDataOne.aboutAccount.terminal,
                handler: (val)=> changeField<'terminal'>(val, "aboutAccount", "terminal"),
            },
            {
                title: 'Статус', type: 'text', name: 'status', fieldError: vErrors.status,
                ph: 'Ввведите терминал', value: tableDataOne.status,
                handler: (val)=> changeField<'status'>(val, "status"), onClick: ()=> handleStatus(!isStatusOn)
            }
        ]

        useEffect(() => {
            return () => clearTableFields()
            //eslint-disable-next-line
        }, [])

        const onSubmit = () => {
            !isCreate
                ? changeTableOneEl({...tableDataOne}, id ?? 0)
                : addTableOneEl({...tableDataOne})
            handleItemModal()
        }

        useEffect(() => {
            !isCreate && getTableOneEl(id ?? 0)
            //eslint-disable-next-line
        }, [])


        return <form
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSub(e, onSubmit)}
        >
            <CustomModal
                modalHandler={handleItemModal} btnTitle={isCreate ? 'Добавить элемент' : 'Изменить элемент'}
                headerTitle={isCreate ? 'Создание элемента' : 'Редактирование элемента'}
            >
                <div className={studModalS.inlineWrapper}>
                    {modalFields.map((field, idx) => {
                        return <div key={idx} style={{position: "relative"}}>
                            <ModalInput
                                 title={field.title} type={field.type} name={field.name} ph={field.ph}
                                value={field.value} handler={(arg) => field.handler(arg.val)}
                                style={{marginBottom: 10}} fieldError={field.fieldError} onClick={field.onClick}
                            />
                            {(field.onClick && isStatusOn) && <div className={studModalS.drop}>
                                {statusTypes.map((el, idx) =>
                                    <div key={idx}
                                         onMouseOver={(e: React.MouseEvent<HTMLDivElement>) =>
                                             e.currentTarget.style.background = el.color}
                                         onMouseOut={(e: React.MouseEvent<HTMLDivElement>) =>
                                             e.currentTarget.style.background = "#fff"}
                                         onClick={() => {
                                             field.handler(el.type)
                                             handleStatus(!isStatusOn)
                                         }}
                                    >
                                        {el.type}
                                    </div>)}
                            </div>}
                        </div>
                    })}
                </div>
            </CustomModal>
        </form>
    }

const mapStateToProps = (state: RootReducers): IAddItemConnect => ({
    tableDataOne: state.dataTable.tableDataOne
})

export default connect(mapStateToProps, {
    changeField, clearTableFields, addTableOneEl, getTableOneEl
// @ts-ignore
})(AddItemModal)