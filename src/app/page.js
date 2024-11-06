"use client";

import styles from "./page.module.css";
import Logo from "./components/Logo";
import SearchBar from "./components/SearchBar";
import RepoItem from "./components/RepoItem";
import { useState } from "react";
import { handleSearchRepo } from "./services/gitAPI";

export default function Home() {
  const [currentRepo, setCurrentRepo] = useState("");
  const [repos, setRepos] = useState([]);

  const searchRepo = async () => {
    const data = await handleSearchRepo(currentRepo);

    if (data) {
      setCurrentRepo("");

      if (repos.some((item) => item.id === data.id)) {
        alert("Repositório já listado");
        return;
      }
      setRepos((prev) => [...prev, data]);
      return;
    }
    alert("Repositório não encontrado");
  };

  const handleRemoveRepo = (id) => {
    setRepos(repos.filter((repo) => repo.id != id));
  };

  return (
    <div className={styles.page}>
      <Logo />
      <SearchBar
        buttonOnClick={searchRepo}
        inputValue={currentRepo}
        inputOnChange={(e) => setCurrentRepo(e.target.value)}
      />
      <div className={styles.reposContainer}>
        {repos.map((repo, index) => (
          <RepoItem repo={repo} buttonOnClick={handleRemoveRepo} key={index} />
        ))}
      </div>
    </div>
  );
}
