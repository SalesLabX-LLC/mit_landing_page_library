import type { FC } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import SectionCard from './SectionCard';
import { Category, Section } from '../../data/types'; 

interface SectionGridProps {
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
    <Box p={2} sx={{ height: 'calc(100vh - 64px)' }}>
      <Typography variant="h5" gutterBottom>
        {category.name} Sections
      </Typography>
      <Grid container spacing={2} sx={{ height: '100%' }}>
        {category.sections.map((section: Section) => (
          <Grid item xs={6} key={section.id} sx={{ height: '50%' }}>
            <SectionCard section={section} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SectionGrid;
