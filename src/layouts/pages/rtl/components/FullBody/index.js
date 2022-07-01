
// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiBadge from "components/SuiBadge";

function FullBody() {
  return (
    <Card>
      <SuiBox
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        pt={3}
        mb={2}
        px={3}
      >
        <SuiTypography variant="body2" color="text" fontWeight="regular">
          جسم كامل
        </SuiTypography>
        <SuiBadge variant="contained" color="info" badgeContent="معتدل" />
      </SuiBox>
      <SuiBox pb={3} px={3}>
        <SuiTypography variant="body2" color="text" fontWeight="regular">
          ما يهم هو الأشخاص الذين أوقدوه. والناس الذين يشبهونهم مستاءون منه.
        </SuiTypography>
      </SuiBox>
    </Card>
  );
}

export default FullBody;
