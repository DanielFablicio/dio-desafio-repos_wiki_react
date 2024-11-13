import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/gitlogo.png`}
      alt="Logo do GitRepos"
      width={234}
      height={132}
    />
  );
}
