const API_BASE_URL = "https://dummyjson.com";

export const API = {
  getAllProducts: (limit = 10, skip = 0) =>
    `${API_BASE_URL}/products?limit=${limit}&skip=${skip}`,
  deleteProduct: (id) => `${API_BASE_URL}/products/${id}`,
  searchProduct: (query) => `${API_BASE_URL}/products/search?q=${query}`,
};

export async function getAllProducts(limit = 10, skip = 0) {
  const res = await fetch(API.getAllProducts(limit, skip));
  return res.json();
}

export async function deleteProduct(id) {
  const res = await fetch(API.deleteProduct(id), {
    method: "DELETE",
  });

  return res.json();
}

export async function searchProduct(query) {
  const res = await fetch(API.searchProduct(query));
  return res.json();
}
