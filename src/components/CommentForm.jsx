import React, { useState } from 'react';


const CommentForm = ({ close }) => {

    const [activeIndex, setActiveIndex] = useState([0]);
    const [userComment, setUserComment] = useState("");
    const [userRating, setUserRating] = useState(1)
    const [isValidForm, setIsValidForm] = useState(true)

    const handleClick = (index) => {
        setUserRating(index + 1)
        const indexes = []
        for (let i = index; i >= 0; i--) {
            indexes.push(i)
        }
        setActiveIndex(indexes);

    };

    function handleUserCommentChange(event) {
        setUserComment(event.target.value);
    }

    function cancel() {
        close(false)
    }
    function validate() {

        if (userComment !== "") {
            setIsValidForm(true)
            const validatedForm = {
                commenter_id: 1,
                comment: userComment,
                time_stamp: "01-01-2023",
                rating: userRating
            }
            console.log(validatedForm)
            close(false)
        } else {
            setIsValidForm(false)
        }

    }

    return (
        <div className=' w-full p-8 '>
            <div className='flex justify-between'>
                <h1 className='text-xl font-bold'>Laissez votre avis</h1>
                <div className='flex gap-3 text-bold'>
                    <button type='button' className={activeIndex.includes(0) ? ' activeRatingButton' : 'ratingButton'} onClick={() => handleClick(0)}><svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20" fill={activeIndex.includes(0) ? "#fff" : "#467971"}><path d="M213 881q-43.594-45-68.297-104Q120 718 120 656q0-73 25.5-133.5T222 411q35-35 87-59t122.5-37.5Q502 301 591 297.5t198 3.5q8 108 5.5 197.5t-16 160.75q-13.5 71.25-38 124.563T680 873q-51 51-110 77t-126 26q-69 0-126.5-23.5T213 881Zm103 0q25 17 58 26t69.923 9Q497 916 547 894t91-64q27-27 46-70.5t31-103Q727 597 731 522t0-165q-94-2-168.5 2.5T431 376q-57 12-98 30.5T266 452q-42 43-64 91t-22 98q0 48 20.5 100.5T251 826q53-98 127-176t157-123q-87 75-141 162.5T316 881Zm0 0Zm0 0Z" /></svg></button>
                    <button type='button' className={activeIndex.includes(1) ? ' activeRatingButton' : 'ratingButton'} onClick={() => handleClick(1)}><svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20" fill={activeIndex.includes(1) ? "#fff" : "#467971"}><path d="M213 881q-43.594-45-68.297-104Q120 718 120 656q0-73 25.5-133.5T222 411q35-35 87-59t122.5-37.5Q502 301 591 297.5t198 3.5q8 108 5.5 197.5t-16 160.75q-13.5 71.25-38 124.563T680 873q-51 51-110 77t-126 26q-69 0-126.5-23.5T213 881Zm103 0q25 17 58 26t69.923 9Q497 916 547 894t91-64q27-27 46-70.5t31-103Q727 597 731 522t0-165q-94-2-168.5 2.5T431 376q-57 12-98 30.5T266 452q-42 43-64 91t-22 98q0 48 20.5 100.5T251 826q53-98 127-176t157-123q-87 75-141 162.5T316 881Zm0 0Zm0 0Z" /></svg></button>
                    <button type='button' className={activeIndex.includes(2) ? ' activeRatingButton' : 'ratingButton'} onClick={() => handleClick(2)}><svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20" fill={activeIndex.includes(2) ? "#fff" : "#467971"}><path d="M213 881q-43.594-45-68.297-104Q120 718 120 656q0-73 25.5-133.5T222 411q35-35 87-59t122.5-37.5Q502 301 591 297.5t198 3.5q8 108 5.5 197.5t-16 160.75q-13.5 71.25-38 124.563T680 873q-51 51-110 77t-126 26q-69 0-126.5-23.5T213 881Zm103 0q25 17 58 26t69.923 9Q497 916 547 894t91-64q27-27 46-70.5t31-103Q727 597 731 522t0-165q-94-2-168.5 2.5T431 376q-57 12-98 30.5T266 452q-42 43-64 91t-22 98q0 48 20.5 100.5T251 826q53-98 127-176t157-123q-87 75-141 162.5T316 881Zm0 0Zm0 0Z" /></svg></button>
                    <button type='button' className={activeIndex.includes(3) ? ' activeRatingButton' : 'ratingButton'} onClick={() => handleClick(3)}><svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20" fill={activeIndex.includes(3) ? "#fff" : "#467971"}><path d="M213 881q-43.594-45-68.297-104Q120 718 120 656q0-73 25.5-133.5T222 411q35-35 87-59t122.5-37.5Q502 301 591 297.5t198 3.5q8 108 5.5 197.5t-16 160.75q-13.5 71.25-38 124.563T680 873q-51 51-110 77t-126 26q-69 0-126.5-23.5T213 881Zm103 0q25 17 58 26t69.923 9Q497 916 547 894t91-64q27-27 46-70.5t31-103Q727 597 731 522t0-165q-94-2-168.5 2.5T431 376q-57 12-98 30.5T266 452q-42 43-64 91t-22 98q0 48 20.5 100.5T251 826q53-98 127-176t157-123q-87 75-141 162.5T316 881Zm0 0Zm0 0Z" /></svg></button>
                    <button type='button' className={activeIndex.includes(4) ? ' activeRatingButton' : 'ratingButton'} onClick={() => handleClick(4)}><svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20" fill={activeIndex.includes(4) ? "#fff" : "#467971"}><path d="M213 881q-43.594-45-68.297-104Q120 718 120 656q0-73 25.5-133.5T222 411q35-35 87-59t122.5-37.5Q502 301 591 297.5t198 3.5q8 108 5.5 197.5t-16 160.75q-13.5 71.25-38 124.563T680 873q-51 51-110 77t-126 26q-69 0-126.5-23.5T213 881Zm103 0q25 17 58 26t69.923 9Q497 916 547 894t91-64q27-27 46-70.5t31-103Q727 597 731 522t0-165q-94-2-168.5 2.5T431 376q-57 12-98 30.5T266 452q-42 43-64 91t-22 98q0 48 20.5 100.5T251 826q53-98 127-176t157-123q-87 75-141 162.5T316 881Zm0 0Zm0 0Z" /></svg></button>
                </div>

            </div>
            <div className="w-full mt-4">
                <label htmlFor="area" className="px-2 mb-1">commentaire<sup className="text-red-500 font-medium ml-0.5">*</sup></label>
                <textarea id="area" name="area" type="text" rows={5} className="w-full input focus:ring-transparent focus:outline-none resize-none" value={userComment}
                    onChange={handleUserCommentChange} />

            </div>
            {isValidForm === false && <p className='text-red-500 text-sm'>veuillez complèter le champ commentaire.</p>}
            <div className='flex gap-3 mt-4'>
                <button type='button' className='bg-midGreen mt-1 w-fit h-fit py-2 px-3 rounded-lg text-white border border-midGreen  hover:bg-darkGreen duration-75' onClick={validate}>Valider</button>
                <button type='button' className='bg-midGreen mt-1 w-fit h-fit py-2 px-3 rounded-lg text-white border border-midGreen  hover:bg-darkGreen duration-75' onClick={cancel}>Annuler</button>
            </div>
        </div>
    )
};

export default CommentForm;