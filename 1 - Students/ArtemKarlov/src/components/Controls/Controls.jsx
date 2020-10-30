import './style.css';
import React, { Fragment } from 'react';


export default () => {
    const url = './components/Controls/images/burger.png';
    return (
        <Fragment>
            <input type="checkbox" name="hamburger" id="hamburger" />
            <aside className="layout__control-panel control-panel">                
                <label for="hamburger" className="control-panel__menu-button button-shell"><img src="../src/layout/images/burger.png" alt="" className="button-shell__img"/></label>
                <button className="control-panel__button button-shell"><img src="../src/layout/images/day-and-night.png" alt="" className="button-shell__img"/></button>
                <button className="control-panel__button button-shell"><img src="../src/layout/images/ant-design_setting-outlined.png" alt="" className="button-shell__img"/></button>
                <button className="control-panel__button button-shell"><img src="../src/layout/images/bx_bx-help-circle.png" alt="" className="button-shell__img"/></button>
                <button className="control-panel__button button-shell"><img src="../src/layout/images/exit.png" alt="" className="button-shell__img"/></button>
            </aside>
        </Fragment>
    );
}