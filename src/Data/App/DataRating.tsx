import React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CircleIcon from '@mui/icons-material/Circle';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import StarRateIcon from '@mui/icons-material/StarRate';
import Stack from '@mui/material/Stack';
import StarsIcon from '@mui/icons-material/Stars';
import { styled } from '@mui/material/styles';


// Star Rating

export function StarRating() {

  return (
    <div className="rating-stars block">
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Rating name="no-value" size="large" value={3} max={5} />
    </Box>
    </div>
  );
}


// Heart Rating

const StyledRating = styled(Rating)(
  {color: '#F1C40F'}
);

export function HeartRating() {
  return (
    <div className="rating-stars block">
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <StyledRating
        name="customized-color"
        defaultValue={2}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
    </Box>
    </div>
  );
}

// Multi Star Rating

const StyledStarRating = styled(Rating)(
  {color: '#E74C3C'}
);

export function MultiStarRating() {

  return (
    <div className="rating-stars block">
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <StyledStarRating name="no-value" size="large" value={3} max={10} />
    </Box>
    </div>
  );
}

// Multi Heart Rating

const StyledheartRating = styled(Rating)(
  {color: '#E74C3C'}
);

export function MultiHeartRating() {
  return (
    <div className="rating-stars block">
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <StyledheartRating
        name="no-value" size="large" value={3} max={10}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
    </Box>
    </div>
  );
}

// Multi circle Rating


export function MulticircleRating() {

  return (
    <div className="rating-stars block">
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Rating name="no-value" size="large" value={3} max={10} 
       icon={<CircleIcon fontSize="inherit" />}
       emptyIcon={<CircleIcon fontSize="inherit" />} />
       
    </Box>
    </div>
  );
}

// Thumbs-up Rating

export function ThumbsUpRating() {

  return (
    <div className="rating-stars block">
    
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Rating name="no-value" size="large" value={3} max={5}
      icon={<ThumbUpIcon fontSize="inherit" />}
      emptyIcon={<ThumbUpIcon fontSize="inherit" />} />
    </Box>
    </div>
  );
}

// Basic Star Rating

export function BasicStarRating() {

  return (
    

    <Stack spacing={1} className="rating-stars block my-rating">
      <Rating name="half-rating" value={3} precision={0.5} size="large"
      icon={<StarRateIcon fontSize="inherit" />}
      emptyIcon={<StarRateIcon fontSize="inherit" />} />
   </Stack>
   
  );
}

// Rounded star Rating

export function RoundedStarRating() {

  return (
    

    <Stack spacing={1} className="rating-stars  block my-rating-4">
      <Rating name="half-rating" value={3} precision={0.5} size="large"
      icon={<StarsIcon fontSize="inherit" />}
      emptyIcon={<StarsIcon fontSize="inherit" />} />
   </Stack>
   
  );
}

// gradients Rating

export function GradientsRating() {

  return (
    

    <Stack spacing={1} className="rating-stars block my-rating-5">
      <Rating name="half-rating" value={3} precision={0.5} size="large"
      icon={<StarRateIcon fontSize="inherit" />}
      emptyIcon={<StarRateIcon fontSize="inherit" />} />
   </Stack>
   
  );
}


// Execute callback when rating

export function ExecuteCallback(value:any) {
  const onChange = (value:any) => {
    window.alert (`rating is ${value}`);

  }
  return (
    

    <Stack spacing={1} className="rating-stars block my-rating-6">
      <Rating name="half-rating"  value={3} precision={0.5} size="large" onChange={onChange} 
      icon={<StarRateIcon fontSize="inherit" />}
      emptyIcon={<StarRateIcon fontSize="inherit" />} />
   </Stack>
  
  );
}

// read only mode

export function ReadOnlyMode() {
  return (
   

    <Stack spacing={1} className="rating-stars block my-rating-7">
      <Rating name="half-rating-read" value={3} max={5}  size="large" readOnly  />
    </Stack>
  
  );
}


// Use fullstars



// On hover event

const labels: { [index: string]: string } = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value: number) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export function OnHoverEvent () {
  const [value, setValue] = React.useState<number | null>(2);
  const [hover, setHover] = React.useState(-1);

  return (
   

    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarsIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        
      />
      {value !== null && (
        <Box className="rating-stars my-rating-9 rating-9" sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
    
  );
}


// rating level colors
