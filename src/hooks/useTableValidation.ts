import {TableDataOne} from "../types/reducerTypes/dataTable";
import {useVladForm} from "./vladForm";
import {isRequired} from "../services/validators";

export const useTableValidation = (tableDataOne: TableDataOne) => {

    const {vErrors, handleSub} = useVladForm({
        'number': {
            value: tableDataOne.date.number,
            validation: [isRequired(tableDataOne.date.number)]
        },
        'date': {
            value: tableDataOne.date.date?.toString(),
            validation: [isRequired(tableDataOne.date.date?.toString())]
        },
        'taskType': {
            value: tableDataOne.aboutTask.taskType,
            validation: [isRequired(tableDataOne.aboutTask.taskType)]
        },
        'author': {
            value: tableDataOne.aboutTask.author,
            validation: [isRequired(tableDataOne.aboutTask.author)]
        },
        'account': {
            value: tableDataOne.aboutAccount.account,
            validation: [isRequired(tableDataOne.aboutAccount.account)]
        },
        'terminal': {
            value: tableDataOne.aboutAccount.terminal,
            validation: [isRequired(tableDataOne.aboutAccount.terminal)]
        },
        'status': {
            value: tableDataOne.status,
            validation: [isRequired(tableDataOne.status)]
        },
    }, );

    return {vErrors, handleSub}
}