// src/components/SectionGrid/SectionCard.tsx
import React, { useState } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Box,
  Tooltip
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Section } from '../../data/types';

interface SectionCardProps {
  section: Section;
}

const SectionCard: React.FC<SectionCardProps> = ({ section }) => {
  const [hovered, setHovered] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  return (
    <Card
      sx={{ 
        position: 'relative', 
        // If you want the entire card to share a fixed height across all sections:
        // height: 300, // or some uniform value 
        // display: 'flex', 
        // flexDirection: 'column'
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <CardMedia
        component="img"
        // Force the same height for *all* images
        sx={{
          width: '100%',
          height: 140,
          objectFit: 'cover'
        }}
        image={section.previewImg}
        alt={section.title}
      />
      <CardContent>
        <Typography variant="subtitle1">{section.title}</Typography>
      </CardContent>

      {hovered && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            bgcolor: 'rgba(0,0,0,0.3)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Tooltip title="Copy HTML">
            <IconButton
              sx={{ color: '#fff', mx: 1 }}
              onClick={() => handleCopy(section.htmlCode)}
            >
              <ContentCopyIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Copy CSS">
            <IconButton
              sx={{ color: '#fff', mx: 1 }}
              onClick={() => handleCopy(section.cssCode)}
            >
              <ContentCopyIcon />
            </IconButton>
          </Tooltip>
        </Box>
      )}
    </Card>
  );
};

export default SectionCard;
