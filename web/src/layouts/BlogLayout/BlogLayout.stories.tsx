import BlogLayout from './BlogLayout'

export const loggedIn = () => {
  mockCurrentUser({ id: 1, email: 'rob@redwoodjs.com' })

  return <BlogLayout />
}

export const loggedOut = () => {
  return <BlogLayout />
}

export default { title: 'Layouts/BlogLayout' }
