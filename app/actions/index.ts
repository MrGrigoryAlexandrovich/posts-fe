"use server";
import { revalidatePath } from "next/cache";

const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}`;

export async function getPosts() {
  const res = await fetch(BASE_URL, { cache: "no-store" });
  return res.json();
}

export async function createPost(formData: FormData) {
  const title = formData.get("title");
  const description = formData.get("description");

  await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, description }),
  });

  revalidatePath("/");
}

export async function updatePost(formData: FormData) {
  const id = formData.get("id");
  const title = formData.get("title");
  const description = formData.get("description");

  await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, description }),
  });

  revalidatePath("/");
}

export async function deletePost(formData: FormData) {
  const id = formData.get("id");

  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  revalidatePath("/");
}
