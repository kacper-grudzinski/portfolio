import smallStar from "./images/smallStar.svg";
import git from "./images/gitpurple.svg";
import demo from "./images/demo.svg";

console.log('If you like this page - send me a massage: grudzinski.business@gmail.com')

const username = "kacper-grudzinski";
const direction = "desc";
const projectsContainer = document.querySelector(".projects--js");
fetch(`https://api.github.com/users/${username}/repos?direction=${direction}`)
  .then((response) => response.json())
  .then((response) => {
    for (let repository of response) {
      const {
        homepage,
        topics,
        stargazers_count,
        description,
        name,
        html_url,
      } = repository;

      let tags = ``;
      for (let tag of topics) {
        tags += `<li class="rounded bg-gray-400/10 py-1 px-2 text-sm font-bold">${tag}<li/>`;
      }

      const element =           
      `<article
        class="rounded-wtf md:rounded-wtf-xl overflow-clip bg-gradient-to-br from-white/10 to-white/5 flex flex-col h-full"
      >
        <div
          class="flex ring-1 ring-inset ring-bg shadow-innerlight rounded-t-wtf md:rounded-t-wtf-xl gap-1.5 p-4 bg-gradient-to-br from-white/10 to-white/5 h-11"
        >
          <span
            class="hover:bg-red-600 h-3 w-3 block rounded-full bg-bg opacity-50"
          ></span>
          <span class="h-3 w-3 block rounded-full bg-bg opacity-50"></span>
          <span
            class="h-3 hover:bg-orange-400 w-3 block rounded-full bg-bg opacity-50"
          ></span>
        </div>
        <div
          class="p-5 md:p-6 lg:p-10 flex flex-col justify-between grow ring-1 ring-inset ring-bg"
        >
          <div>
            <header class="items-center mb-4 flex gap-4">
              <h3 class="font-bold leading-none text-2xl">${name}</h3>
              <p
                class="flex rounded leading-none items-center gap-0.5 bg-gray-400/10 py-1 px-2 text-gray-400 font-medium"
              >
                <img
                  src="${smallStar}"
                  alt=""
                  class="w-4 h-4"
                />${stargazers_count}
              </p>
            </header>

            <p class="text-gray-400 text-xl mb-4">${description}</p>
            <ul class="flex gap-2 mb-10 flex-wrap">
              ${tags}
            </ul>
          </div>
          <div
            class="flex flex-col flex-wrap md:flex-row gap-4 items-start"
          >
            <a
              target="_blank"
              rel="noreferrer nofollow"
              class="text-accent bg-bg flex gap-3 font-bold py-4 px-5 items-center rounded-xl border-lightGray border-2 md:text-xl hover:border-accent-500 hover:text-accent-500 transition-all duration-150"
              href="${homepage}"
              ><img
                src="${demo}"
                alt=""
                class="w-6 h-6"
                height="24"
                width="24"
              />View demo</a
            >
            <a
              target="_blank"
              rel="noreferrer nofollow"
              class="text-accent bg-bg flex gap-3 font-bold py-4 px-5 items-center rounded-xl border-lightGray border-2 md:text-xl hover:border-accent-500 hover:text-accent-500 transition-all duration-150"
              href="${html_url}"
              ><img src="${git}" alt="" />Source code</a
            >
          </div>
        </div>
      </article>`;
      if (homepage) projectsContainer.insertAdjacentHTML("beforeend", element);
    }
  })
  .catch((e) => console.log(e));
