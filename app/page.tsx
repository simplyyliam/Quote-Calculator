'use client'

import { useRouter } from "next/navigation";

export default function Hone() {
  const router = useRouter()
  return (
    router.push('/services')
  )
}