// File: src/components/SectionGrid/SectionGrid.tsx

import type { FC } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import SectionCard from './SectionCard';
// IMPORTANT: import your Category, Section from the new types file
import { Category, Section } from '../../data/types'; 

interface SectionGridProps {
  // category can be undefined if no category selected
  category?: Category;
}

const SectionGrid: FC<SectionGridProps> = ({ category }) => {
  if (!category) {
    return (
      <Box p={2}>
        <Typography variant="h6">No Category Selected</Typography>
      </Box>
    );
  }

  return (
    <Box p={2}>
      <Typography variant="h5" gutterBottom>
        {category.name} Sections
      </Typography>
      <Grid container spacing={2}>
        {category.sections.map((section: Section) => (
          <Grid item xs={6} key={section.id}>
            <SectionCard section={section} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SectionGrid;
