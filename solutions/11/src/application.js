import 'whatwg-fetch';
import debounce from 'lodash.debounce';

export default () => {
    // BEGIN
      const inputs = document.querySelectorAll('input[data-autocomplete]');
    
      inputs.forEach(input => {
        const url = input.dataset.autocomplete;
        const listName = input.dataset.autocompleteName;
        const list = document.querySelector(ul['data-autocomplete-name="${listName}"']);
    
        input.addEventListener('input', debounce(async e => {
          const query = e.target.value;
          const urlObj = new URL(url, window.location.origin);
          urlObj.searchParams.set('search', query);
    
          try {
            const response = await fetch(urlObj);
            const data = await response.json();
    
            if (data.length > 0) {
              list.innerHTML = data.map(item => <li>${item}</li>).join('');
            } else {
              list.innerHTML = '<li>Nothing</li>';
            }
          } catch (error) {
            console.error(error);
          }
        }, 300));
      });
    // END
};