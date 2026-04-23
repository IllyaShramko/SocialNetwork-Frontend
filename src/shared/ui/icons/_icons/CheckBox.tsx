import { COLORS } from "@shared/constants/colors";
import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export function CheckBoxIcon({color, ...props}: SvgProps) {
	return (
		<Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
			<Path
				d="M13.75 6.875l-5.25 6.25-2.25-2.5"
				stroke={color || COLORS.plum}
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeOpacity={1}
			/>
			<Path
				d="M15.625 2.5H4.375C3.339 2.5 2.5 3.34 2.5 4.375v11.25c0 1.035.84 1.875 1.875 1.875h11.25c1.035 0 1.875-.84 1.875-1.875V4.375c0-1.036-.84-1.875-1.875-1.875z"
				stroke={color || COLORS.plum}
				strokeWidth={2}
				strokeLinejoin="round"
				strokeOpacity={1}
			/>
		</Svg>
	);
}
