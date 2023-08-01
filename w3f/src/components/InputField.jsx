import { Box, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
  backgroundColor: '#19232C',
  color: '#263039',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'row-reverse',
  '& .Mui-focused': {
    border: '1px solid #55E5C5',
  },
  width: '350px',
  '&:focus-within .MuiSvgIcon-root': {
    color: '#55E5C5',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  color: 'inherit', 
  // height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: '100%',
  color: '#FFF',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    paddingLeft: '12px',
    width: '100%',
  },
}));

export const SearchField = () => {
  return (
    <Box>
      <Search>
        <StyledInputBase />
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
      </Search>
    </Box>
  );
};
