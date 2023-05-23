export function convertFlavorText(data) {
    let flavorTextConverted = null;
  
    const filteredFlavorTextEntries = data.flavor_text_entries.filter(
      (element) => element.language.name === "en"
    );
  
    flavorTextConverted = filteredFlavorTextEntries[0].flavor_text
        .replace("\f", "\n")
        .toLowerCase();
  
    return flavorTextConverted;
}
  
