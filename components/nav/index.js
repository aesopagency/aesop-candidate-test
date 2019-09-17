import React from 'react'

import './style.scss'

const links = [
  { href: 'https://aesopagency.com', label: 'AESOP' },
  { href: 'https://github.com/aesopagency/aesop-candidate-test', label: 'GitHub' },
].map((item) => {
  const link = item
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav className="sitewide-nav">
    <ul>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>
  </nav>
)

export default Nav
