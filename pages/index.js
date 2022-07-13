import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Superior from '../components/Superior'
import Centro from '../components/Centro'
import Inferior from '../components/Inferior'




export default function Home() {
return (
  <>
    < Superior />
    < Centro />
    < Inferior />
    </>
  )
  
}