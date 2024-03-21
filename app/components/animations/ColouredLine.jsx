const ColouredLine = ({ position = 'bottom-0' }) => {
    return (
        <div className={`absolute ${position} left-0 w-full`}>
            <div className="animate-slide ">
                {/* First set of lines */}
                <span className="h-[1px] w-1/6 bg-gradient-to-r from-transparent via-theme-blue to-transparent"></span>
                <span className="h-[1px] w-1/6 bg-gradient-to-r from-transparent via-theme-red to-transparent"></span>
                <span className="h-[1px] w-1/6 bg-gradient-to-r from-transparent via-theme-green to-transparent"></span>
                <span className="h-[1px] w-1/6 bg-gradient-to-r from-transparent via-theme-turquoise to-transparent"></span>
                <span className="h-[1px] w-1/6 bg-gradient-to-r from-transparent via-theme-orange to-transparent"></span>
                {/* Duplicate set of lines for seamless looping */}
                <span className="h-[1px] w-1/6 bg-gradient-to-r from-transparent via-theme-blue to-transparent"></span>
                <span className="h-[1px] w-1/6 bg-gradient-to-r from-transparent via-theme-red to-transparent"></span>
                <span className="h-[1px] w-1/6 bg-gradient-to-r from-transparent via-theme-green to-transparent"></span>
                <span className="h-[1px] w-1/6 bg-gradient-to-r from-transparent via-theme-turquoise to-transparent"></span>
                <span className="h-[1px] w-1/6 bg-gradient-to-r from-transparent via-theme-orange to-transparent"></span>
            </div>
        </div>
    );
};

export default ColouredLine;
