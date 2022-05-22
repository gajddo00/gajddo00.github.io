import { ReactNode } from "react"

export type TextProps = {
    type: 'large' | 'medium' | 'body'
    bold?: boolean,
} & React.HTMLProps<HTMLParagraphElement>

const Text: React.FC<TextProps> = ({
    children, type = 'body', bold = false,
    ...props
}) => {
    switch (type) {
        case 'large': return <h1
            {...props}
            className={['text', `text--${type}`, props.className, (bold && 'text--bold') || ''].join(' ')}>
            {children}
        </h1>
        case 'medium': return <h2
            {...props}
            className={['text', `text--${type}`, props.className, (bold && 'text--bold') || ''].join(' ')}>
            {children}
        </h2>
        case 'body': return <p
            {...props}
            className={['text', `text--${type}`, props.className, (bold && 'text--bold') || ''].join(' ')}>
            {children}
        </p>
    }
}

export default Text;