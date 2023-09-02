import React from "react";
import Select from "react-select";

const Selection = ({ onSelection }) => {
    const options = Array.from({ length: 36 }, (_, index) => ({
        value: index + 1,
        label: index + 1,
    }));
    return (
        <div className="selector">
            <Select
                options={options}
                onChange={onSelection}
                placeholder="Index"
                className="responsive-select"
            />
        </div>
    );
};

export default Selection;
