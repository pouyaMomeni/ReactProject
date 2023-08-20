import * as React from 'react';
import PropTypes from 'prop-types';
import {Tabs} from '@material-ui/core';
import {Tab} from '@material-ui/core';
import {Typography} from '@material-ui/core';
import {Box} from '@material-ui/core';
import { CustomButtonLanding } from '../../components/Button';
import './index.css' 
import { AntTab,AntTabs,StyledTab,StyledTabs } from './style';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography style={{fontSize:'0.85rem'}} color='white'>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{display:'flex',padding:'2rem',flexDirection:{xs:'column',sm:'column',md:'row',lg:'row'},alignItems:'center',justifyContent:'center',bgcolor:'#eaeaea'}}>
        <Box sx={{display:'flex',flexDirection:'column' }}>
        <Box sx={{marginBottom:'1rem',fontSize:'1.2rem',fontWeight:'bold',borderRight:1,display:'flex',justifyContent:'center'}}>
            <Box>به فردا خوش آمدید</Box>
        </Box>
        <Box>
            <Box sx={{display:'flex',justifyContent:'center'}}>
                <AntTabs value={value} onChange={handleChange} aria-label="basic tabs example" >
                <AntTab className='tabs'  label="هوش مصنوعی چیست؟" {...a11yProps(0)} />
                <AntTab label="هوش مصنوعی و روانشناسی" {...a11yProps(1)} />
                <AntTab label="چرا هوش مصنوعی؟" {...a11yProps(2)} />
                </AntTabs>
            </Box>
            
            <TabPanel value={value} index={0} >
            هوش مصنوعی، اکنون واقعیتی علمی است نه داستانی خیالی... گرچه آغاز رسمی آن در سال 1956 میلادی اتفاق افتاد، اما ایده هوش مصنوعی برای اکثر مردم یاد آورنده فیلم های تخیلی است. امروزه، هوش مصنوعی با نرخ بسیار بالایی در جامعه در حال نفوذ است. هدف هوش مصنوعی، یادگیری، پیش بینی و تحلیل داده هاست که در این خصوص توانسته خدمات فوق تصور به انسان ارائه نماید.
            </TabPanel>
            <TabPanel value={value} index={1}>
            متخصصان روانشناسی از دهه ۱۹۸۰ پیش بینی کرده‌اند که هوش مصنوعی در آینده در حوزه مشاوره نفوذ خواهد کرد. برخی از محققان بر نقش موثر مدل هوش مصنوعی به عنوان یک پیش‏ بینی‏کننده معتبر در راهنمایی روانشناسان و روانپزشکان برای تعیین یک درمان رفتاری و یا دارویی مناسب، تاکید می‏نمایند. با استفاده از ظرفیت هوش مصنوعی، مشاوره ازدواجی بهتر، دقیق‌تر و با خطای کمتری ارائه خواهد شد.
            </TabPanel>
            <TabPanel value={value} index={2}>
            یکی از دغدغه های اصلی در مشاوره روانشناسی، پیش بینی پدیده‌هاست. هوش مصنوعی یک فرایند یادگیرنده است که توانایی تحلیل داده‌ها و همچنین ارائه راه‌حل‌های دقیق را براساس تجربه و تحلیل داده‌ها دارد که قابل مقایسه با انسان نیست. برخلاف یک انسان، هوش مصنوعی می‌تواند تمام داده‌های جمع آوری شده خود را ذخیره و به خاطر بسپارد و بهترین درمان شخصی را ارائه دهد.
            </TabPanel>
        </Box>
        </Box>
    </Box>

  );
}