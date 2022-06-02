export const handleLinkClick = (e) => {
  let i;
  const tabcontent = document.getElementsByClassName('tab-content');
  for (i = 0; i < tabcontent.length; i += 1) {
    tabcontent[i].style.display = 'none';
  }

  const tabLinks = document.getElementsByClassName('links');
  for (i = 0; i < tabLinks.length; i += 1) {
    tabLinks[i].style.color = '';
  }

  if (e.target.classList.contains('book-list-link')) {
    document.querySelector('#allBooks').style.display = 'block';
    e.target.style.color = 'blue';
  }
  if (e.target.classList.contains('add-new-book')) {
    document.querySelector('#add-book-form').style.display = 'block';
    e.target.style.color = 'blue';
  }
  if (e.target.classList.contains('contact-sec')) {
    document.querySelector('#contact').style.display = 'block';
    e.target.style.color = 'blue';
  }
};

export const clearFormFields = () => {
  document.querySelector('#book-name').value = '';
  document.querySelector('#book-author').value = '';
};