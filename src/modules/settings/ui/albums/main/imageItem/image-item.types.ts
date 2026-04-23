export type ImageItemProps = {
    uri: string;
    id?: number;
    isLoading?: boolean;
    isVisible: boolean;
    onDelete?: (id: number | string) => void; 
    onChangeVisibility?: (id: number) => void;
};