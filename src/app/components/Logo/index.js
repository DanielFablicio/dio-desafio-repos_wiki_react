import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/images/gitlogo.png"
      alt="Logo do GitRepos"
      width={234}
      height={132}
    />
  );
}
