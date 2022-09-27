
export const product = {
  name: 'Pepsi Cola',
  image: 'path/to/pepsi.png',
  imageAlt: 'Cold Pepsi',
  offer: {
    price: '€42.00',
    availability: 'InStock',
    description: 'A fresh bottle of soda.',
  }
}

export const productHTML = `
<div itemscope itemtype="http://schema.org/Product">
  <span itemprop="name">${product.name}</span>
  <img src="${product.image}" alt="${product.imageAlt}" />

  <div itemprop="offers" itemscope itemtype="http://schema.org/Offer">
    <span itemprop="price">${product.offer.price}</span>
    <link itemprop="availability" href="http://schema.org/InStock" />
    ${product.offer.availability}
  </div>

  <span itemprop="description">${product.offer.description}</span>
</div>`
