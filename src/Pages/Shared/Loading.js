import React from 'react';

const Loading = () => {
    return (
        <div className="h-screen flex items-center justify-center ">
        <div className="w-40 h-40 border-t-4 border-b-4 border-gray-900 rounded-full animate-spin"></div>
    </div>
    );
};

export default Loading;