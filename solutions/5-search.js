export default (document) => {
    // BEGIN
    const categoryTitle = document.querySelector('.content h1').textContent;
    const categoryDescription = document.querySelector('.content .description').textContent;
    const articleSections = Array.from(document.querySelectorAll('.content .links > div'));
    const articles = articleSections.map((section) => {
      const title = section.querySelector('h2 a').textContent;
      const description = section.querySelector('p').textContent;
      return { title, description };
    });
  
    return { title: categoryTitle, description: categoryDescription, items: articles };
    // END
  };
