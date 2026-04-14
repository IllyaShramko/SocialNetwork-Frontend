export type ModalContentProps = {
	visible: boolean;
	onClose: () => void;
	onSave: (base64: string) => void;
};
