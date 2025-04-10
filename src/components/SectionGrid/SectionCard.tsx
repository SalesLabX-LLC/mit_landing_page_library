import React, { useState } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Box,
  Tooltip,
  Dialog,
  DialogContent,
  Snackbar
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Section } from '../../data/types';

interface SectionCardProps {
  section: Section;
}

const SectionCard: React.FC<SectionCardProps> = ({ section }) => {
  const [hovered, setHovered] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  // For the non-blocking copy feedback:
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleCardClick = () => {
    console.log('Card clicked!');
    setOpenDialog(true);
  };

  const handleCloseDialog = () => setOpenDialog(false);

  // Called by the copy icons:
  const handleCopy = (text: string, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    navigator.clipboard.writeText(text);
    // Show a quick, auto-disappearing message
    setSnackbarOpen(true);
  };

  // Close the "Copied" message
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
              pointerEvents: 'none', // let card clicks pass through
            }}
          >
            {/* The icons themselves get pointerEvents: 'auto' so they're still clickable */}
            <Tooltip title="Copy HTML">
              <IconButton
                sx={{ color: '#fff', mx: 1, pointerEvents: 'auto' }}
                onClick={(e) => handleCopy(section.htmlCode, e)}
              >
                <ContentCopyIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Copy CSS">
              <IconButton
                sx={{ color: '#fff', mx: 1, pointerEvents: 'auto' }}
                onClick={(e) => handleCopy(section.cssCode, e)}
              >
                <ContentCopyIcon />
              </IconButton>
            </Tooltip>
          </Box>
        )}
      </Card>

      {/* Dialog for full-size image */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="lg">
        <DialogContent sx={{ p: 0 }}>
          <img
            src={section.previewImg}
            alt={section.title}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </DialogContent>
      </Dialog>

      {/* Snackbar for quick "Copied to clipboard" feedback */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000} // e.g. 2s
        onClose={handleCloseSnackbar}
        message="Copied to clipboard!"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </>
  );
};

export default SectionCard;
