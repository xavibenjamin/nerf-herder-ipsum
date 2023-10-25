import Image from 'next/image'
import Header from '@/components/Header'
import Form from '@/components/Form'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <Header />
      <Form />
    </div>
  )
}
