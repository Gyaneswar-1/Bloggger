import React, { useState } from 'react';

const CopyUrlButton = () => {
    const [showPopover, setShowPopover] = useState(false);

    const handleCopy = () => {
        const currentUrl = window.location.href; // Get current URL
        navigator.clipboard.writeText(currentUrl) // Copy URL to clipboard
            .then(() => {
                setShowPopover(true); // Show popover after copying
                setTimeout(() => {
                    setShowPopover(false); // Hide popover after 2 seconds
                }, 2000);
            })
            .catch((error) => {
                console.error('Failed to copy: ', error);
            });
    };

    return (
        <div className="relative inline-block">
            <button
                onClick={handleCopy}
            >
                    <i class="cursor-pointer ri-share-fill text-white"></i>
            </button>
            {showPopover && (
                <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 text-xs rounded shadow-lg z-10">
                    copied
                </div>
            )}
        </div>
    );
};

export default CopyUrlButton;
