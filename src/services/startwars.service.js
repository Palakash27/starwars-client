export const fetchProducts = async () => {
    console.log("coming here");
    const res = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/api/StarWars`
    );
    console.log("as", res);
    const json = await res.json();
    console.log("asdf", json);
    return json;
};
