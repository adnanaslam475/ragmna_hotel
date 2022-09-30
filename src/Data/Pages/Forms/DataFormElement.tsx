import React, { useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";

export function YourSkills() {
    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <ToggleButtonGroup type="checkbox">
            <ToggleButton className="me-2" id="toggle-check1" checked={isChecked} variant="outline-primary" value={1} onChange={handleOnChange}>HTML  </ToggleButton>
            <ToggleButton className="me-2" id="toggle-check2" checked={isChecked} variant="outline-primary" value={2} onChange={handleOnChange}>CSS </ToggleButton>
            <ToggleButton className="me-2" id="toggle-check3" checked={isChecked} variant="outline-primary" value={3} onChange={handleOnChange}>PHP </ToggleButton>
            <ToggleButton className="me-2" id="toggle-check4" checked={isChecked} variant="outline-primary" value={4} onChange={handleOnChange}>JavaScript  </ToggleButton>
            <ToggleButton className="me-2" id="toggle-check5" checked={isChecked} variant="outline-primary" value={5} onChange={handleOnChange}>React </ToggleButton>
            <ToggleButton className="me-2" id="toggle-check6" checked={isChecked} variant="outline-primary" value={6} onChange={handleOnChange}>Angular </ToggleButton>
            <ToggleButton className="me-2" id="toggle-check7" checked={isChecked} variant="outline-primary" value={7} onChange={handleOnChange}>Java </ToggleButton>
            <ToggleButton className="me-2" id="toggle-check8" checked={isChecked} variant="outline-primary" value={8} onChange={handleOnChange}>C++ </ToggleButton>
        </ToggleButtonGroup>

    );
}