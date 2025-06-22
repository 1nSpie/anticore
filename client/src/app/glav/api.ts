import axios from "axios";
import { Brand, Car } from "./type";
import "dotenv/config";

const axiosAgent = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL || "",
});
console.log(
  "✌️process.env.NEXT_PUBLIC_BACKEND_API_URL --->",
  process.env.NEXT_PUBLIC_BACKEND_API_URL
);

export async function getAllBrand(): Promise<Brand[]> {
  const res = await axiosAgent.get("/cars");
  if (!res.data) {
    throw new Error("Failed to fetch services");
  }

  return res.data;
}

export async function getAllCarWithBrand(
  id: number | undefined
): Promise<Car[]> {
  if (!id) {
    throw new Error("id is not a number");
  }
  const res = await axiosAgent.get(`/brands/${id}`);
  console.log(res);
  if (!res.data) {
    throw new Error("Failed to fetch services");
  }

  return res.data;
}
