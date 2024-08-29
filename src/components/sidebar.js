import React from 'react';

function Sidebar() {
    return (
        <div className="bg-black w-1/3 h-screen fixed top-0 left-0 hidden md:block"> {/* Fixed sidebar */}
            <div className="p-4 text-white">
                <h1 className="text-5xl font-bold font-mono">Welcome</h1>
            </div>
        </div>    
    );
}

export default Sidebar;
