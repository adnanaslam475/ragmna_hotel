import React, { useState } from 'react'
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

// Radio Button Group START

export function Buttondata() {
    return (
        <div>
            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                <ToggleButton id="tbg-radio-1" variant='outline-primary' value={1} >
                    Radio 1
                </ToggleButton>
                <ToggleButton id="tbg-radio-2" variant='outline-primary' value={2}>
                    Radio 2
                </ToggleButton>
                <ToggleButton id="tbg-radio-3" variant='outline-primary' value={3}>
                    Radio 3
                </ToggleButton>
            </ToggleButtonGroup>

        </div>
    )
}

// Radio Button Group END

// Checkbox Button Group START

export function Checkedbutton() {
const [isChecked, setIsChecked] = useState(false);

const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

    return (
        <ToggleButtonGroup type="checkbox" >
            <ToggleButton className="mb-2" id="toggle-check" checked={isChecked} variant="outline-primary" value={1} onChange={handleOnChange}>Checkbox  </ToggleButton>
            <ToggleButton className="mb-2" id="toggle-check1" checked={isChecked} variant="outline-primary" value={2} onChange={handleOnChange}>Checkbox </ToggleButton>
            <ToggleButton className="mb-2" id="toggle-check2" checked={isChecked} variant="outline-primary" value={3} onChange={handleOnChange}>Checkbox </ToggleButton>
        </ToggleButtonGroup>

    );
}

// Checkbox Button Group END
