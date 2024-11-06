const BASE_API_URL = "https://api.github.com/repos/";

export async function handleSearchRepo(untreatedRepo) {
  const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  const isFirstLetterASpecialChar = specialCharRegex.test(untreatedRepo[0]);

  let repo = isFirstLetterASpecialChar ? untreatedRepo.slice(1) : untreatedRepo;

  try {
    const finalURL = `${BASE_API_URL}/${repo}`;
    const response = await fetch(BASE_API_URL + repo);
    const data = await response.json();
    return data;
  } catch (error) {
    alert("Erro ao pesquisar o repositório");
    return undefined;
  }
}
