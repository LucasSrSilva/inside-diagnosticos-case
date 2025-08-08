const Skeleton = () => {
    const gradientAnimation = 'animate-pulse bg-gradient-to-r from-gray-300 to-gray-400 bg-[length:400%_100%]';

    return (
        <div className={`transition-all duration-200 h-13 rounded ${gradientAnimation}`}>
        </div>
    )
}

export default Skeleton
