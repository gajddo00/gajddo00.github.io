import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Input from "../common/input";
import Text from "../common/text";
import Button from "../common/button";
import * as yup from "yup";
import { AuthMethod } from "../../api";
import { getString } from "../../utils/strings";
import { useRouter } from "next/router";

const schema = yup.object({
    email: yup.string().required().email(),
}).required();

type LoginEmailProps = {
    passwordOptionHandler: (type: AuthMethod) => void;
    showLinkToPassword: boolean
}

const LoginEmail = (props: LoginEmailProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const router = useRouter();

    const onSubmit = (data: any) => {
        console.log(data);
    }

    return <section className="pt-3 flex-50 h-screen flex flex-col items-center">
        <Text type='large' className='self-start pl-8'>{getString("login", router.locale)}</Text>
        <Text type='body' className="text-center mx-5 w-2/3 mt-16">{getString("login.withEmail.desc", router.locale)}</Text>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-10 flex flex-col items-center gap-4 h-screen-50">
            <Input
                className="w-80"
                name="email"
                labelValue={getString("login.email", router.locale)}
                type="text"
                error={errors.email?.message}
                register={register}
            />
            {props.showLinkToPassword &&
                <Text type='body' bold={true} className="mt-3">
                    {getString("login.withCredentials", router.locale)} <button type='button' className="purple" onClick={() => props.passwordOptionHandler(AuthMethod.Password)}>{getString("login.credentials", router.locale)}</button>
                </Text>
            }
            <Button
                label={getString("login", router.locale)}
                className="btn bg-dark block m-auto mt-4"
                submit={true}
            />
        </form>
    </section>
}

export default LoginEmail;