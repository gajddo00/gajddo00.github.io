type CardProps = {
    serviceName: string
    bgColor?: 'purple' | 'gray'
}

const Card = ({ serviceName, bgColor = 'purple' }: CardProps) => {
    const backgroundColor = () => {
        switch (bgColor) {
            case 'purple': return 'bg-light-purple';
            case 'gray': return 'bg-gray';
        }
    }

    return <article className={`card ${backgroundColor()}`}>
        <div className="card-title">
            <p>{serviceName}</p>
        </div>
    </article>
}

export default Card;