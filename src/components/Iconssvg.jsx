const Search = () => 
    (<svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 96 960 960" width="36" fill="#467971" className="cursor-pointer"><path d="M774 913 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l243 241q9 8.442 9 20.721t-9.913 22.192Q809 922 795.778 922q-13.222 0-21.778-9ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z" className="text-midGreen"/></svg>)


const User = () =>
    (
        <svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 96 960 960" width="36" fill="#467971" className="cursor-pointer"><path d="M222 801q63-44 125-67.5T480 710q71 0 133.5 23.5T739 801q44-54 62.5-109T820 576q0-145-97.5-242.5T480 236q-145 0-242.5 97.5T140 576q0 61 19 116t63 109Zm257.814-195Q422 606 382.5 566.314q-39.5-39.686-39.5-97.5t39.686-97.314q39.686-39.5 97.5-39.5t97.314 39.686q39.5 39.686 39.5 97.5T577.314 566.5q-39.686 39.5-97.5 39.5Zm.654 370Q398 976 325 944.5q-73-31.5-127.5-86t-86-127.266Q80 658.468 80 575.734T111.5 420.5q31.5-72.5 86-127t127.266-86q72.766-31.5 155.5-31.5T635.5 207.5q72.5 31.5 127 86t86 127.032q31.5 72.532 31.5 155T848.5 731q-31.5 73-86 127.5t-127.032 86q-72.532 31.5-155 31.5ZM480 916q55 0 107.5-16T691 844q-51-36-104-55t-107-19q-54 0-107 19t-104 55q51 40 103.5 56T480 916Zm0-370q34 0 55.5-21.5T557 469q0-34-21.5-55.5T480 392q-34 0-55.5 21.5T403 469q0 34 21.5 55.5T480 546Zm0-77Zm0 374Z"/></svg>
    )
const IconInstagram = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#467971" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
);

const IconFacebook = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#467971" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
)

const ArrowExpand = ({toggleCallback, isExpanded, setIsExpanded}) => {
    const toggle = () => {
        setIsExpanded(!isExpanded)
        toggleCallback()
    }   
    
    return(
    <svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 96 960 960" width="36" fill="#467971" className={isExpanded ? "origin-center rotate-180" : "cursor-pointer"} onClick={toggle}><path d="M480 699q-6 0-11-2t-10-7L261 492q-8-8-7.5-21.5T262 449q10-10 21.5-8.5T304 450l176 176 176-176q8-8 21.5-9t21.5 9q10 8 8.5 21t-9.5 22L501 690q-5 5-10 7t-11 2Z"/></svg>
    )
}

const Add = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="M479.825 856Q467 856 458.5 847.375T450 826V606H230q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T230 546h220V326q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T510 326v220h220q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T730 606H510v220q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625Z"/></svg>
)

const FilledHeart = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24" fill="#87C1B9"><path d="m439 900-53-49Q262 736 171 631.5T80 413q0-90 60.5-150.5T290 202q51 0 101 24.5t89 80.5q44-56 91-80.5t99-24.5q89 0 149.5 60.5T880 413q0 114-91 218.5T574 851l-53 49q-17 16-41 16t-41-16Z"/></svg>
)

const QuoteComment = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="36" fill="#467971"><path d="M690.077 765.999q-21.538 0-32.922-18.192-11.384-18.191-1.615-37.498l49.077-104.31H589.999q-24.538 0-42.268-17.73t-17.73-42.268V405.999q0-24.538 17.73-42.268t42.268-17.73h140.002q24.538 0 42.268 17.73t17.73 42.268v183.308q0 7.846-1.5 16t-5.346 15.384l-58.538 123.77q-5.077 10.154-14.231 15.846-9.153 5.692-20.307 5.692Zm-360 0q-21.538 0-32.922-18.192-11.384-18.191-1.615-37.498l49.077-104.31H229.999q-24.538 0-42.268-17.73t-17.73-42.268V405.999q0-24.538 17.73-42.268t42.268-17.73h140.002q24.538 0 42.268 17.73t17.73 42.268v183.308q0 7.846-1.5 16t-5.346 15.384l-58.538 123.77q-5.077 10.154-14.231 15.846-9.153 5.692-20.307 5.692Z"/></svg>
)

export { IconInstagram, IconFacebook, Search, User, ArrowExpand, Add, FilledHeart, QuoteComment };
