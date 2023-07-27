import './globals.css'
import { Header ,Footer} from '@/components'
export const metadata = {
  title: 'Car For Dayzz',
  description: 'Ease your car rental search experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
