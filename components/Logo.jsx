import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href={'/'}>
      <Image 
      alt="logo"
      src='/s.png'
      width={54}
      height={54}
      priority
      />
    </Link>
  )
}

export default Logo