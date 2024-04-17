
import { React, useState } from 'react';
import './Intro.css';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

function Intro() {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='intro'>
      <TabContext className="tabContext" value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Who We Are" value="1" />
            <Tab label="What We Do" value="2" />
          </TabList>
        </Box>
        <TabPanel className='tabContenet' value="1">
          <b>Dhan Laxmi Enterprises (DLEP)</b> is a Kanpur South based company, known for successful execution of large-scale production of consumer and sanitation products. DLEP is recognized as a registered trademark in India. The company was founded in 2011 and has shown great results in producing quality products.
        </TabPanel>
        <TabPanel className='tabContenet' value="2">
          We are focused on meeting requirement of diverse consumer products with a stable supply of affordable and quality products. We produce health & sanitary chemicals sold at affordable price.
        </TabPanel>
      </TabContext>
    </div>
  );
}

export default Intro