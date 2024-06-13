import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href={'/'}>
      <Image 
      alt="logo"
      src='/logo.png'
      width={54}
      height={54}
      priority
      />
    </Link>
  )
}

export default Logo