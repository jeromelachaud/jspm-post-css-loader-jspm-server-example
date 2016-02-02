import styles from './Box.css!'
export function Box() {
  const Box = document.getElementById('box');
  const dummy = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, beatae. Ratione sed consequatur blanditiis nemo sequi magni velit libero odio aspernatur doloribus autem tempora suscipit dolorem earum incidunt tempore, dolorum."
  Box.innerHTML = `<div class="${styles.Box__wrap}">
                      <div class="${styles.Box__figure}"></div>
                      <div class="${styles.Box__copy}">${dummy}</div>
                </div>`
};

export let __hotReload = true;
