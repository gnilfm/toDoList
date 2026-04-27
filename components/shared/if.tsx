export interface IfProps {
    teste: any;
    children: any;
}

export default function If(props: IfProps) {
    if (props.teste) {
        return props.children
    } else {
        return null
    }
}