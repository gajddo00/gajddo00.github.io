import { FC } from "react"
import BackArrow from "../../assets/arrow_back.svg";
import Image from "next/image";

type PagingButtonProps = {
    onClick: () => void,
    disabled: boolean
} & React.HTMLProps<HTMLButtonElement>

const PagingButton: FC<PagingButtonProps> = (props: PagingButtonProps) => {
    return <div className={props.className}>
        <button type="button" className={`flex p-3 rounded-full ${props.disabled || 'bg-neutral-200'}`} onClick={props.onClick} disabled={props.disabled}>
            <Image className="rotate-180" src={BackArrow} height={15} width={15} alt="paging-button" />
        </button>
    </div>
}

export default PagingButton;