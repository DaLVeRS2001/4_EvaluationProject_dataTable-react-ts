import {useEffect, useState} from "react";
import React from "react";


interface IFieldNames{
	[key: string]: {
		validation: (string|undefined)[],
		value: string | null
	}
}
type mapType<T> = [keyof T, (string | undefined)[]][]
type emptyFieldsType<T> =  {[K in keyof T]: {}}


export const useVladForm = (
	fieldNames: IFieldNames = {},
	additionalDependencies: string[] = []
) => {

	const [isSubmit, setSubmit] = useState<boolean>(false)
	const [submitCount, setSubmitCount] = useState<number>(0)
	const [serverError, setServerError] = useState<string | null>(null)
	const [formValid, setFormValid] = useState<boolean>(false)
	const [rerender, setRerender] = useState<number>(0)

	const fieldKeys: string[] =  Object.keys(fieldNames),
		fieldMap: mapType<typeof fieldNames> = fieldKeys?.map(field=> [field, [...fieldNames[field].validation?.filter(el=> el)]]),
		fieldErrors: Map<string | number, (string | undefined)[]> = new Map(fieldMap)

	const values: (string | null)[] = fieldKeys.map((el)=> fieldNames[el]?.value),
		emptyFields: emptyFieldsType<typeof fieldNames> = Object.fromEntries(fieldKeys?.map (field=> [field, []]))



	useEffect(()=> {
		rerender < 2 && setRerender(rerender+1)

		fieldKeys.every((key) =>
			!Object.fromEntries(fieldErrors)[key].length)
				? setFormValid(true)
				: setFormValid(false)


	},[...values, submitCount, isSubmit, ...additionalDependencies])

	useEffect(()=> {
		setSubmit(false)
		setServerError(null)
	}, [...values])

	const handleSub = (e: React.FormEvent, onSubmit: (arg?: Event)=> void) => {
		setSubmitCount(submitCount+1)
		e.preventDefault()
			if(formValid && !serverError?.length){
				onSubmit()
				setSubmit(true)
			}
	}

	const errorReset = (inputNames: string[] = []) => {
		if(inputNames[0] === 'all'){
			fieldKeys.map((input, idx) => {
				fieldErrors.set(input, [])
			})
		}else{
			inputNames.map((input, idx) => {
				fieldErrors.set(input, [])
			})
		}
	}

	return {
		servErr: [serverError, setServerError],
		vErrors: 	rerender>1 || submitCount > 0
			? Object.fromEntries(fieldErrors)
			: emptyFields,
		handleSub, errorReset,
		formData: {isSubmit, submitCount, formValid}
	}
}

// Работа с хуком:
//
// 	Передаем объект, ключ которого имя поля.
// 		В поле VALIDATION передаем массив наших валидаторов, можем навесить любые условия снаружи.
// 		В поле VALUE передаем значение нашего поля, например со стора.
//
// 	Вторым параметром хук принимает дополнительные зависимости, которые в будущем попадут в основной эффект.
//
// 	HANDLE_SUBMIT: его мы передаем в форму,
// 		обезательно принимает EVENT и любой метод,
// 		который необходимо будет вызвать после отправки формы - <form onSubmit={(e)=>  handleSub(e, onSubmit)}>
//
// 	ERROR-RESET: позволяет сбросить ошибки формы, передаем массив с именами полей которые хотим сбросить -
// 		errorReset(['name1',	'name2']) // также если первый элемент будет ["all"], то будут сброшены все ошибки.
//
// 	FORM-DATA: объект с данными формы, где
// 		isSumit - сработает после успешной отправки формы,
// 		submitCount - кол-во нажатий по кнопки submit,
// 		formValid - явл ли вся форма валидной
//
//
// const {handleSub} = useVladForm({
// 	'phone': {
// 		validation: !currentManager.name ? [
// 			serverError&&serverError,
// 			isRequired(phoneFieldVal),
// 			isValidPhone(phone?.length&&isValidPhoneNumber(phone)),
// 			isUserFound(!(!currentManager.isFound && phoneFieldVal === currentManager.phone))
// 		] : [],
// 		value: phoneFieldVal
// 	},
// 	'group': {
// 		validation: [isGroupDropdown &&  isRequired(accessGroupFieldVal.sel)],
// 		value: accessGroupFieldVal.sel
// 	},
// }, [currentManager])


// <InputWithInfo
// infoText={''}
// 1.errorMessage={vErrors.inputName[0]} 2. если ts: errorMessage={vErrors.inputName}, и в самой компоненте arg[0]
// >
// 	<input
// placeholder='Номер телефона'
// className={style.input}
// value={phoneFieldVal}
// onChange={(val)=> changeField(val)}
// />
// </InputWithInfo>


