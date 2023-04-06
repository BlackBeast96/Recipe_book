import { Fragment, useEffect, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom'
import Saved_recipe from '../Saved_Recipe/Saved_recipe'
import { useDispatch, useSelector } from 'react-redux'
import { filter, side_bar,fetch_recipe } from '../features/Recipe_Slice'
import { Autocomplete, TextField } from '@mui/material'
import { useLocation,useNavigate } from 'react-router-dom'

const navigation = [
  { name: 'Dashboard', href: '/recipe_catalog', current: true },
  { name: 'Saved Recipe', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



export default function NavBar() {
  const localdata = JSON.parse(localStorage.getItem("log_details"))


  const dispatch = useDispatch();
  const data = useSelector((state) => state.recipe.user)

  const navigate=useNavigate()

  function handlechange(e) {
    dispatch(filter(e.target.innerText))
  }

  const location=useLocation();

  useEffect(()=>{
    if(data.length==0 && location.pathname=="/recipe_catalog"){
      dispatch(fetch_recipe())
    }
  })
  
  function data_dispatch(){
    dispatch(fetch_recipe())
  }

  function Saved_recipe() {
    dispatch(side_bar(true));
  }
  


  const options = []
  data.map((elem) => options.push(elem.title))
  

  return (
    <Disclosure as="nav" className={`bg-gray-800 z-10 pt-2 w-full fixed`}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start md:gap-x-6 gap-x-3
              ">

                {location.pathname=="/recipe_catalog"? <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={options}
                  onChange={handlechange}
                  sx={{ width: 200}}
                  renderInput={(params) => <TextField {...params} placeholder='search Recipe Here' sx={{backgroundColor:"white",borderRadius:"20px"}} />}
                />:""}
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <NavLink to={navigation[0].href}
                      key={navigation[0].name}
                      onClick={data_dispatch}
                      className={classNames(
                        navigation[0].current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium'
                      )}
                      aria-current={navigation[0].current ? 'page' : undefined}
                    >
                      {navigation[0].name}
                    </NavLink>
                    <a onClick={Saved_recipe}
                      key={navigation[1].name}
                      className={classNames(
                        navigation[1].current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium hover:cursor-pointer'

                      )}
                      aria-current={navigation[1].current ? 'page' : undefined}
                    >
                      {navigation[1].name}
                    </a>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={localdata.img}
                        alt="avatar"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <NavLink
                            to="/profile"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </NavLink>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <NavLink to="/sign_in"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </NavLink>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 grid px-2 pb-3 pt-2">
              <NavLink to={navigation[0].href}
                key={navigation[0].name}
                className={classNames(
                  navigation[0].current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'rounded-md px-3 py-2 text-sm font-medium'
                )}
                aria-current={navigation[0].current ? 'page' : undefined}
              >
                {navigation[0].name}
              </NavLink>
              <a onClick={Saved_recipe}
                key={navigation[1].name}
                className={classNames(
                  navigation[1].current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'rounded-md px-3 py-2 text-sm font-medium hover:cursor-pointer'

                )}
                aria-current={navigation[1].current ? 'page' : undefined}
              >
                {navigation[1].name}
              </a>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
