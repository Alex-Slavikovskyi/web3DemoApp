import { Box } from '@mui/material';

const Container = ({ children, ...props }) => {
  return (
    <Box
      sx={{
        maxWidth: { xs: '480px', md: '768px', lg: '1320px' },
        margin: '0 auto',
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default Container;
