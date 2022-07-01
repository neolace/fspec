// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard PRO React example components
import DefaultItem from "examples/Items/DefaultItem";

function OrdersOverview() {
  return (
    <Card sx={{ height: "100%" }}>
      <SuiBox pt={2} px={2}>
        <SuiTypography variant="h6" fontWeight="bold">
          الأحداث القادمة
        </SuiTypography>
        <SuiTypography variant="button" color="text" fontWeight="bold">
          انضم
        </SuiTypography>
      </SuiBox>
      <SuiBox p={2}>
        <DefaultItem icon="paid" title="Fossil Part" description="01 Jan 20" />
        <SuiBox mt={3.5}>
          <DefaultItem
            color="primary"
            icon="notifications"
            title=""
            description=""
          />
        </SuiBox>
      </SuiBox>
    </Card>
  );
}

export default OrdersOverview;
