export default function PostForm() {
    return (

        <div className=' bg-dark px-6 py-4 text-gray-400'>
            <div className='border border-darkBorder p-2 rounded-md flex bg-dark-brighter'>
                <div className='rounded-full bg-gray-500 overflow-hidden w-10 h-10'>
                    <img src="./logo.png" alt="" />
                </div>
                <form action="" className='flex-grow bg-dark-brightest ml-4 mr-2 border border-reddit_border rounded-md'>
                    <input type="text" className='bg-dark-brightest block w-full p-2 px-3 text-sm rounded-md' placeholder='New post'
                    />
                </form>
            </div>
        </div>

    )

}