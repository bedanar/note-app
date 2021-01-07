import React, {useContext} from 'react'
import { AlertContext } from '../context/Alert/AlertContext'
import {CSSTransition} from 'react-transition-group'

export const Alert = () => {
    const {alert, hide} = useContext(AlertContext);
    return(
            <CSSTransition in={alert.visible} timeout={{enter: 500, exit: 300}} classNames="alert" mountOnEnter unmountOnExit>
                <div className={`alert alert-${alert.type || "warning"} alert-dismissible}`} role="alert">
                    <strong>Warning!</strong> 
                    &nbsp;{alert.text}
                    <button onClick={hide} type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </CSSTransition>
    )
}