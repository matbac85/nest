import { ArrowExpand } from "./Iconssvg"

const UserSections = () => 
(
    <div className="w-9/12 flex flex-col gap-8">
        <div className="user-box flex justify-between">
            <h2 className="font-bold text-lg">Mes favoris</h2>
            <ArrowExpand />
        </div>
        <div className="user-box flex justify-between">
            <h2 className="font-bold text-lg">Mes réservations futures</h2>
            <ArrowExpand />
        </div>
        <div className="user-box flex justify-between">
            <h2 className="font-bold text-lg">Mes réservations passées</h2>
            <ArrowExpand />
        </div>
        <div className="user-box flex justify-between">
            <h2 className="font-bold text-lg">Mes commentaires</h2>
            <ArrowExpand />
        </div>
    </div>
)

export default UserSections