import Feed from '@components/Feed'

export default function Home() {
  return (
    <section>
      <h1 className='text-center'>Discover & Share
        <br />
        <span>AI-Powered Prompts</span>
      </h1>
      <p className='my-4 text-center'>
        Promptopia is and open-source  AI prompting tool for modern world to discover, create and share creative prompts
      </p>
      <Feed />
    </section>
  )
}
