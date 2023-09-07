import React, { useEffect, useState } from 'react';
import { FilledHeart, UnFilledHeart } from "./Iconssvg";
import {supabase} from '../helpers.js'

const LikeButton = ({ cabin, user }) => {

    const [isLiked, setIsLiked] = useState(false)

    useEffect(async() => {
        if (user) {           
            let { data: likes, error } = await supabase.from('likes').select("*").eq('cabin_id', cabin.id)
            if (likes && likes.length >= 1){
                setIsLiked(true)
            }
        } else {
            setIsLiked(false)
        }


    }, [user])

    async function like() {
        const { data: { user } } = await supabase.auth.getUser()
        console.log(user)
        if (user) {
            if(isLiked){
                const { error } = await supabase
                .from('likes')
                .delete()
                .eq("cabin_id", cabin.id)
                .eq("user_id", user.id)
                .select()

                console.log ("ERROR ",error);
                setIsLiked(false)
            }else{
                const { data, error } = await supabase
                .from('likes')
                .insert(
                { cabin_id: cabin.id }
                )
                .select()
                setIsLiked(true)
            }
        }

    }

    return (
        <div>
            <button type='button' aria-label='like' onClick={like} className='z-10'>
                {isLiked ? <FilledHeart /> : <UnFilledHeart/>}
            </button>
        </div>

    );
};

export default LikeButton;