export const fetchProducts = async () => {
    const res = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/api/StarWars`
    );
    const json = await res.json();
    return json;
};

export const fetchProduct = async (id) => {
    const res = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/api/StarWars/${id}`
    );
    const json = await res.json();
    return json;
};

export const deleteProduct = async (id) => {
    const res = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/api/StarWars/${id}`,
        {
            method: "DELETE",
        }
    );
    const json = await res.json();
    return json;
};
