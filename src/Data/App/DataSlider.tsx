import React from 'react';
import Box from '@mui/material/Box';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import MuiInput from '@mui/material/Input';
import VolumeUp from '@mui/icons-material/VolumeUp';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

//  Row 1 START
// Range Slider default********

const marks = [
  {
    value: 0,
    label: '10',
  },

  {
    value: 100,
    label: '100',
  },
];

function valuetext(value): any {
  return `${value}`;
}

export function RangeSliderDefault() {
  return (
    <Box sx={{ width: "100%" }}>
      <Slider defaultValue={10} getAriaValueText={valuetext} step={1} valueLabelDisplay="on" marks={marks} />
    </Box>
  )
};

// Range Slider default upto 1000*************


const mark = [
  {
    value: 100,
    label: '100',
  },

  {
    value: 1000,
    label: '1000',
  },
];

function valuetext1(value: number) {
  return `${value}`;
}

export function DiscreteSlider() {
  return (
    <Box sx={{ width: "100%" }}>
      <Slider   defaultValue={550} getAriaValueText={valuetext1} valueLabelDisplay="on" step={1} min={100} max={1000} marks={mark} />
    </Box>
  );
}

// Range Slider dollar$***********


const Mark = [
  {
    value: 0,
    label: '$0',
  },
  {
    value: 250,
    label: '$250',
  },
  {
    value: 500,
    label: '$500',
  },
  {
    value: 750,
    label: '$750',
  },
  {
    value: 1000,
    label: '$1000',
  }
];


function valuetext4(value: number) {
  return `${value}°C`;
};

export function TrackInvertedSlider() {
  const [value, setValue] = React.useState<number[]>([200, 800]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Slider
        onChange={handleChange}
        valueLabelDisplay="on"
        getAriaValueText={valuetext4}
        value={value}
        min={0}
        max={1000}
        defaultValue={[200, 800]}
        marks={Mark}
      />
    </Box>
  );
}

// Range Slider negetive to positive

const Marking = [
  {
    value: -1000,
    label: '-1000',
  },
  {
    value: -500,
    label: '-500',
  },
  {
    value: 0,
    label: '0',
  },
  {
    value: 500,
    label: '$750',
  },
  {
    value: 1000,
    label: '1000',
  }
];

export function valuetext3(value: number) {
  return `${value}$`;
}

export function DiscreteSliderSteps() {
  const [value, setValue] = React.useState<number[]>([-750, 750]);

  const handleChange1 = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Slider
        onChange={handleChange1}
        valueLabelDisplay="on"
        getAriaValueText={valuetext3}
        value={value}
        min={-1000}
        max={1000}
        marks={Marking}
        defaultValue={[-500, 500]}
        step={250}
      />
    </Box>
  );
}


//  Row 1 END




//  Row 2 START

// Range Slider Ios Design


interface Props {
  children: React.ReactElement;
  value: number;
}

const iOSBoxShadow =
  "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)";

const marker = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 100,
    label: '100',
  }
];

const IOSSlider = styled(Slider)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#3880ff" : "#3880ff",
  height: 2,
  padding: "15px 0",
  "& .MuiSlider-thumb": {
    height: 28,
    width: 28,
    backgroundColor: "#fff",
    boxShadow: iOSBoxShadow,
    "&:focus, &:hover, &.Mui-active": {
      boxShadow:
        "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: iOSBoxShadow
      }
    }
  },
  "& .MuiSlider-valueLabel": {
    fontSize: 12,
    fontWeight: "normal",
    top: -6,
    backgroundColor: "unset",
    color: theme.palette.text.primary,
    "&:before": {
      display: "none"
    },
    "& *": {
      background: "transparent",
      color: theme.palette.mode === "dark" ? "#fff" : "#000"
    }
  },
  "& .MuiSlider-mark": {
    backgroundColor: "#bfbfbf",
    height: 8,
    width: 1,
    "&.MuiSlider-markActive": {
      opacity: 1,
      backgroundColor: "currentColor"
    }
  }
}));

export function CustomizedSlider() {
  return (
    <Box sx={{ width: "100%" }}>

      <IOSSlider
        // getAriaLabel="ios slider"
        defaultValue={10}
        marks={marker}
        valueLabelDisplay="on"
      />
    </Box>
  );
}

// Range Slider pretto Design

interface Props {
  children: React.ReactElement;
  value: number;
}

const markey = [
  {
    value: 100,
    label: '100',
  },
  {
    value: 1000,
    label: '1000',
  }
];

