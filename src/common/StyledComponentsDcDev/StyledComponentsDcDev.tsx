import { styled, Tooltip, TooltipProps }from '@mui/material';
export interface StyledComponentsDcDevInterface {
	children: JSX.Element;
	msg: string;
}
const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))`
  & .MuiTooltip-tooltip {
    background: primary;
  }
  `;

const StyledComponentsDcDev : React.FC<StyledComponentsDcDevInterface> = ({
	children,
	msg
}) => {
	return (
		<div>
			<StyledTooltip title={msg}>
				{children}
    	</StyledTooltip>
		</div>
	);
};

export default StyledComponentsDcDev;
