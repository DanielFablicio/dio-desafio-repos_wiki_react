import Image from "next/image";
import styles from "./SearchBar.module.css";

const SearchButton = () => {
  return <button className={styles.searchButton}></button>;
};

export default function SearchBar({
  inputValue,
  inputOnChange,
  buttonOnClick,
}) {
  return (
    <div className={styles.searchBarContainer}>
      <input
        className={styles.searchInput}
        type="search"
        value={inputValue}
        onChange={inputOnChange}
        autoFocus
      ></input>
      <button className={styles.searchButton} onClick={buttonOnClick}>
        <Image
          src="/images/lupa.png"
          alt="Search Icon"
          width={24}
          height={24}
        />
      </button>
    </div>
  );
}
