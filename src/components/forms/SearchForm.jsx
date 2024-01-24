import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { filterSongsList } from '../../redux/slices/SongsSlice';

const SearchForm = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');

    useEffect(() => {
        dispatch(filterSongsList(text));
    }, [text]);

    return (
        <input
            className="px-8 py-4 bg-white border-2 border-red-500 text-red-500 rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg outline-none"
            type="text"
            placeholder="search..."
            value={text}
            onChange={(e) => setText(e.target.value)}
        />
    );
};

export default SearchForm;
