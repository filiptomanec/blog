declare module 'react-lines-ellipsis' {
    interface LinesEllipsisProps {
        text: string;
        maxLine: string;
        ellipsis?: string;
        trimRight?: boolean;
        basedOn?: 'letters' | 'words';
    }

    export default function LinesEllipsis(props: LinesEllipsisProps): JSX.Element;
}