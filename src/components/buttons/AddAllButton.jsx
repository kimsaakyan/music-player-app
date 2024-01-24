import React from 'react';
import { toast } from 'react-toastify';

const AddAllButton = () => {
    const handleClick = () => {
        toast('All songs have been added to queue.', {
            position: 'bottom-right',
        });
    };

    return (
        <button
            className="px-8 py-4 bg-gradient-to-r from-rose-500 via-red-400 to-red-500 text-white font-semibold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
            onClick={handleClick}
        >
            <div className="flex gap-2">
                <div>Add All</div>
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                    </svg>
                </div>
            </div>
        </button>
    );
};

export default AddAllButton;
