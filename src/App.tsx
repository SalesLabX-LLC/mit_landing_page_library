// File: src/App.tsx
import { useState } from 'react';
import { Box, CssBaseline, AppBar, Toolbar, IconButton, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

import Sidebar from './components/Sidebar/Sidebar';
import SectionGrid from './components/SectionGrid/SectionGrid';
import { categories } from './data'; 


function App() {
  const [selectedCategoryId, setSelectedCategoryId] = useState(categories[0].id);

  // For responsive drawer
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const drawerWidth = 240;

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  // Find the currently selected category data
  const currentCategory = categories.find(cat => cat.id === selectedCategoryId);

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{
          ml: isMobile ? 0 : `${drawerWidth}px`,
          width: isMobile ? '100%' : `calc(100% - ${drawerWidth}px)`
        }}
      >
        <Toolbar>
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" noWrap component="div">
            MIT Landing Page Library
          </Typography>
        </Toolbar>
      </AppBar>

      {/* SIDEBAR */}
      <Sidebar
        drawerWidth={drawerWidth}
        mobileOpen={mobileOpen}
        onDrawerToggle={handleDrawerToggle}
        isMobile={isMobile}
        categories={categories}
        selectedCategoryId={selectedCategoryId}
        onSelectCategory={setSelectedCategoryId}
      />

      {/* MAIN CONTENT */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 2,
          mt: '64px',
          
        }}
      >
        <SectionGrid category={currentCategory} />
      </Box>
    </Box>
  );
}

export default App;
