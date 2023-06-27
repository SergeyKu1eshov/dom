export default () => {
const tabs = document.querySelectorAll('[data-bs-toggle="tab"]');

tabs.forEach(tab => {
  tab.addEventListener('click', e => {
    e.preventDefault(); 

    const target = e.currentTarget; 
    const id = target.dataset.bsTarget; 

    const panes = document.querySelectorAll('.tab-pane');

    panes.forEach(pane => {
      if (pane.id === id) {
        pane.classList.add('active');
      } else {
        pane.classList.remove('active');
      }
    });

    const navTabs = target.parentNode.querySelectorAll('.nav-link');
    navTabs.forEach(navTab => {
      if (navTab === target) {
        navTab.classList.add('active');
      } else {
        navTab.classList.remove('active');
      }
    });
  });
});
};