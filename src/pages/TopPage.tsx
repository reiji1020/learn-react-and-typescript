import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import CakeIcon from "@mui/icons-material/Cake";
import KitchenIcon from "@mui/icons-material/Kitchen";
import commonStyle from "../const/commonStyle";
import ListTable from "../components/ListTable";
import { cakeListSetting } from "../const/cakeListSetting";
import { materialListSetting } from "../const/materialListSetting";
import { setCakeList, sellCake, cakeStockInfo, fundsState } from "../reducer/cakeListReducer";
import { useDispatch, useSelector } from "react-redux";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function TopPage() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();
  const setCakeListInitialize = React.useCallback(() => {
    dispatch(setCakeList());
  }, [dispatch])
  const cakeInfo = useSelector(cakeStockInfo);
  const fundsInfo = useSelector(fundsState);

  React.useEffect(() => {
    setCakeListInitialize()
  },[])

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <ThemeProvider theme={commonStyle}>
      {/*AppBar*/}
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            CANDY CHUPS Patisserie.
          </Typography>
        </Toolbar>
      </AppBar>
      <Typography variant="h3" color="secondary">
        現在の資金：{fundsInfo}円
      </Typography>
      {/* main contents */}
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
      >
          <Tab label="販売ケーキ一覧" icon={<CakeIcon />} {...a11yProps(0)} />
          <Tab label="在庫管理" icon={<KitchenIcon />} {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        
        <TabPanel value={value} index={0} dir={theme.direction}>
            <ListTable
              tableSetting={cakeListSetting.tableSetting}
              itemData={cakeInfo}
              sellHandler={() => dispatch(sellCake())}
            ></ListTable>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
            <ListTable
              tableSetting={materialListSetting.tableSetting}
              itemData={materialListSetting.initialList}
            ></ListTable>
        </TabPanel>
      </SwipeableViews>
    </ThemeProvider>
  );
}
