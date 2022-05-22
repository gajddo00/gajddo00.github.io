import { FC } from "react"
import Text from "./text";
import BackArrow from "../../assets/arrow_back.svg";
import Image from "next/image";
import { useRouter } from "next/router";

type BackButtonProps = {
    title: string
}

const BackButton: FC<BackButtonProps> = ({ title }: BackButtonProps) => {
    const router = useRouter()

    return <div className="flex flex-row self-start items-center gap-4">
        <button type="button" className="flex p-3 rounded-full sm:hover:bg-neutral-200 sm:bg-transparent bg-neutral-200" onClick={() => router.back()}>
            <Image src={BackArrow} height={15} width={15} alt="back-button" />
        </button>

        <Text type='large'>{title}</Text>

    </div>
}

export default BackButton;