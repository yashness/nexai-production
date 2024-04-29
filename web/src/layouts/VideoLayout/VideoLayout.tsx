import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

type VideoLayoutProps = {
  children?: React.ReactNode
}

const VideoLayout = ({ children }: VideoLayoutProps) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  return (
    <>
      <header className="relative flex items-center justify-between bg-blue-700 px-8 py-4 text-white">
        <h1 className="text-5xl font-semibold tracking-tight">
          <Link
            className="text-blue-400 transition duration-100 hover:text-blue-100"
            to={routes.home()}
          >
            RSS to Video
          </Link>
        </h1>
        <nav>
          <ul className="relative flex items-center font-light">
            <li>
              <Link
                className="rounded px-4 py-2 transition duration-100 hover:bg-blue-600"
                to={routes.video()}
              >
                Video
              </Link>
            </li>

            <li>
              {isAuthenticated ? (
                <div>
                  <button type="button" onClick={logOut} className="px-4 py-2">
                    Logout
                  </button>
                </div>
              ) : (
                <Link to={routes.login()} className="px-4 py-2">
                  Login
                </Link>
              )}
            </li>
          </ul>
          {isAuthenticated && (
            <div className="absolute bottom-1 right-0 mr-12 text-xs text-blue-300">
              {currentUser.email}
            </div>
          )}
        </nav>
      </header>
      <main>
        {children}
      </main>
    </>
  )
}

export default VideoLayout
