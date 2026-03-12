import { Image, type ImageProps } from "expo-image"
export function LogoImage(props: ImageProps){
    return (
        <Image source = {require("../../../../assests/logo.png")} {...props}></Image>
    )
}