const PrettoSlider = styled(Slider)({
  color: 'primary',
  height: 5,
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#5389b8',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});

export default function CustomizedPrettoSlider() {
  return (
    <PrettoSlider
      valueLabelDisplay="auto"
      // getAriaLabel="pretto slider"
      defaultValue={560}
      marks={markey}
      step={1}
      min={100}
      max={1000}
    />
  )
};

// Range Slider Tooltip value label

interface Props {
  children: React.ReactElement;
  value: number;
}

const Markee = [
  {
    value: 0,
    label: '$0',
  },
  {
    value: 250,
    label: '$250',
  },
  {
    value: 500,
    label: '$500',
  },
  {
    value: 750,
    label: '$750',
  },
  {
    value: 1000,
    label: '$1000',
  }
];

function ValueLabelComponent2(props: Props) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}
export function ValueLabel() {
  return (
    <Box sx={{ width: "100%" }}>
      <Slider
        valueLabelDisplay="auto"
        components={{
          ValueLabel: ValueLabelComponent2,
        }}
        step={250}
        // getAriaLabel="custom thumb label"
        defaultValue={[200, 800]}
        marks={Markee}
        getAriaValueText={valuetext4}
        min={0}
        max={1000}
      />
    </Box>
  )
};

// Range Slider with prise set 

const Markr = [
  {
    value: -1000,
    label: '-1000',
  },
  {
    value: -500,
    label: '-500',
  },
  {
    value: 0,
    label: '0',
  },
  {
    value: 500,
    label: '$750',
  },
  {
    value: 1000,
    label: '1000',
  }
];

const AirbnbSlider = styled(Slider)(({ theme }) => ({
  color: `$primary`,
  height: 3,
  padding: '13px 0',
  '& .MuiSlider-thumb': {
    height: 27,
    width: 27,
    backgroundColor: '#fff',
    border: '1px solid currentColor',
    '&:hover': {
      boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
    },
    '& .airbnb-bar': {
      height: 9,
      width: 1,
      backgroundColor: 'currentColor',
      marginLeft: 1,
      marginRight: 1,
    },
  },
  '& .MuiSlider-track': {
    height: 3,
  },
  '& .MuiSlider-rail': {
    color: theme.palette.mode === 'dark' ? '#5389b8' : '#d8d8d8',
    opacity: theme.palette.mode === 'dark' ? undefined : 1,
    height: 3,
  },
}));

interface AirbnbThumbComponentProps extends React.HTMLAttributes<unknown> { }

function AirbnbThumbComponent(props: AirbnbThumbComponentProps) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
    </SliderThumb>
  );
}

export function PriceSelector() {
  return (

    <AirbnbSlider
      components={{ Thumb: AirbnbThumbComponent }}
      getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
      defaultValue={[-750, 250]}
      marks={Markr}
      valueLabelDisplay="on"
      min={-1000}
      max={1000}
      step={250}
    />
  )
};

//  Row 2 END

//  Row 3 START

// Slider with input field

const Input = styled(MuiInput)`
  width: 42px;
`;

export function InputSlider() {
  const [value, setValue] = React.useState<number | string | Array<number | string>>(
    30,
  );

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Typography id="input-slider" gutterBottom>
        Volume range
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <VolumeUp />
        </Grid>
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>
        <Grid item>
          <Input
            value={value}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

// TrackInverted Tempreture

const MarkData = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 40,
    label: '40°C',
  },
  {
    value: 70,
    label: '70°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];

function valuetext6(value: number) {
  return `${value}°C`;
}

export function TrackInvertedDesign() {
  return (
    <Box sx={{ width: '100%' }}>
      <Typography id="track-inverted-range-slider" gutterBottom>
        Inverted tempreture track range
      </Typography>
      <Slider
        track="inverted"
        aria-labelledby="track-inverted-range-slider"
        getAriaValueText={valuetext6}
        defaultValue={[28, 37]}
        marks={MarkData}
        valueLabelDisplay="auto"
      />
    </Box>
  );
}


// Storage Track


function valueLabelFormat(value: number) {
  const units = ['KB', 'MB', 'GB', 'TB'];

  let unitIndex = 0;
  let scaledValue = value;

  while (scaledValue >= 1024 && unitIndex < units.length - 1) {
    unitIndex += 1;
    scaledValue /= 1024;
  }

  return `${scaledValue} ${units[unitIndex]}`;
}

function calculateValue(value: number) {
  return 2 ** value;
}

export function StorageSlider() {
  const [value, setValue] = React.useState<number>(10);

  const handleChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      setValue(newValue);
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Typography id="non-linear-slider" gutterBottom>
        Storage: {valueLabelFormat(calculateValue(value))}
      </Typography>
      <Slider
        value={value}
        min={5}
        step={1}
        max={30}
        scale={calculateValue}
        getAriaValueText={valueLabelFormat}
        valueLabelFormat={valueLabelFormat}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
      />
    </Box>
  );
}


//  Row 3 END
