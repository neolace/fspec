/**
 =========================================================
 * Soft UI Dashboard PRO React - v3.1.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
 * Copyright 2022 Creative Tim (https://www.creative-tim.com)

 Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */

import { useEffect, useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard PRO React base styles
import breakpoints from "assets/theme/base/breakpoints";

// Soft UI Dashboard PRO React example components
import CameraView from "layouts/dashboards/smart-home/components/CameraView";

// Images
import camera1 from "assets/images/bg-smart-home-1.jpg";
import camera2 from "assets/images/bg-smart-home-2.jpg";
import camera3 from "assets/images/home-decor-3.jpg";

function Cameras() {
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [openMenu, setOpenMenu] = useState(null);
  const [camera, setCamera] = useState(0);

  useEffect(() => {
    // A function that sets the orientation state of the tabs.
    function handleTabsOrientation() {
      return window.innerWidth < breakpoints.values.md
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    }

    /**
     The event listener that's calling the handleTabsOrientation function when resizing the window.
     */
    window.addEventListener("resize", handleTabsOrientation);

    // Call the handleTabsOrientation function to set the state with the initial value.
    handleTabsOrientation();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [tabsOrientation]);

  const handleSetCamera = (event, newCamera) => setCamera(newCamera);
  const handleOpenMenu = ({ currentTarget }) => setOpenMenu(currentTarget);
  const handleCloseMenu = () => setOpenMenu(null);

  const renderMenu = () => (
    <Menu
      anchorEl={openMenu}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(openMenu)}
      onClose={handleCloseMenu}
    >
      <MenuItem onClick={handleCloseMenu}>Pause</MenuItem>
      <MenuItem onClick={handleCloseMenu}>Stop</MenuItem>
      <MenuItem onClick={handleCloseMenu}>Schedule</MenuItem>
      <SuiBox component="div" bgColor="secondary" opacity={0.3} width="100%" height="1px" my={1} />
      <MenuItem onClick={handleCloseMenu}>
        <SuiTypography variant="inherit" color="error">
          Remove
        </SuiTypography>
      </MenuItem>
    </Menu>
  );

  return (
    <Card>
      <SuiBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
        <SuiTypography variant="h6">Cameras</SuiTypography>
        <SuiBox display="flex" justifyContent="space-between" alignItems="center" width="60%">
          <SuiBox width="90%">
            <AppBar position="static">
              <Tabs orientation={tabsOrientation} value={camera} onChange={handleSetCamera}>
                <Tab label="Kitchen" />
                <Tab label="Living" />
                <Tab label="Attic" />
              </Tabs>
            </AppBar>
          </SuiBox>
          {renderMenu()}
          <SuiTypography
            color="text"
            onClick={handleOpenMenu}
            sx={{
              lineHeight: 0,
              cursor: "pointer",
            }}
          >
            <Icon fontSize="default">more_vert</Icon>
          </SuiTypography>
        </SuiBox>
      </SuiBox>
      <SuiBox p={2} mt={1} width="100%" height="26.25rem">
        <CameraView image={camera1} date="17.05.2021" time="4:34PM" value={camera} index={0} />
        <CameraView image={camera2} date="17.05.2021" time="4:35PM" value={camera} index={1} />
        <CameraView image={camera3} date="17.05.2021" time="4:57PM" value={camera} index={2} />
      </SuiBox>
    </Card>
  );
}

export default Cameras;
