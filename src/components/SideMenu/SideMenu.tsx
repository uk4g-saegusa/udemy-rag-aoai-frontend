import {IoEarth} from 'react-icons/io5';
import NaviList from '../NaviList/NaviList';

const apiKey: string = process.env.AZURE_OPENAI_API_KEY === undefined ? "未定義" : process.env.AZURE_OPENAI_API_KEY
const endPoint: string = process.env.AZURE_OPENAI_API_ENDPOINT === undefined ? "未定義" : process.env.AZURE_OPENAI_API_ENDPOINT
const instanceName: string = process.env.AZURE_OPENAI_API_INSTANCE_NAME === undefined ? "未定義" : process.env.AZURE_OPENAI_API_INSTANCE_NAME
const deploymentKey: string = process.env.AZURE_OPENAI_API_DEPLOYMENT_ID === undefined ? "未定義" : process.env.AZURE_OPENAI_API_DEPLOYMENT_ID

const SideMenu = () => {
    return (
        <div className='w-56 pt-8 bg-gray-900 text-white'>
            <h1 className='flex justify-center px-4 text-2xl font-bold'>
                <IoEarth className='size-10'/>
            </h1>
            <h1 suppressHydrationWarning>{apiKey}</h1>
            <h1 suppressHydrationWarning>{endPoint}</h1>
            <h1 suppressHydrationWarning>{instanceName}</h1>
            <h1 suppressHydrationWarning>{deploymentKey}</h1>
            <NaviList/>
        </div>
    )
}

export default SideMenu;