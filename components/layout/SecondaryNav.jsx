import React from 'react'

function SecondaryNav() {
    return (
        <div className=" bg-darkestGrey py-16 md:py-20">
            <nav className=" container">
                <ul className="flex flex-col sm:flex-row text-xl font-righteous text-accent font-bold items-center cursor-pointer  ">
                    <li className=" bg-cheesyYellow px-2 py-2 rounded-xl text-grey hover:text-saucyRed mr-3 sm:mr-11 " >Popular</li>
                    <li className=" hover:text-saucyRed transition-all duration-300 mr-3 sm:mr-11 ">Upvoted</li>
                    <li className="hover:text-saucyRed transition-all duration-300 mr-3 sm:mr-11 ">Discussed</li>
                    <li className=" hover:text-saucyRed  transition-all duration-300 mr-3 sm:mr-11 ">Recent</li>
                </ul>
            </nav>
        </div>
    )
}

export default SecondaryNav
