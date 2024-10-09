(function() {
  const header = document.createElement('header');
  header.style.backgroundColor = '#333';
  header.style.padding = '1rem';
  header.style.display = 'flex';
  header.style.alignItems = 'center';
  header.style.justifyContent = 'space-between';

  const logo = document.createElement('img');
  logo.src = 'https://example.com/logo.png'; // Replace with your logo URL
  logo.alt = 'Shop Logo';
  logo.style.height = '50px';

  header.appendChild(logo);

  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  ul.style.listStyleType = 'none';
  ul.style.display = 'flex';
  ul.style.gap = '1rem';

  const shops = [
    { name: 'Store 1', url: 'https://store1.com' },
    { name: 'Store 2', url: 'https://store2.com' },
    { name: 'Store 3', url: 'https://store3.com' }
  ];

  shops.forEach(shop => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = shop.url;
    a.textContent = shop.name;
    a.style.textDecoration = 'none';
    a.style.color = '#fff';
    li.appendChild(a);
    ul.appendChild(li);
  });

  nav.appendChild(ul);
  header.appendChild(nav);

  // Inject the header into the body or an existing header element in the storefront
  document.body.prepend(header);
  console.log("Header injected successfully.")
})();
