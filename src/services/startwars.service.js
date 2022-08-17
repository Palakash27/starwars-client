export const fetchProducts = async () => {
    const res = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/api/StarWars`
    );
    const json = await res.json();
    return json;
};
