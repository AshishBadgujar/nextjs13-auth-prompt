import '@styles/globals.css'
import Nav from '@components/Nav'
import Provider from '@components/Provider'

export const metadata = {
  title: 'Promptopia',
  description: 'Discover & Share AI prompts',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <main >
            <Nav />
            <hr />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}
