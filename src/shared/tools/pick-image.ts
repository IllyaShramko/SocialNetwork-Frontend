import {
	ImagePickerAsset,
	ImagePickerOptions,
	launchImageLibraryAsync,
	requestMediaLibraryPermissionsAsync,
} from "expo-image-picker";

interface PickImageSuccessful {
	status: "ok";
	assets: ImagePickerAsset[];
}
interface PickImageError {
	status: "error";
	message?: string;
}

export async function pickImage(
	writeOnly: boolean = false,
	options?: ImagePickerOptions,
): Promise<PickImageSuccessful | PickImageError> {
	const permissionResponse =
		await requestMediaLibraryPermissionsAsync(writeOnly);
	if (!permissionResponse.granted) {
		return { status: "error", message: "Permission was not granted" };
	}
	const assets = await launchImageLibraryAsync(options);
	if (assets.canceled) {
		return { status: "error", message: "Image library was closed." };
	}
	return {
		status: "ok",
		assets: assets.assets,
	};
}
