import React from 'react';
import { useStore } from '../../state/store.media';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


const TagsLayout = () => {
 
 const bears = useStore((state) => state.bears)
 const increasePopulation = useStore((state) => state.increasePopulation)
  return (
    <div>
      <div>TagsLayout</div>
      <div>Bears are: {bears}</div>
      <IconButton edge="start" color="inherit" onClick={() => increasePopulation()}>
        <MenuIcon />
      </IconButton>
    </div>
  );
};

export default TagsLayout;