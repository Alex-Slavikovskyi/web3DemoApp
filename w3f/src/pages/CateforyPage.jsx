import { Box, Tab, Tabs } from '@mui/material'
import React from 'react'
import { FilterCategory } from '../components/FilterCategory'
import CardFlow from '../UI/CardFlow'
import { brandPageContent } from '../data/brandPageContent'

export const CateforyPage = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      // gap: '24px',
      paddingTop: '24px',
      position: 'relative',
    }}>
      {/* description section */}
      {/* <FilterCategory /> */}


      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Item One"  />
        <Tab label="Item Two"  />
        <Tab label="Item Three"  />
        {/* <Tab label="Item Four" {...a11yProps(3)} />
        <Tab label="Item Five" {...a11yProps(4)} />
        <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} /> */}
      </Tabs>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>

      {/* main section */}
      <Box sx={{
        width: '872px',
        display: 'flex',
        alignContent: 'start',
        flexWrap: 'wrap',
        gap: '26px'
      }}>
        {
          brandPageContent.map(card => (
            <CardFlow key={card.id}
              title={card.title}
              subtitle={card.subtitle}
              startValue={card.startValue}
              image={card.image}
              subscription={card.subscription}
              card={card}
            />
          ))
        }
      </Box>
    </Box>
  )
}
