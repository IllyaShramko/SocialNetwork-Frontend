import { COLORS } from "@shared/constants/colors";
import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export function DeleteIcon({color, ...props}: SvgProps) {
	return (
		<Svg width={15} height={17} viewBox="0 0 15 17" fill="none" {...props}>
			<Path
				d="M.833 4.167h13.333M5.833 7.5v5m3.333-5v5m-7.5-8.333l.834 10a1.667 1.667 0 001.666 1.666h6.667a1.666 1.666 0 001.667-1.666l.833-10M5 4.167v-2.5a.833.833 0 01.833-.834h3.333a.833.833 0 01.834.834v2.5"
				stroke={color || COLORS.blue}
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeOpacity={1}
			/>
		</Svg>
	);
}
