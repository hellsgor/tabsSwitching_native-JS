window.addEventListener('DOMContentLoaded', function() {

  let tabsSelector = 'tab',
    tabs = document.querySelectorAll(`.${tabsSelector}`),
    tabsInner = document.querySelector('.tabs-inner'),
    content = document.querySelectorAll('.tab-content');

  tabSwitching(tabs, tabsInner, content, tabsSelector);

})

function tabSwitching(tabsItems, tabsContainer, contentBlocks, tabsSelector) {

  function hideTabContent(a) {
    for (let i = a; i < contentBlocks.length; i++) {
      contentBlocks[i].classList.remove('show');
      contentBlocks[i].classList.add('hide');
    }
  }

  function showTabContent(b) {
    if (contentBlocks[b].classList.contains('hide')) {
      contentBlocks[b].classList.add('show');
      contentBlocks[b].classList.remove('hide');
    }
  }

  hideTabContent(1);
  tabsContainer.addEventListener('click', (event) => {
    let target = event.target;

    if (target && target.classList.contains(tabsSelector)) {
      for (let i = 0; i < tabsItems.length; i++) {
        if (target === tabsItems[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  })

}
