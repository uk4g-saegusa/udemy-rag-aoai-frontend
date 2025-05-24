import {IoEarth} from 'react-icons/io5';
import NaviList from '../NaviList/NaviList';

const dummyText: string = process.env.DUMMY_TEXT === undefined ? "未定義" : process.env.DUMMY_TEXT

const SideMenu = () => {
    return (
        <div className='w-56 pt-8 bg-gray-900 text-white'>
            <h1 className='flex justify-center px-4 text-2xl font-bold'>
                <IoEarth className='size-10'/>
            </h1>
            <h1 suppressHydrationWarning>{dummyText}</h1>
            <NaviList/>
        </div>
    )
}

export default SideMenu;