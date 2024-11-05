import React from 'react'

const Header = () => {
  return (
    <div className="bg-gray-800 text-white">
      {/* Top bar */}
      <div className="bg-black py-5 text-center text-s">
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{' '}
          <a href="#" className="text-white font-semibold underline-offset-5">
            ShopNow
          </a>
        </p>
      </div>
    </div>
  )
}

export default Header;