import Text from "../common/text";
import QRCode from "react-qr-code";
import { getString } from "../../utils/strings";
import { useRouter } from "next/router";
import ActiveLoader from "../common/active-loader";
import { encode } from 'js-base64';

type LoginQRProps = {
    requestKey: string
}

const LoginQR = ({ requestKey }: LoginQRProps) => {
    const router = useRouter();

    const getQrValue = () => {
        const subId = localStorage.getItem('subId');
        const qrCode = `${requestKey}_${subId}`;
        return encode(qrCode);
    }

    return <section className="bg-dark h-screen flex-50 flex flex-col justify-center items-center">
        <Text type='medium' className="light text-center mb-10 mt-10" bold={true}>
            {getString("login.withMobile", router.locale)}
        </Text>
        <div className='bg-light'>
            {(requestKey != "" &&
                <QRCode value={getQrValue()} width={300} height={300} className='m-4' />) ||
                <ActiveLoader />
            }
        </div>
        <Text
            type='body'
            className="text-center mt-16 light sm:px-40 px-20 mb-20">
            {getString("login.withMobile.desc", router.locale)}
        </Text>
    </section >
}

export default LoginQR;