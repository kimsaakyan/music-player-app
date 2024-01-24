import React from 'react';
import { toast } from 'react-toastify';

const PlayAllButton = () => {
    return (
        <button
		onClick={() => toast('You turn all songs!')}
		className="px-8 py-4 bg-gradient-to-r from-rose-500 via-red-400 to-red-500 text-white font-semibold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
            <div className="flex gap-2">
                <div>Play All</div>
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
                            d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
                        />
                    </svg>
                </div>
            </div>
        </button>
    );
};

export default PlayAllButton;
