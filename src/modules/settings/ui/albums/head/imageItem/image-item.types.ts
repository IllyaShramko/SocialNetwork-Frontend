export type ImageItemProps = {
    uri: string;
    id?: number;
    isLoading?: boolean;
    onDelete?: (id: number) => void; 
    onChangeVisibility?: (id: number) => void;
};