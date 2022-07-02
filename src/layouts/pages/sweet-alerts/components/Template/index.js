// prop-types is a library for type checking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";

function Template({
	title,
	action,
}) {
	return (
		<Card>
			<SuiBox
				p={
					3
				}
				textAlign="center">
				<SuiBox
					mb={
						2
					}>
					<SuiTypography
						variant="body2"
						color="text">
						{
							title
						}
					</SuiTypography>
				</SuiBox>
				<SuiButton
					variant="gradient"
					color="info"
					onClick={
						action
					}>
					try
					me!
				</SuiButton>
			</SuiBox>
		</Card>
	);
}

// Typechecking props for the Template
Template.propTypes =
	{
		title:
			PropTypes
				.string
				.isRequired,
		action:
			PropTypes
				.func
				.isRequired,
	};

export default Template;
