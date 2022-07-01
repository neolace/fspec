
// Soft UI Dashboard PRO React components
import SuiTypography from "components/SuiTypography";

const categoriesListData = [
  {
    color: "dark",
    icon: "devices_other",
    name: "الأجهزة",
    description: (
      <>
        250 في المخزن,{" "}
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          346+ تم البيع
        </SuiTypography>
      </>
    ),
    route: "/",
  },
  {
    color: "dark",
    icon: "settings",
    name: "تذاكر",
    description: (
      <>
        123 مغلق,{" "}
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          15 افتح
        </SuiTypography>
      </>
    ),
    route: "/",
  },
  {
    color: "dark",
    icon: "info",
    name: "سجلات الخطأ",
    description: (
      <>
        1 is نشيط,{" "}
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          40 مغلق
        </SuiTypography>
      </>
    ),
    route: "/",
  },
  {
    color: "dark",
    icon: "thumb_up",
    name: "المستخدمين السعداء",
    description: (
      <SuiTypography variant="caption" color="text" fontWeight="medium">
        + 430
      </SuiTypography>
    ),
    route: "/",
  },
];

export default categoriesListData;
