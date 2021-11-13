import React from "react";
import customModalS from "./style.module.scss"
import close from "../../../assets/closeModal.svg"
import {ICustomModalProps} from "../../../../../teacher-cabinet/src/types/props";


const CustomModal: React.FC<ICustomModalProps> =
    ({
         modalHandler, headerTitle, btnTitle,
         children, btnHandler
    }) => {


    const handler = (e: React.MouseEvent<HTMLDivElement>):void => {
        e.target === e.currentTarget && modalHandler()
    }

        return <div className={customModalS.customModal} onClick={handler}>
            <div className={customModalS.customModal__inner}>
                <header>
                    <h1>{headerTitle}</h1>
                    <img src={close} alt="X" onClick={modalHandler}/>
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    <button onClick={btnHandler}>{btnTitle}</button>
                </footer>
            </div>
        </div>
}

export default CustomModal


//Cтили main настраиваем как хотим, пример использования:
//
// Other Component:
//     JSX: <form>
//              <#CustomModal
//                  modalHandler={handlerStudModal}  btnTitle={'Добавить ученика'}
//                  headerTitle={'Выберите, кого добавить в ученики'}
//              >
//                  <input type="text"/>
//                  <input type="text"/>
//
//              </#CustomModal>
//           </form>
//
//     CSS: form{   //!!!!!Media используем внизу, тк их перебивают другие стили!!!!!!!!!!!!!!
//             display: contents;
//             main{
//                 input{
//                     width: 300px;
//                     font-size: 18px;
//                 }
//             }
//
//             @include someMedia();
//          }