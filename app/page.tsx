import Image from 'next/image'
import Header from '@/components/Header'
import Form from '@/components/Form'

export default function Home() {
  return (
    <div className="flex flex-col items-center px-6 py-10 md:p-24">
      <Header />
      <Form />
    </div>
  )
}
