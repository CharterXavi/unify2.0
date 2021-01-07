import './sidebar.css'

import React, {useState} from 'react'

import Hamburger from '../header/hamburger'
import { Link } from "gatsby"
import Logo from '../icons/logo'
import Menu from '../header/menu'

//uses webpack to store data about the image in an import

const Sidebar = () => {
  //initial states: menu is not expanded and the button hasn't been clicked
  const [isHamburgerClicked, setHamburgerClicked] = useState(false);
  const [isMenuExpanded, setMenuExpanded] = useState(false);
  const [menuLinks, setMenuLinks] = useState(
    [
      {
        name: 'Home',
        path: '/',
        isSubMenuExpanded: false,
        subMenu: [
          {
            name: '',
            path: ''
          }
        ]
      },
      {
        name: 'Guidelines',
        path: '/guidelines',
        isSubMenuExpanded: false,
        subMenu: [
          {
            name: 'Testimonials',
            path: '/about/testimonials'
          },
          {
            name: 'Partnerships',
            path: '/about/partnerships'
          }
        ]
      },
      {
        name: 'Purpose',
        path: '/purpose',
        isSubMenuExpanded: false,
        subMenu: [
          {
            name:'Private Duty Home Care',
            path:'/services/private-duty',
          },
          {
          name:'Skilled Home Health',
          path:'/services/home-health',
          },
          {
            name:'Palliative Care',
            path:'/services/palliative-care',
          },
          {
            name:'Complex Care Management',
            path:'/services/ccm',
          },
          {
            name:'Hospice',
            path:'/services/hospice',
          },
          {
            name:'Acute/Hospital-Based Care',
            path:'/services/acute-care',
          }
        ]
      },
      {
        name: 'Vision',
        path: '/vision',
        isSubMenuExpanded: false,
        subMenu: [
          {
            name: '',
            path: ''
          }
        ]
      },
      {
        name: 'Colors',
        path: '/colors',
        isSubMenuExpanded: false,
        subMenu: [
          {
            name: 'Recent',
            path: '/news/recent'
          },
          {
            name: 'Categories',
            path: '/news/categories'
          },
          {
            name: 'Tags',
            path: '/news/tags'
          }
        ]
      },
      {
        name: 'Typography',
        path: '/typography',
        isSubMenuExpanded: false,
        subMenu: [
          {
            name: 'Volunteering & Interning',
            path: '/careers/volunteering'
          }
        ]
      },
      {
        name: 'Spacing',
        path: '/spacing',
        isSubMenuExpanded: false,
        subMenu: [
          {
            name: '',
            path: ''
          }
        ]
      },
      {
        name: 'Buttons',
        path: '/buttons',
        isSubMenuExpanded: false,
        subMenu: [
          {
            name: '',
            path: ''
          }
        ]
      },
      {
        name: 'Iconography',
        path: '/iconography',
        isSubMenuExpanded: false,
        subMenu: [
          {
            name: '',
            path: ''
          }
        ]
      },
      {
        name: 'Logos',
        path: '/logos',
        isSubMenuExpanded: false,
        subMenu: [
          {
            name: '',
            path: ''
          }
        ]
      },
    ]
  )
  //onClick function that will update this components state
  const handleHamburgerClick = () => {
    setHamburgerClicked(!isHamburgerClicked);
    setMenuExpanded(!isMenuExpanded);
  }

  const expandSubMenu = (id) => {
    //create a new list from old list, but update whichever child was clicked on
    const newList = menuLinks.map((mainLink) => {
        if(mainLink.name === id) {
            const newLink = {
                //state is updated, component rerenders, and new props are passed down to children
                ...mainLink,
                isSubMenuExpanded: !mainLink.isSubMenuExpanded
            }
            //must return so .map can enter it into new array list
            return newLink;
        };
        //must return so .map can enter it into new array list
        return mainLink;
    });
    //use setState method to update state
    setMenuLinks(newList);
  }

  return (
    <header className='Sidebar'>
      <div className='header-boundary'>
        <div className='main-bar'>
          <Link to="/" aria-label='Visit the home page'>
            <Logo />
          </Link>
          {/* pass handleClick function to child so that when it's invoked it will change state in parent */}
          {/* that way we can pass info about whether or not the button's been clicked to expand the menu here accordingly */}
          <div className='header-right'>
            {isMenuExpanded ? 
              <small>CLOSE</small> /* margin included since 'close' is longer word than 'menu', causing neighboring elements to move around */
              :
              <small>MENU</small>
            }
            <Hamburger onClick={handleHamburgerClick} />
          </div>
        </div>
    </div>
        <Menu isExpanded={isMenuExpanded} menuLinks={menuLinks} expandSubMenu={expandSubMenu} />
    </header>
  )
}

export default Sidebar
