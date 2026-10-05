async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }

    const data = await response.json();

    const titles = data.slice(0, 5).map((post) => post.title);

    console.log(titles);
  } catch (error) {
    console.log("Failed to fetch products : ", error);
  }
}

getPosts();
