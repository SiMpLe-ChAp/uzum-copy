import React from 'react'

const DATA = [
  'Elektronika',
  'Maishiy Texnika',
  'Kiyim',
  'Poyabzallar',
  'Aksesuarlar',
  'Gozallik',
  'Salomatlik',
  'Uy-ro`zgo`r buyumlari',
  'Qurilish va tamirlash',
  'Avtotovarlar',
  'Yana'
]

function NavbarBottom() {
  return (
    <div className='container'>
      <ul className="nav__bottom-collection">
        {
          DATA?.map((item,inx)=> <li key={inx} className="nav__bottom-item">{item}</li>)
        }

      </ul>
    </div>
  )
}

export default NavbarBottom