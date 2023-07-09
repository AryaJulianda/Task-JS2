const name = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"
  ];
  
  function searchName(keyword, limit, callback) {
    const results = name.filter(n => n.toLowerCase().includes(keyword.toLowerCase())).slice(0, limit);
    callback(results);
  }
  
  function printResults(results) {
    console.log(results);
  }
  
  searchName("car", 3, printResults);
  