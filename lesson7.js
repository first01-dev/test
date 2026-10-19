async function main() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch user");
    }

    const user = await response.json();

    console.log("Name:", user.name);
    console.log("Email:", user.email);
  } catch (error) {
    console.error("Something went wrong:", error.message);
  }
}

main();