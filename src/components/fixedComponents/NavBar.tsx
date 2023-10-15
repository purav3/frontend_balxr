
export default function NavBar(){
    return(
    <>
    <nav className="container">

    <nav className="bg-white border-gray-200 dark:bg-gray-900">
    <div className="flex flex-wrap justify-between items-center mx-auto">
        <a href="" className="flex items-center">
            <img src="Balxr_Logo.png" className="h-20" alt="Balxr Logo" />
        </a>
        <div className="flex items-center">
            <a href="tel:5541251234" className="text-sm mr-3  text-gray-500 dark:text-white hover:underline">(+91)-9671810274</a>
        </div>
    </div>
</nav>
<nav className="bg-gray-50 dark:bg-gray-700">
    <div className="py-3 mx-auto">
        <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-7 text-sm">
                <li>
                    <a href="#" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Services</a>
                </li>
                <li>
                    <a href="#" className="text-gray-900 dark:text-white hover:underline">FAQ</a>
                </li>
                <li>
                    <a href="#" className="text-gray-900 dark:text-white hover:underline">Corporate Website</a>
                </li>
                <li>
                    <a href="#" className="text-gray-900 dark:text-white hover:underline">Balxr ePay Lite</a>
                </li>
                <li>
                    <a href="#" className="text-gray-900 dark:text-white hover:underline" >Donations</a>
                </li>
                <li>
                    <a href="#" className="text-gray-900 dark:text-white hover:underline">Balxr Collect</a>
                </li>
                <li>
                    <a href="#" className="text-gray-900 dark:text-white hover:underline">Electoral Bond</a>
                </li>
                <li>
                    <a href="#" className="text-gray-900 dark:text-white hover:underline">Videos</a>
                </li>
                <li>
                    <a href="#" className="text-gray-900 dark:text-white hover:underline" >mCash</a>
                </li>
                <li>
                    <a href="#" className="text-gray-900 dark:text-white hover:underline">Apply for Balxr/Current Account</a>
                </li>
                <li>
                    <a href="#" className="text-gray-900 dark:text-white hover:underline">NPS</a>
                </li>
                <li>
                    <a href="#" className="text-gray-900 dark:text-white hover:underline">Balxr UniPay</a>
                </li>
                <li>
                    <a href="#" className="text-gray-900 dark:text-white hover:underline" >Balxr Loans</a>
                </li>                                                                
            </ul>
        </div>
    </div>
</nav>


</nav>        
    </>
    )
}