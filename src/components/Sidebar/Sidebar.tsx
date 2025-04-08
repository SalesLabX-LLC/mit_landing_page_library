// File: src/components/Sidebar/Sidebar.tsx
import { FC } from 'react';
import { Drawer, Box, List, ListItemButton, ListItemText } from '@mui/material';
import { Category } from '../../data/types'; 

interface SidebarProps {
  drawerWidth: number;
  mobileOpen: boolean;
  onDrawerToggle: () => void;
  isMobile: boolean;

  categories: Category[];
  selectedCategoryId: string;
  onSelectCategory: (id: string) => void;
}

const Sidebar: FC<SidebarProps> = ({
  drawerWidth,
  mobileOpen,
  onDrawerToggle,
  isMobile,
  categories,
  selectedCategoryId,
  onSelectCategory
}) => {
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
          boxSizing: 'border-box'
        }
      }}
    >
      <Box sx={{ p: 2 }}>
        <List>
          {categories.map((cat) => (
            <ListItemButton
              key={cat.id}
              selected={cat.id === selectedCategoryId}
              onClick={() => {
                onSelectCategory(cat.id);
                if (isMobile) onDrawerToggle();
              }}
            >
              <ListItemText primary={cat.name} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
