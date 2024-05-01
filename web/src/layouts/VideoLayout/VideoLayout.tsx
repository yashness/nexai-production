import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link, routes } from '@redwoodjs/router';
import { useAuth } from 'src/auth'


type VideoLayoutProps = {
  children?: React.ReactNode
}

const VideoLayout = ({ children }: VideoLayoutProps) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link
              className="text-blue-400 transition duration-100 hover:text-blue-100"
              to={routes.home()}
            >
              RSS to Video
            </Link>
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {isAuthenticated ? (
              <Button color="inherit" onClick={logOut}>
                Logout
              </Button>
            ) : (
              <Link to={routes.login()} style={{ color: 'white', textDecoration: 'none' }}>
                <Button color="inherit">
                  Login
                </Button>
              </Link>
            )}
            {isAuthenticated && (
              <Typography variant="body2" color="inherit" sx={{ ml: 2 }}>
                {currentUser.email}
              </Typography>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      {children}
    </>
  )
}

export default VideoLayout;
