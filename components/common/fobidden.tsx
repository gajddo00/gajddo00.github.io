import Text from "../common/text";

const Forbidden = () => {
    return <div className="flex items-center justify-center h-screen">
        <section className="text-center">
            <Text className="purple" type='medium'>Forbidden access</Text>
            <Text type='body'>You do not have permission to access this page.</Text>
        </section>
    </div>
}

export default Forbidden;