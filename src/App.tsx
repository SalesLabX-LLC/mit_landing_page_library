import { useState, useEffect } from 'react';
import {
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

import Sidebar from './components/Sidebar/Sidebar';
import SectionGrid from './components/SectionGrid/SectionGrid';

import { clients } from './data/clients';

function App() {
  const [selectedClientId, setSelectedClientId] = useState('');
  const selectedClient = clients.find((c) => c.id === selectedClientId) ?? null;

  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  const currentCategory = selectedClient?.categories.find((cat) => cat.id === selectedCategoryId) ?? null;

  useEffect(() => {
    if (selectedClient && selectedClient.categories.length > 0) {
      setSelectedCategoryId(selectedClient.categories[0].id);
    }
  }, [selectedClientId]);

  // For responsive drawer
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const drawerWidth = 240;

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

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

      {/* SIDEBAR always renders */}
      <Sidebar
        drawerWidth={drawerWidth}
        mobileOpen={mobileOpen}
        onDrawerToggle={handleDrawerToggle}
        isMobile={isMobile}
        categories={selectedClient?.categories ?? []}
        selectedCategoryId={selectedCategoryId}
        onSelectCategory={setSelectedCategoryId}
        selectedClientId={selectedClientId}
        onSelectClient={setSelectedClientId}
      />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 2,
          mt: '64px',
        }}
      >
        {currentCategory ? (
          <SectionGrid category={currentCategory} />
        ) : (
          <Typography variant="h6" color="textSecondary">
            Please select a client to begin
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default App;
