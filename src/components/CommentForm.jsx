import React, { useState } from 'react';


const CommentForm = ({ close }) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [userComment, setUserComment] = useState("");
    const [userRating, setUserRating] = useState(1)

    const handleClick = (index) => {
        setActiveIndex(index);
        setUserRating(index + 1)
    };

    function handleUserCommentChange(event) {
        setUserComment(event.target.value);
    }

    function cancel() {
        close(false)
    }
    function validate() {
        const validatedForm = {
            commenter_id: 1,
            comment: userComment,
            time_stamp: "01-01-2023",
            rating: userRating
        }

        console.log(validatedForm)
    }

    return (
        <div className='card w-full p-8 '>
            <div className='flex justify-between'>
                <h1 className='text-xl font-bold'>Laissez votre avis</h1>
                <div className='flex gap-3 text-bold'>
                    <button type='button' className={activeIndex === 0 ? ' activeFilter' : 'filters'} onClick={() => handleClick(0)}>1</button>
                    <button type='button' className={activeIndex === 1 ? ' activeFilter' : 'filters'} onClick={() => handleClick(1)}>2</button>
                    <button type='button' className={activeIndex === 2 ? ' activeFilter' : 'filters'} onClick={() => handleClick(2)}>3</button>
                    <button type='button' className={activeIndex === 3 ? ' activeFilter' : 'filters'} onClick={() => handleClick(3)}>4</button>
                    <button type='button' className={activeIndex === 4 ? ' activeFilter' : 'filters'} onClick={() => handleClick(4)}>5</button>
                </div>

            </div>
            <div className="w-full mt-4">
                <label htmlFor="area" className="px-2 mb-1">commentaire<sup className="text-red-500 font-medium ml-0.5">*</sup></label>
                <textarea id="area" name="area" type="text" rows={10} className="w-full input focus:ring-transparent focus:outline-none resize-none" value={userComment}
                    onChange={handleUserCommentChange} />

            </div>
            <div className='flex gap-3 mt-4'>
                <button type='button' className='button' onClick={validate}>Valider</button>
                <button type='button' className='button' onClick={cancel}>Annuler</button>
            </div>
        </div>
    )
};

export default CommentForm;