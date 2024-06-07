// Get the title of the document
const pageTitle = document.title;

// Create a meta tag for the title
const metaTitle = document.createElement('meta');
metaTitle.name = 'title';
metaTitle.content = pageTitle;

// Append the meta tag to the head
document.head.appendChild(metaTitle);

// Add other meta tags as needed

document.head.innerHTML += `
  <meta name="description" content="( ´∀｀)ヵヵヵ站主用來存放人設與古怪言論的自留地，算是半個部落格站。">
  <meta name="keywords" content="個人網站, 人設存放, 寫作內容展示">
  <meta name="author" content="Aiba-Gogetsuhan">
`;