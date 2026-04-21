import { COLORS } from "@shared/constants/colors";
import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export function threePointsIcon(props: SvgProps) {
	return (
		<Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
			<Path
				d="M12.188 10a2.187 2.187 0 11-4.375 0 2.187 2.187 0 014.375 0zM10 5.937a2.187 2.187 0 100-4.374 2.187 2.187 0 000 4.375zm0 8.125a2.187 2.187 0 100 4.375 2.187 2.187 0 000-4.375z"
				fill={COLORS.plum}
				fillOpacity={1}
			/>
		</Svg>
	);
}
