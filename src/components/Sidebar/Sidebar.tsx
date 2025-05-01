import { FC } from 'react';
import {
  Drawer,
  Box,
  List,
  ListItemButton,
  ListItemText,
  FormControl,
  Select,
  MenuItem,
  Divider
} from '@mui/material';
import { Category } from '../../data/types';
import { useTheme } from '@mui/material/styles';
import { clients } from '../../data/clients';

interface SidebarProps {
  drawerWidth: number;
  mobileOpen: boolean;
  onDrawerToggle: () => void;
  isMobile: boolean;
  categories: Category[];
  selectedCategoryId: string;
  onSelectCategory: (id: string) => void;
  selectedClientId: string;
  onSelectClient: (id: string) => void;
}

const Sidebar: FC<SidebarProps> = ({
  drawerWidth,
  mobileOpen,
  onDrawerToggle,
  isMobile,
  categories,
  selectedCategoryId,
  onSelectCategory,
  selectedClientId,
  onSelectClient
}) => {
  const theme = useTheme();

  const activeBg = {
    light: '#A4DFF7',
    dark: '#011326',
  };

  return (
    <Drawer
      variant={isMobile ? 'temporary' : 'permanent'}
      open={isMobile ? mobileOpen : true}
      onClose={isMobile ? onDrawerToggle : undefined}
      ModalProps={{ keepMounted: true }}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          borderRadius: '0 20px 20px 0',
          backgroundColor: theme.palette.mode === 'dark' ? '#003463' : '#E6F6FC',
          paddingTop: theme.spacing(2),
          paddingX: theme.spacing(2),
        }
      }}
    >
      {/* Logo */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 2 }}>
        <img
          src={`${import.meta.env.BASE_URL}SLX-logo.png`}
          alt="SalesLabX"
          style={{ height: 20, objectFit: 'contain' }}
        />
      </Box>

      {/* Client Selector */}
      <Box sx={{ px: 0, mb: 1 }}>
        <FormControl
          fullWidth
          size="medium"
          variant="outlined"
          sx={{
            '& .MuiOutlinedInput-root': {
              backgroundColor: '#fff',
              borderRadius: 2,
              boxShadow: 'none',
              '& fieldset': {
                border: 'none',
              },
            },
          }}
        >
          <Select
            value={selectedClientId}
            displayEmpty
            onChange={(e) => onSelectClient(e.target.value)}
            renderValue={(selected) => {
              if (!selected) {
                return <span style={{ color: '#aaa' }}>Choose Client</span>;
              }
              return clients.find((c) => c.id === selected)?.name;
            }}
            sx={{ fontSize: 14 }}
          >
            <MenuItem disabled value="">
              Choose Client
            </MenuItem>
            {clients.map((client) => (
              <MenuItem key={client.id} value={client.id}>
                {client.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>


      </Box>

      <Divider sx={{ my: 2 }} />

      {/* Navigation Items */}
      <Box>
        <List>
          {categories.map((cat) => {
            const isActive = cat.id === selectedCategoryId;
            return (
              <ListItemButton
                key={cat.id}
                selected={isActive}
                onClick={() => {
                  onSelectCategory(cat.id);
                  if (isMobile) onDrawerToggle();
                }}
                sx={{
                  borderRadius: '10px',
                  marginBottom: '6px',
                  backgroundColor: isActive ? activeBg[theme.palette.mode] : 'transparent',
                  '&:hover': {
                    backgroundColor: activeBg[theme.palette.mode],
                  },
                  paddingY: 0.5,
                  paddingX: 2,
                }}
              >
                <ListItemText
                  primary={cat.name}
                  primaryTypographyProps={{
                    fontWeight: isActive ? 700 : 500,
                    fontSize: '0.95rem',
                  }}
                />
              </ListItemButton>
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
