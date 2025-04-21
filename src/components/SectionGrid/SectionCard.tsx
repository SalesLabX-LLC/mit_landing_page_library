import React, { useState } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Dialog,
  DialogContent,
  Snackbar,
  Button
} from '@mui/material';
import { Section } from '../../data/types';

interface SectionCardProps {
  section: Section;
}

const SectionCard: React.FC<SectionCardProps> = ({ section }) => {
  const [hovered, setHovered] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleCardClick = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleCopy = (text: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    navigator.clipboard.writeText(text);
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <Card
        sx={{ position: 'relative', cursor: 'pointer' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={handleCardClick}
      >
        <CardMedia
          component="img"
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
              alignItems: 'center',
              gap: 2,
              pointerEvents: 'none',
              flexDirection: 'row'
            }}
          >
            <Button
              onClick={(e) => handleCopy(section.htmlCode, e)}
              sx={{
                backgroundColor: '#001C39',
                color: '#ffffff',
                pointerEvents: 'auto',
                '&:hover': {
                  backgroundColor: '#003366'
                }
              }}
            >
              Copy HTML
            </Button>
            {section.cssCode && (
            <Button
              onClick={(e) => handleCopy(section.cssCode, e)}
              sx={{
                backgroundColor: '#FF8000',
                color: '#ffffff',
                pointerEvents: 'auto',
                '&:hover': {
                  backgroundColor: '#e67300'
                }
              }}
            >
              Copy CSS
            </Button>
            )}
          </Box>
        )}
      </Card>

      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="lg">
        <DialogContent sx={{ p: 0 }}>
          <img
            src={section.previewImg}
            alt={section.title}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </DialogContent>
      </Dialog>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
        message="Copied to clipboard!"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </>
  );
};

export default SectionCard;
