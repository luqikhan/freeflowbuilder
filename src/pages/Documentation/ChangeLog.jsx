import React from 'react'
import { NavLink } from 'react-router-dom'

const ChangeLog = () => {
  return (
    <div>
      <article>
          <header>
            <p className="text-base ">
              Appendix
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            ChangeLog
            </h1>
          </header>
          <hr className='my-4' />
          <div className='m-6'>

          <h2 class="font-semibold text-lg mb-3">Version 1.0.0 - Initial Release (~December 6, 2024)</h2>
          <p>The initial version includes all the core features and functionalities designed to provide interactive user flow creator experience.</p>
          
         </div>
        </article>
        <dl className="flex pt-6 mt-6 border-t border-slate-200">
          <div className="mr-auto text-left">
              <dt className="text-sm font-normal tracking-tight text-slate-600">
                Previous
              </dt>
              <dd className="mt-1">
                <NavLink to={'/workspace/documentation/support'} className="text-base font-semibold text-slate-900 hover:underline">
                  Support 
                </NavLink>
              </dd>
          </div>
        </dl>
    </div>
  )
}

export default ChangeLog