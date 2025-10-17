const API_URL = "https://catfact.ninja/fact";

export const getCatFact = async () => {
  try {
    const res = await fetch(API_URL, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    return { status: "success", data: data.fact };
  } catch (e) {
    return { status: "error", data: "Failed to fetch cat fact" };
  }
};

getCatFact();
