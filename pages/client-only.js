import App from '../components/App'
import InfoBox from '../components/InfoBox'
import Header from '../components/Header'
import Submit from '../components/Submit'
import PostList, { allPostsQueryVars, ALL_POSTS_QUERY } from '../components/PostList'
import { useQuery } from "@apollo/client"

const ClientOnlyPage = (props) => {
  const { data, loading, error } = useQuery(
    ALL_POSTS_QUERY, {
    variables: allPostsQueryVars,
  })
  console.log(data, loading, error)

  return (
    <App>
      <Header />
      <InfoBox>
        ℹ️ This page shows how use Apollo only in the client. If you{' '}
        <a href="/client-only">reload</a> this page, you will see a loader since
      Apollo didn't fetch any data on the server. This is useful when the page
      doesn't have SEO requirements or blocking data fetching requirements.
    </InfoBox>
      <Submit />
      <PostList />
    </App>
  )
}

export default ClientOnlyPage
