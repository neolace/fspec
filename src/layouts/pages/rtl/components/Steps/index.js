// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiBadge from "components/SuiBadge";

function Steps() {
  return (
    <Card>
      <SuiBox p={3}>
        <SuiTypography variant="body2" color="text" fontWeight="regular">
          Move
        </SuiTypography>
        <SuiBox mt={2} mb={1} lineHeight={0}>
          <SuiTypography variant="h3" fontWeight="bold">
            11.4R
          </SuiTypography>
        </SuiBox>
        <SuiBadge variant="contained" color="success" badgeContent="+4.3%" container />
      </SuiBox>
    </Card>
  );
}

export default Steps;
