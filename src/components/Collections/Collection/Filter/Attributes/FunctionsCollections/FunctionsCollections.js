import Card from "../../../../../UI/Card/Card";

export function addCollection(artworks, newForm) {
  /* Add new Collection when Checked */
  const artworkFound = artworks.filter((artwork) => artwork.attributes[newForm.form] === newForm.value);
  if (artworkFound) {
    return artworkFound;
  }
    
  throw new Error("Artwork not Found!");
};

export function removeCollection(collections, newForm) {
  /* Remove Collection when unChecked */
  const artworkAdded = collections.filter((artwork) => artwork.attributes[newForm.form] === newForm.value);
  artworkAdded.forEach((artwork) => {
    const index = collections.indexOf(artwork);
    collections.splice(index, 1);
  });
  
  return collections;
};

export function buildCollectionsCard(collections) {
  /* Build Cards in JSX */
  return collections.map((collection) => {
  return (<Card
  key={collection.id}
  image={`/assets/nft/${collection.image}`}
  name={collection.name}
  price_sol={collection.price_sol}
  price_usd={collection.price_usd}/> 
  )});
};