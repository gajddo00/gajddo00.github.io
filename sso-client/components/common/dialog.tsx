import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";
import Text from "../common/text"
import { getString } from "../../utils/strings";
import Button from "./button";

type DialogProps = {
    title?: string
    message: string
    action: () => void
    setVisible: Dispatch<SetStateAction<boolean>>
    actionTitle?: string
}

const Dialog = (props: DialogProps) => {
    const router = useRouter();

    return <div className="dialog-wrapper">
        <div className="dialog">
            <Text type='medium'>{props.title}</Text>
            <Text type='body' className="mt-2">{props.message}</Text>
            <div className="flex justify-between mt-10">
                <button
                    title="cancel"
                    onClick={() => props.setVisible(false)}>
                    {getString("general.cancel", router.locale)}
                </button>
                <Button
                    type='dark'
                    label={props.actionTitle ?? getString("general.confirm", router.locale)}
                    onClick={props.action}
                />
            </div>
        </div>
    </div>
}

export default Dialog;