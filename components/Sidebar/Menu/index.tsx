import notificationImg from '../../assets/image/sidebar/notification.png';
import menubarImg from '../../assets/image/sidebar/menu.png';
import Image from 'next/image';

export default function menubar(){
    return(
        <div className="flex flex-row items-center">
            <Image src={notificationImg} alt={"notiifer"} width={18}/>
            <Image src={menubarImg} alt={""} width={18} className="ml-3"/>
        </div>
    )
}