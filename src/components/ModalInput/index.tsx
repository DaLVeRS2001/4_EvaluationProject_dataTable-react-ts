import React from "react";
import mInputS from "./style.module.scss"
import {IModalInput} from "../../types/props";


const ModalInput: React.FC<IModalInput> =
    ({
         title, type, ph, fieldError,
         name, value, handler, style, onClick
    }) => {

    return (
        <div className={mInputS.modalInput} style={{...style}}>
               <span>{title}</span>
            <input
                readOnly={!!onClick}
                style={onClick&&{cursor: "pointer"}}
                onClick={onClick}
                type={type} placeholder={ph} name={name} value={value}
                onInput={(e:React.FormEvent<HTMLInputElement>)=>
                    handler({val: e.currentTarget.value, type: name})}
                data-error={!!fieldError}
            />
            <br/>{fieldError && <small>{fieldError[0]}</small>}
        </div>

    )
}


export default ModalInput