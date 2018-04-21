import React from 'react';
import './ToolTipWrapper.css';

const toolTipWrapper = (props) => {
    return(
        <div className="Gtooltip">
            {props.children}
            <div className="Gtooltiptext">
                {props.tooltiptext}
            </div>
        </div>
    )
};

export default toolTipWrapper;